"use client";

import { useEffect, useRef, useState } from "react";
import { useTypingEngine } from "@/hooks/useTypingEngine";
import styles from "./TypingTest.module.css";
import MonsterGame from "./MonsterGame";
import VirtualKeyboard from "./VirtualKeyboard";
import ConfigBar from "./typing-test/ConfigBar";
import StatsDisplay from "./typing-test/StatsDisplay";
import ResultOverlay from "./typing-test/ResultOverlay";

export default function TypingTest() {
    const {
        words,
        gameState,
        cursorIndex,
        wpm,
        accuracy,
        handleInput,
        resetGame,
        language,
        setLanguage,
        difficulty,
        setDifficulty,
        mode,
        setMode,
        timeLimit,
        setTimeLimit,
        timeLeft,
        stopGame
    } = useTypingEngine();

    const [isGameMode, setIsGameMode] = useState(false);
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [showHints, setShowHints] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const containerRef = useRef<HTMLDivElement>(null);
    const caretRef = useRef<HTMLDivElement>(null);

    // Initial Theme Load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const targetTheme = savedTheme || systemTheme;

        if (targetTheme !== theme) {
            setTheme(targetTheme);
        }
        document.documentElement.setAttribute('data-theme', targetTheme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Handle Global Keydown (Only if NOT in game mode)
    useEffect(() => {
        if (isGameMode) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.altKey || e.metaKey) return;
            if (e.key === " " && gameState !== 'idle') {
                e.preventDefault();
            }
            if (e.key.length === 1 || e.key === "Backspace" || e.key === " ") {
                handleInput(e.key);
            }
            if (e.key === 'Tab') {
                e.preventDefault();
                resetGame();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleInput, resetGame, gameState, isGameMode]);

    // Auto-scroll to active word
    useEffect(() => {
        if (!containerRef.current) return;
        const activeWord = document.getElementById(`word-${cursorIndex.wordIndex}`);
        if (activeWord) {
            const container = containerRef.current;
            const wordTop = activeWord.offsetTop;
            const containerHeight = container.clientHeight;
            const wordHeight = activeWord.clientHeight;
            const targetScroll = wordTop - (containerHeight / 2) + (wordHeight / 2);

            container.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }
    }, [cursorIndex.wordIndex, words]);

    // Update Caret Position
    useEffect(() => {
        const updateCaret = () => {
            if (!containerRef.current || !caretRef.current) return;

            const currentWordEl = document.getElementById(`word-${cursorIndex.wordIndex}`);
            if (!currentWordEl) return;

            const letterIndex = cursorIndex.letterIndex;
            const letters = currentWordEl.querySelectorAll(`.${styles.letter}`);

            let targetLeft = 0;
            let targetTop = 0;
            let height = 0;

            if (letters.length > 0 && letterIndex < letters.length) {
                const targetLetter = letters[letterIndex] as HTMLElement;
                targetLeft = currentWordEl.offsetLeft + targetLetter.offsetLeft;
                targetTop = currentWordEl.offsetTop + targetLetter.offsetTop;
                height = targetLetter.offsetHeight;
            } else if (letters.length > 0) {
                const lastLetter = letters[letters.length - 1] as HTMLElement;
                targetLeft = currentWordEl.offsetLeft + lastLetter.offsetLeft + lastLetter.offsetWidth;
                targetTop = currentWordEl.offsetTop + lastLetter.offsetTop;
                height = lastLetter.offsetHeight;
            } else {
                targetLeft = currentWordEl.offsetLeft;
                targetTop = currentWordEl.offsetTop;
                height = currentWordEl.clientHeight || 24;
            }

            caretRef.current.style.left = `${targetLeft}px`;
            caretRef.current.style.top = `${targetTop + (height * 0.1)}px`;
            caretRef.current.style.height = `${height * 0.8}px`;
        };

        updateCaret();
        window.addEventListener('resize', updateCaret);
        return () => window.removeEventListener('resize', updateCaret);

    }, [cursorIndex, words]);

    if (isGameMode) {
        return <MonsterGame onExit={() => setIsGameMode(false)} language={language} difficulty={difficulty} />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <ConfigBar
                    language={language}
                    setLanguage={setLanguage}
                    mode={mode}
                    setMode={setMode}
                    timeLimit={timeLimit}
                    setTimeLimit={setTimeLimit}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    showKeyboard={showKeyboard}
                    setShowKeyboard={setShowKeyboard}
                    showHints={showHints}
                    setShowHints={setShowHints}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    isHidden={gameState === 'start'}
                />

                <StatsDisplay
                    mode={mode}
                    gameState={gameState}
                    timeLeft={timeLeft}
                    wpm={wpm}
                    stopGame={stopGame}
                    isGameMode={isGameMode}
                    setIsGameMode={setIsGameMode}
                />
            </div>

            <div
                ref={containerRef}
                className={`${styles.wordsContainer} ${gameState === 'finish' ? styles.hidden : ''} ${mode === 'document' ? styles.documentMode : ''}`}
            >
                {words.map((word, wIdx) => {
                    const hasError = word.letters.some(l => l.status === 'incorrect');

                    return (
                        <div key={wIdx} id={`word-${wIdx}`} className={`${styles.word} ${hasError ? styles.wordError : ''}`}>
                            {word.letters.map((letter, lIdx) => {
                                let className = styles.letter;
                                if (letter.status === 'correct') className += ` ${styles.correct}`;
                                if (letter.status === 'incorrect') className += ` ${styles.incorrect}`;

                                return (
                                    <span key={lIdx} className={className}>
                                        {letter.char}
                                    </span>
                                );
                            })}
                        </div>
                    );
                })}
                <div ref={caretRef} className={styles.caret} />
            </div>

            {gameState === 'finish' && (
                <ResultOverlay wpm={wpm} accuracy={accuracy} resetGame={resetGame} />
            )}

            <div className={styles.instruction}>
                {gameState === 'idle' && "Press any key to start"}
            </div>

            {showKeyboard && (
                <VirtualKeyboard
                    language={language}
                    activeChar={
                        words[cursorIndex.wordIndex]?.letters[cursorIndex.letterIndex]?.char || ' '
                    }
                    showHints={showHints}
                />
            )}
        </div>
    );
}
