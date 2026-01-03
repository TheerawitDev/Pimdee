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
                        Lvl 1
                    </button>
                    <button
                        className={`${styles.modeBtn} ${difficulty === 'elementary' ? styles.active : ''}`}
                        onClick={() => { setDifficulty('elementary'); resetGame(); }}
                    >
                        Lvl 2
                    </button>
                    <button
                        className={`${styles.modeBtn} ${difficulty === 'intermediate' ? styles.active : ''}`}
                        onClick={() => { setDifficulty('intermediate'); resetGame(); }}
                    >
                        Lvl 3
                    </button>
                    <button
                        className={`${styles.modeBtn} ${difficulty === 'advanced' ? styles.active : ''}`}
                        onClick={() => { setDifficulty('advanced'); resetGame(); }}
                    >
                        Lvl 4
                    </button>
                    <button
                        className={`${styles.modeBtn} ${difficulty === 'master' ? styles.active : ''}`}
                        onClick={() => { setDifficulty('master'); resetGame(); }}
                        title="Master"
                    >
                        Lvl 5
                    </button>
                </div>

                {gameState === 'start' || gameState === 'finish' ? (
                    <div className={styles.stats}>
                        {wpm} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>wpm</span>
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

            {/* Results Screen (Overlay) */}
            {gameState === 'finish' && (
                <div className={styles.results}>
                    <div className={styles.resultGroup}>
                        <div>
                            <div className={styles.resultValue}>{wpm}</div>
                            <div className={styles.resultLabel}>wpm</div>
                        </div>
                        <div>
                            <div className={styles.resultValue}>{accuracy}%</div>
                            <div className={styles.resultLabel}>acc</div>
                        </div>
                    </div>
                    <button className={styles.restartBtn} onClick={resetGame}>Restart (Tab)</button>
                </div>
            )}

            <div className={styles.instruction}>
                {gameState === 'idle' && "Press any key to start"}
            </div>
        </div>
    );
}
