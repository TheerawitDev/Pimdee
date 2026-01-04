"use client";

import { useEffect, useRef, useState } from "react";
import { useTypingEngine } from "@/hooks/useTypingEngine";
import { Difficulty } from "@/lib/dictionaries";
import styles from "./TypingTest.module.css";
import MonsterGame from "./MonsterGame";

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
        timeLeft
    } = useTypingEngine();

    const [isGameMode, setIsGameMode] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle Global Keydown (Only if NOT in game mode)
    useEffect(() => {
        if (isGameMode) return;

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
    }, [handleInput, resetGame, gameState, isGameMode]);

    if (isGameMode) {
        return <MonsterGame onExit={() => setIsGameMode(false)} language={language} />;
    }

    return (
        <div className={styles.wrapper}>
            {/* Header / Stats */}
            <div className={styles.header}>
                <div className={styles.modes}>
                    <div className={styles.group}>
                        <button
                            className={`${styles.modeBtn} ${language === 'english' ? styles.active : ''}`}
                            onClick={() => setLanguage('english')}
                        >
                            ENG
                        </button>
                        <button
                            className={`${styles.modeBtn} ${language === 'thai' ? styles.active : ''}`}
                            onClick={() => setLanguage('thai')}
                        >
                            TH
                        </button>
                    </div>

                    <div className={styles.divider}>|</div>

                    <div className={styles.group}>
                        <button
                            className={`${styles.modeBtn} ${mode === 'standard' ? styles.active : ''}`}
                            onClick={() => setMode('standard')}
                        >
                            Words
                        </button>
                        <button
                            className={`${styles.modeBtn} ${mode === 'time' ? styles.active : ''}`}
                            onClick={() => setMode('time')}
                        >
                            Time
                        </button>
                        <button
                            className={`${styles.modeBtn} ${mode === 'document' ? styles.active : ''}`}
                            onClick={() => setMode('document')}
                        >
                            Document
                        </button>
                    </div>

                    <div className={styles.divider}>|</div>

                    <button
                        className={`${styles.modeBtn} ${isGameMode ? styles.active : ''}`}
                        style={{ color: 'var(--error-color)', fontWeight: 'bold' }}
                        onClick={() => setIsGameMode(true)}
                    >
                        GAME MODE
                    </button>

                    {mode === 'time' && (
                        <>
                            <div className={styles.divider}>|</div>
                            <div className={styles.group}>
                                <button className={`${styles.modeBtn} ${timeLimit === 30 ? styles.active : ''}`} onClick={() => setTimeLimit(30)}>30s</button>
                                <button className={`${styles.modeBtn} ${timeLimit === 60 ? styles.active : ''}`} onClick={() => setTimeLimit(60)}>60s</button>
                                <button className={`${styles.modeBtn} ${timeLimit === 120 ? styles.active : ''}`} onClick={() => setTimeLimit(120)}>120s</button>
                            </div>
                        </>
                    )}

                    <div className={styles.divider}>|</div>

                    <div className={styles.group}>
                        {[
                            { id: 'starter', en: 'Beginner', th: 'เริ่มต้น' },
                            { id: 'elementary', en: 'Elementary', th: 'พื้นฐาน' },
                            { id: 'intermediate', en: 'Intermediate', th: 'ปานกลาง' },
                            { id: 'advanced', en: 'Advanced', th: 'สูง' },
                            { id: 'master', en: 'Master', th: 'เชี่ยวชาญ' }
                        ].map((lvl) => (
                            <button
                                key={lvl.id}
                                className={`${styles.modeBtn} ${difficulty === lvl.id ? styles.active : ''}`}
                                onClick={() => setDifficulty(lvl.id as Difficulty)}
                            >
                                {language === 'thai' ? lvl.th : lvl.en}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.stats}>
                    {mode === 'time' && gameState !== 'finish' && <span className={styles.timer}>{timeLeft}s</span>}
                    {gameState !== 'idle' && (
                        <span>{wpm} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>wpm</span></span>
                    )}
                </div>
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
