"use client";

import { useEffect, useRef, useState } from "react";
import { useTypingEngine } from "@/hooks/useTypingEngine";
import { Difficulty } from "@/lib/dictionaries";
import styles from "./TypingTest.module.css";
import MonsterGame from "./MonsterGame";
import VirtualKeyboard from "./VirtualKeyboard";

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
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const containerRef = useRef<HTMLDivElement>(null);
    const caretRef = useRef<HTMLDivElement>(null);

    // Initial Theme Load
    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const targetTheme = savedTheme || systemTheme;

        if (targetTheme !== theme) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
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

    // Auto-scroll to active word
    useEffect(() => {
        if (!containerRef.current) return;
        const activeWord = document.getElementById(`word-${cursorIndex.wordIndex}`);
        if (activeWord) {
            const container = containerRef.current;
            const wordTop = activeWord.offsetTop;
            const containerHeight = container.clientHeight;
            const wordHeight = activeWord.clientHeight;

            // Calculate target scroll position to center the word
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

            // Find position
            let targetLeft = 0;
            let targetTop = 0;
            let height = 0;

            if (letters.length > 0 && letterIndex < letters.length) {
                // Cursor at a specific letter
                const targetLetter = letters[letterIndex] as HTMLElement;
                targetLeft = currentWordEl.offsetLeft + targetLetter.offsetLeft;
                targetTop = currentWordEl.offsetTop + targetLetter.offsetTop;
                height = targetLetter.offsetHeight;
            } else if (letters.length > 0) {
                // Cursor at end of word
                const lastLetter = letters[letters.length - 1] as HTMLElement;
                targetLeft = currentWordEl.offsetLeft + lastLetter.offsetLeft + lastLetter.offsetWidth;
                targetTop = currentWordEl.offsetTop + lastLetter.offsetTop;
                height = lastLetter.offsetHeight;

            } else {
                // Empty word or just starting (fallback)
                targetLeft = currentWordEl.offsetLeft;
                targetTop = currentWordEl.offsetTop;
                height = currentWordEl.clientHeight || 24;
            }

            // Adjust for container scroll if needed? 
            // offsetTop is relative to the offsetParent, which should be the container if it has position: relative?
            // Check css: .wordsContainer has position: relative? Yes.

            caretRef.current.style.left = `${targetLeft}px`;
            caretRef.current.style.top = `${targetTop + (height * 0.1)}px`; // slight offset
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
            {/* Header / Stats */}
            <div className={styles.header}>
                <div className={styles.configBar}>
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
                            ไทย
                        </button>
                    </div>

                    <div className={styles.group}>
                        <button
                            className={`${styles.modeBtn} ${mode === 'standard' ? styles.active : ''}`}
                            onClick={() => setMode('standard')}
                        >
                            {language === 'thai' ? 'คำ' : 'Words'}
                        </button>
                        <button
                            className={`${styles.modeBtn} ${mode === 'time' ? styles.active : ''}`}
                            onClick={() => setMode('time')}
                        >
                            {language === 'thai' ? 'จำกัดเวลา' : 'Time'}
                        </button>
                        <button
                            className={`${styles.modeBtn} ${mode === 'document' ? styles.active : ''}`}
                            onClick={() => setMode('document')}
                        >
                            {language === 'thai' ? 'บทความ' : 'Document'}
                        </button>
                    </div>

                    {mode === 'time' && (
                        <div className={styles.group}>
                            <button className={`${styles.modeBtn} ${timeLimit === 30 ? styles.active : ''}`} onClick={() => setTimeLimit(30)}>30s</button>
                            <button className={`${styles.modeBtn} ${timeLimit === 60 ? styles.active : ''}`} onClick={() => setTimeLimit(60)}>60s</button>
                            <button className={`${styles.modeBtn} ${timeLimit === 120 ? styles.active : ''}`} onClick={() => setTimeLimit(120)}>120s</button>
                        </div>
                    )}

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

                    {/* Keyboard Toggle */}
                    <button
                        className={`${styles.themeToggle} ${showKeyboard ? styles.active : ''}`}
                        onClick={() => setShowKeyboard(!showKeyboard)}
                        title="Toggle Virtual Keyboard"
                        style={{ marginRight: '0.5rem' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                            <line x1="6" y1="8" x2="6" y2="8"></line>
                            <line x1="10" y1="8" x2="10" y2="8"></line>
                            <line x1="14" y1="8" x2="14" y2="8"></line>
                            <line x1="18" y1="8" x2="18" y2="8"></line>
                            <line x1="6" y1="12" x2="6" y2="12"></line>
                            <line x1="10" y1="12" x2="10" y2="12"></line>
                            <line x1="14" y1="12" x2="14" y2="12"></line>
                            <line x1="18" y1="12" x2="18" y2="12"></line>
                            <line x1="6" y1="16" x2="6" y2="16"></line>
                            <line x1="10" y1="16" x2="14" y2="16"></line>
                            <line x1="18" y1="16" x2="18" y2="16"></line>
                        </svg>
                    </button>

                    {/* Theme Toggle */}
                    <button className={styles.themeToggle} onClick={toggleTheme} title="Toggle Theme">
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>
                </div>

                <div className={styles.stats}>
                    {mode === 'time' && gameState !== 'finish' && <span className={styles.timer}>{timeLeft}s</span>}
                    {mode === 'time' && gameState === 'finish' && (
                        <span>{wpm} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>wpm</span></span>
                    )}
                    {gameState === 'start' && (
                        <button
                            className={styles.modeBtn}
                            style={{ color: 'var(--error-color)', border: '1px solid var(--error-color)' }}
                            onClick={stopGame}
                        >
                            STOP
                        </button>
                    )}
                    <button
                        className={`${styles.modeBtn} ${isGameMode ? styles.active : ''}`}
                        style={{ color: 'var(--error-color)', fontWeight: 'bold' }}
                        onClick={() => setIsGameMode(true)}
                    >
                        GAME MODE
                    </button>
                </div>
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
                                // Removed structural cursor class from here to prevent layout shift/breaking
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
                {/* Floating Caret */}
                <div ref={caretRef} className={styles.caret} />
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

            {showKeyboard && (
                <VirtualKeyboard
                    language={language}
                    activeChar={
                        words[cursorIndex.wordIndex]?.letters[cursorIndex.letterIndex]?.char || ' '
                    }
                />
            )}
        </div>
    );
}
