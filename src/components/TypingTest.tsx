"use client";

import { useEffect, useRef, useState } from "react";
import { useTypingEngine } from "@/hooks/useTypingEngine";
import styles from "./TypingTest.module.css";

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
        setDifficulty
    } = useTypingEngine();

    const containerRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    // Handle Global Keydown
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore functional keys unless it's Backspace
            if (e.ctrlKey || e.altKey || e.metaKey) return;

            // Prevent scrolling on Space
            if (e.key === " " && gameState !== 'idle') {
                e.preventDefault();
            }

            if (e.key.length === 1 || e.key === "Backspace" || e.key === " ") {
                handleInput(e.key);
            }

            // Quick restart with Tab
            if (e.key === 'Tab') {
                e.preventDefault();
                resetGame();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleInput, resetGame, gameState]);

    return (
        <div className={styles.wrapper}>
            {/* Header / Stats */}
            <div className={styles.header}>
                <div className={styles.modes}>
                    <button
                        className={`${styles.modeBtn} ${language === 'english' ? styles.active : ''}`}
                        onClick={() => { setLanguage('english'); resetGame(); }}
                    >
                        English
                    </button>
                    <button
                        className={`${styles.modeBtn} ${language === 'thai' ? styles.active : ''}`}
                        onClick={() => { setLanguage('thai'); resetGame(); }}
                    >
                        Thai
                    </button>

                    <div className={styles.divider}>|</div>

                    <button
                        className={`${styles.modeBtn} ${difficulty === 'starter' ? styles.active : ''}`}
                        onClick={() => { setDifficulty('starter'); resetGame(); }}
                    >
                        Starter
                    </button>
                    <button
                        className={`${styles.modeBtn} ${difficulty === 'normal' ? styles.active : ''}`}
                        onClick={() => { setDifficulty('normal'); resetGame(); }}
                    >
                        Normal
                    </button>
                    <button
                        className={`${styles.modeBtn} ${difficulty === 'expert' ? styles.active : ''}`}
                        onClick={() => { setDifficulty('expert'); resetGame(); }}
                    >
                        Expert
                    </button>
                </div>

                {gameState === 'start' || gameState === 'finish' ? (
                    <div className={styles.stats}>
                        {wpm} wpm / {accuracy}% acc
                    </div>
                ) : null}
            </div>

            {/* Typing Area */}
            <div
                ref={containerRef}
                className={`${styles.wordsContainer} ${gameState === 'finish' ? styles.hidden : ''}`}
            >
                {words.map((word, wIdx) => (
                    <div key={wIdx} className={styles.word}>
                        {word.letters.map((letter, lIdx) => {
                            const isCursor = cursorIndex.wordIndex === wIdx && cursorIndex.letterIndex === lIdx;
                            const isWordActive = cursorIndex.wordIndex === wIdx;

                            let className = styles.letter;
                            if (letter.status === 'correct') className += ` ${styles.correct}`;
                            if (letter.status === 'incorrect') className += ` ${styles.incorrect}`;
                            if (isCursor) className += ` ${styles.cursor}`;

                            return (
                                <span key={lIdx} className={className}>
                                    {letter.char}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Results Screen (Simple Overlay) */}
            {gameState === 'finish' && (
                <div className={styles.results}>
                    <div className={styles.finalWpm}>{wpm}</div>
                    <div className={styles.label}>wpm</div>
                    <button className={styles.restartBtn} onClick={resetGame}>Restart (Tab)</button>
                </div>
            )}

            <div className={styles.instruction}>
                {gameState === 'idle' && "Press any key to start"}
            </div>
        </div>
    );
}
