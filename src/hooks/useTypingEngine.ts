import { useState, useEffect, useCallback, useRef } from 'react';
import { getRandomWords, Language, Difficulty } from '@/lib/dictionaries';

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
    const [language, setLanguage] = useState<Language>('english');
    const [difficulty, setDifficulty] = useState<Difficulty>('normal');
    const [words, setWords] = useState<Word[]>([]);
    const [gameState, setGameState] = useState<TypingState>('idle');
    const [cursorIndex, setCursorIndex] = useState({ wordIndex: 0, letterIndex: 0 });

    // Metrics
    const [startTime, setStartTime] = useState<number | null>(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [correctKeyStrokes, setCorrectKeyStrokes] = useState(0);
    const [totalKeyStrokes, setTotalKeyStrokes] = useState(0);

    const resetGame = useCallback(() => {
        const newWordsStrings = getRandomWords(language, difficulty, 20); // Generate 20 words for now

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
    }, [language, difficulty]);

    // Initial load
    useEffect(() => {
        resetGame();
    }, [resetGame]);

    const handleInput = useCallback((key: string) => {
        if (gameState === 'finish') return;

        if (gameState === 'idle') {
            setGameState('start');
            setStartTime(Date.now());
        }

        setTotalKeyStrokes(prev => prev + 1);

        setWords(prevWords => {
            const newWords = [...prevWords];
            const currentWordIndex = cursorIndex.wordIndex;
            const currentLetterIndex = cursorIndex.letterIndex;
            const currentWord = newWords[currentWordIndex];

            // Handle Backspace
            if (key === 'Backspace') {
                if (currentLetterIndex > 0) {
                    // Move back in current word
                    currentWord.letters[currentLetterIndex - 1].status = 'pending';
                    setCursorIndex({ wordIndex: currentWordIndex, letterIndex: currentLetterIndex - 1 });
                } else if (currentWordIndex > 0) {
                    // Move to previous word
                    const prevWordIndex = currentWordIndex - 1;
                    const prevWord = newWords[prevWordIndex];
                    // Determine where to put cursor in previous word (at the end)
                    // Simple implementation: allow going back to any index? 
                    // Monkeytype style usually locks completed words unless you specifically want to support that
                    // For now, let's just support backspacing within the current word for MVP simplicity, 
                    // or simple wrap back:
                    const prevWordLen = prevWord.letters.length;
                    setCursorIndex({ wordIndex: prevWordIndex, letterIndex: prevWordLen });
                }
                return newWords;
            }

            // Handle Space (Next Word)
            if (key === ' ') {
                // If word is finished (or skipped)
                if (currentWordIndex < newWords.length - 1) {
                    setCursorIndex({ wordIndex: currentWordIndex + 1, letterIndex: 0 });
                } else {
                    // End of test
                    setGameState('finish');
                }
                return newWords;
            }

            // Handle Normal Character
            if (key.length === 1) {
                // Check if we are still within the word bounds
                if (currentLetterIndex < currentWord.letters.length) {
                    const expectedChar = currentWord.letters[currentLetterIndex].char;

                    if (key === expectedChar) {
                        currentWord.letters[currentLetterIndex].status = 'correct';
                        setCorrectKeyStrokes(prev => prev + 1);
                    } else {
                        currentWord.letters[currentLetterIndex].status = 'incorrect';
                    }

                    // Move cursor
                    if (currentLetterIndex === currentWord.letters.length - 1 && currentWordIndex === newWords.length - 1) {
                        setGameState('finish');
                    } else {
                        setCursorIndex({ wordIndex: currentWordIndex, letterIndex: currentLetterIndex + 1 });
                    }
                }
                // Logic for "extra" characters could go here (if user keeps typing after word ends)
            }

            return newWords;
        });

    }, [gameState, cursorIndex]);

    // WPM Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameState === 'start') {
            interval = setInterval(() => {
                if (startTime) {
                    const timeElapsedMin = (Date.now() - startTime) / 60000;
                    // Standard WPM = (Total Characters / 5) / Time (min)
                    // But often useful to use Correct Characters for net WPM
                    const currentWpm = Math.round((correctKeyStrokes / 5) / timeElapsedMin);
                    setWpm(currentWpm);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameState, startTime, correctKeyStrokes]);

    return {
        language,
        setLanguage,
        difficulty,
        setDifficulty,
        words,
        gameState,
        cursorIndex,
        wpm,
        accuracy,
        handleInput,
        resetGame
    };
};
