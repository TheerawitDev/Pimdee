"use client";

import { useEffect, useRef, useState } from "react";
import { useTypingEngine } from "@/hooks/useTypingEngine";
import { isThaiCombiningChar } from "@/lib/thaiUtils";
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
    const inputRef = useRef<HTMLInputElement>(null);

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
            // Ignore if event comes from an input element (avoids double handling with hidden input onChange)
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

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

            // Caret must be on the right of latest correct/incorrect letter element
            const lettersEle = currentWordEl.children;
            let caretPos = 0 // 0 (left) by default

            for (let i = lettersEle.length - 1; i >= 0; i--) {
                const el = lettersEle[i]
                if (el.tagName === "SPAN" && 
                    el.className.includes("correct") ||
                    el.className.includes("incorrect")
                ) {
                    caretPos = i
                    break
                }
            }
            
            let targetLeft = 0;
            let targetTop = 0;
            let height = 0;

            if (cursorIndex.letterIndex > 0) { // Middle or end
                const targetLetter = lettersEle[caretPos] as HTMLElement
                targetLeft = currentWordEl.offsetLeft + targetLetter.offsetLeft + targetLetter.offsetWidth
                targetTop = currentWordEl.offsetTop + targetLetter.offsetTop
                height = targetLetter.offsetHeight
            } else { // Start
                targetLeft = currentWordEl.offsetLeft
                targetTop = currentWordEl.offsetTop
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

    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();

        // Check if it's an iOS device (iPhone, iPad, iPod)
        // Note: New iPads might report MacIntel but have touch points, so we check that too or rely on standard regex for now.
        const isIOS = /iphone|ipad|ipod/.test(ua);

        // Keep Desktop Safari check (excludes Chrome/Edge/Android)
        const isDesktopSafari = ua.includes('safari') &&
            !ua.includes('chrome') &&
            !ua.includes('android') &&
            !ua.includes('edg');

        // Apply fix for ANY iOS browser (since they all use WebKit) OR Desktop Safari
        setIsSafari(isIOS || isDesktopSafari);
    }, []);

    if (isGameMode) {
        return <MonsterGame onExit={() => setIsGameMode(false)} language={language} difficulty={difficulty} />;
    }

    return (
        <div className={`${styles.wrapper} ${isSafari ? styles.safari : ''}`}>
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
                onClick={() => inputRef.current?.focus()}
                className={`${styles.wordsContainer} ${gameState === 'finish' ? styles.hidden : ''} ${mode === 'document' ? styles.documentMode : ''}`}
            >
                {words.map((word, wIdx) => {
                    const hasError = word.letters.some(l => l.status === 'incorrect');

                    // Group letters for optimal rendering (fixes Thai dotted circles)
                    const chunks: { text: string; status: string; isCombiningOnly: boolean; key: number }[] = [];
                    let currentChunk: { text: string; status: string; isCombiningOnly: boolean; key: number } | null = null;

                    word.letters.forEach((letter, lIdx) => {
                        const isComb = isThaiCombiningChar(letter.char);

                        // Try to append to previous chunk if:
                        // 1. Current is combining
                        // 2. Previous chunk exists
                        // 3. Statuses match
                        if (currentChunk && isComb && currentChunk.status === letter.status) {
                            currentChunk.text += letter.char;
                            currentChunk.isCombiningOnly = false; // It's now a cluster
                        } else {
                            // Push previous
                            if (currentChunk) chunks.push(currentChunk);
                            // Start new
                            currentChunk = {
                                text: letter.char,
                                status: letter.status,
                                isCombiningOnly: isComb,
                                key: lIdx
                            };
                        }
                    });
                    if (currentChunk) chunks.push(currentChunk);

                    return (
                        <div key={wIdx} id={`word-${wIdx}`} className={`${styles.word} ${hasError ? styles.wordError : ''}`}>
                            {chunks.map((chunk) => {
                                let className = styles.letter;
                                if (chunk.status === 'correct') className += ` ${styles.correct}`;
                                if (chunk.status === 'incorrect') className += ` ${styles.incorrect}`;
                                // Only apply .combining (negative margin hack) if it's an ISOLATED combining char
                                if (chunk.isCombiningOnly) className += ` ${styles.combining}`;

                                return (
                                    <span key={chunk.key} className={className}>
                                        {chunk.text}
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

            {/* Hidden Input for Mobile Typing */}
            <input
                ref={inputRef}
                type="text"
                className={styles.hiddenInput}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                value=""
                onChange={(e) => {
                    // Mobile typing often inserts string or last char. 
                    // We just want to capture the input event.
                    // But since we control the value as empty, we look at nativeEvent data if possible?
                    // Actually, simpler to just get the last char of e.target.value if length > 0
                    // But we reset to "" immediately.
                    const val = e.target.value;
                    if (val) {
                        const char = val.slice(-1);
                        // Just send the char. 
                        // Note: backspace might not trigger onChange if value is empty!
                        // We need onKeyDown for backspace.
                        handleInput(char);
                    }
                }}
                onKeyDown={(e) => {
                    // Capture Backspace specifically for mobile if keyboard supports it
                    // On Android/iOS, Backspace usually triggers a KeyDown event even on empty input
                    e.stopPropagation(); // Stop bubbling to window
                    if (e.key === 'Backspace') {
                        handleInput('Backspace');
                    }
                }}
            />
        </div>
    );
}

