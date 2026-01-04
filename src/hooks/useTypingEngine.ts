import { useState, useEffect, useCallback } from 'react';
import { getRandomWords, getRandomDocument, Language, Difficulty } from '@/lib/dictionaries';

export type TypingState = 'idle' | 'start' | 'finish';

export type LetterStatus = 'correct' | 'incorrect' | 'extra' | 'pending';

export interface Letter {
    char: string;
    status: LetterStatus;
}

export interface Word {
    letters: Letter[];
}

export const useTypingEngine = () => {
    const [language, setLanguage] = useState<Language>('thai');
    const [difficulty, setDifficulty] = useState<Difficulty>('elementary');
    const [words, setWords] = useState<Word[]>([]);
    const [gameState, setGameState] = useState<TypingState>('idle');
    const [cursorIndex, setCursorIndex] = useState({ wordIndex: 0, letterIndex: 0 });

    // Modes
    const [mode, setMode] = useState<'standard' | 'time' | 'document'>('standard');
    const [timeLimit, setTimeLimit] = useState<30 | 60 | 120>(60);
    const [timeLeft, setTimeLeft] = useState(60);

    // Metrics
    const [startTime, setStartTime] = useState<number | null>(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [correctKeyStrokes, setCorrectKeyStrokes] = useState(0);
    const [totalKeyStrokes, setTotalKeyStrokes] = useState(0);


    const resetGame = useCallback(() => {
        let newWordsStrings: string[] = [];

        if (mode === 'document') {
            const doc = getRandomDocument(language);
            newWordsStrings = doc.split(' ');
        } else {
            newWordsStrings = getRandomWords(language, difficulty, 50);
        }

        // Map strings to Word objects
        const newWords: Word[] = newWordsStrings.map(wordString => ({
            letters: wordString.split('').map(char => ({ char, status: 'pending' }))
        }));

        setWords(newWords);
        setGameState('idle');
        setCursorIndex({ wordIndex: 0, letterIndex: 0 });
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
        setCorrectKeyStrokes(0);
        setTotalKeyStrokes(0);


        // Reset Timer
        setTimeLeft(timeLimit);
    }, [language, difficulty, mode, timeLimit]);

    // Initial load
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        resetGame();
    }, [resetGame]);

    const handleInput = useCallback((key: string) => {
        if (gameState === 'finish') return;

        if (gameState === 'idle') {
            setGameState('start');
            setStartTime(Date.now());
        }

        setWords(prevWords => {
            let newWords = [...prevWords];
            const currentWordIndex = cursorIndex.wordIndex;
            const currentLetterIndex = cursorIndex.letterIndex;
            const currentWord = newWords[currentWordIndex];

            // Auto-generate more words if near end (only if NOT document mode, assuming random words)
            // For Time Mode or Standard (if we want infinite standard)
            // Auto-generate more words if near end (only if NOT document mode, assuming random words)
            // For Time Mode or Standard (if we want infinite standard)
            // AND NOW for Document mode (infinite loop until stop)
            if ((mode === 'time' || mode === 'document') && currentWordIndex > newWords.length - 40) {
                let moreWordsStrings: string[] = [];
                if (mode === 'document') {
                    const doc = getRandomDocument(language);
                    moreWordsStrings = doc.split(' ');
                } else {
                    moreWordsStrings = getRandomWords(language, difficulty, 40);
                }

                const moreWords = moreWordsStrings.map(str => ({
                    letters: str.split('').map(char => ({ char, status: 'pending' } as Letter))
                }));
                newWords = [...newWords, ...moreWords];
            }

            // Handle Backspace
            if (key === 'Backspace') {
                if (currentLetterIndex > 0) {
                    currentWord.letters[currentLetterIndex - 1].status = 'pending';
                    setCursorIndex({ wordIndex: currentWordIndex, letterIndex: currentLetterIndex - 1 });
                } else if (currentWordIndex > 0) {
                    const prevWordIndex = currentWordIndex - 1;
                    const prevWord = newWords[prevWordIndex];
                    const prevWordLen = prevWord.letters.length;
                    setCursorIndex({ wordIndex: prevWordIndex, letterIndex: prevWordLen });
                }
                return newWords;
            }

            // Handle Space (Next Word)
            if (key === ' ') {
                if (currentWordIndex < newWords.length - 1) {
                    setCursorIndex({ wordIndex: currentWordIndex + 1, letterIndex: 0 });
                } else if (mode === 'standard') {
                    setGameState('finish');
                }
                // For document mode, we don't finish automatically on space, just keep going (infinite) until user stops
                return newWords;
            }

            // Handle Normal Character
            if (key.length === 1) {
                if (currentLetterIndex < currentWord.letters.length) {
                    const expectedChar = currentWord.letters[currentLetterIndex].char;

                    setTotalKeyStrokes(prev => {
                        const newTotal = prev + 1;
                        // Calculate accuracy immediately or in effect? In effect is cleaner but here is instant.
                        // We'll trust the effect or calc it here. Let's do it in effect for consistency or just render it?
                        // Actually, calculating in render is safer if we trust the states.
                        // But let's verify update:
                        return newTotal;
                    });

                    if (key === expectedChar) {
                        currentWord.letters[currentLetterIndex].status = 'correct';
                        setCorrectKeyStrokes(prev => prev + 1);
                    } else {
                        currentWord.letters[currentLetterIndex].status = 'incorrect';
                    }

                    if (currentLetterIndex === currentWord.letters.length - 1 && currentWordIndex === newWords.length - 1) {
                        if (mode === 'standard') setGameState('finish');
                        // For time/document mode, we wait for more words or manual stop.
                    } else {
                        setCursorIndex({ wordIndex: currentWordIndex, letterIndex: currentLetterIndex + 1 });
                    }
                }
            }

            return newWords;
        });

    }, [gameState, cursorIndex, mode, language, difficulty]);

    useEffect(() => {
        if (totalKeyStrokes > 0) {
            const acc = Math.round((correctKeyStrokes / totalKeyStrokes) * 100);
            setAccuracy(acc);
        } else {
            setAccuracy(100);
        }
    }, [correctKeyStrokes, totalKeyStrokes]);

    // Timer & WPM
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameState === 'start') {
            interval = setInterval(() => {
                const now = Date.now();
                if (startTime) {
                    const timeElapsedSec = (now - startTime) / 1000;
                    const timeElapsedMin = timeElapsedSec / 60;
                    const currentWpm = Math.round((correctKeyStrokes / 5) / (timeElapsedMin || 0.001)); // Avoid /0
                    setWpm(currentWpm);

                    // Time Mode Countdown
                    if (mode === 'time') {
                        const remaining = Math.max(0, timeLimit - Math.floor(timeElapsedSec));
                        setTimeLeft(remaining);
                        // Ensure we hit exactly 0 and finish
                        if (remaining === 0) {
                            setGameState('finish');
                        }
                    }
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameState, startTime, correctKeyStrokes, mode, timeLimit]);

    return {
        language,
        setLanguage,
        difficulty,
        setDifficulty,
        mode,
        setMode,
        timeLimit,
        setTimeLimit,
        timeLeft,
        words,
        gameState,
        cursorIndex,
        wpm,
        accuracy,
        handleInput,
        resetGame,
        stopGame: () => setGameState('finish')
    };
};
