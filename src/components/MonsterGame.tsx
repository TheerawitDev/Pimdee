"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { getRandomWords } from "@/lib/dictionaries";
import styles from "./MonsterGame.module.css";

interface Enemy {
    id: number;
    word: string;
    x: number; // Percentage 0-100
    y: number; // Pixels
    speed: number;
    matchedIndex: number; // How many letters matched
}

export default function MonsterGame({ onExit }: { onExit: () => void }) {
    const [enemies, setEnemies] = useState<Enemy[]>([]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const requestRef = useRef<number | null>(null);
    const lastSpawnTime = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const spawnRate = useRef(2000); // ms
    const nextEnemyId = useRef(0);
    const activeEnemyId = useRef<number | null>(null); // The enemy currently being typed

    // Game Loop
    const animate = useCallback(function tick(time: number) {
        if (gameOver) return;

        setEnemies(prevEnemies => {
            const newEnemies = prevEnemies.map(e => ({
                ...e,
                y: e.y + e.speed
            })).filter(e => {
                if (e.y > 450) { // Hit player area
                    setLives(l => l - 1);
                    activeEnemyId.current = null; // Clear if active enemy hits
                    return false;
                }
                return true;
            });
            return newEnemies;
        });

        // Spawn logic
        if (time - lastSpawnTime.current > spawnRate.current) {
            const word = getRandomWords('english', 'elementary', 1)[0];
            const newEnemy: Enemy = {
                id: nextEnemyId.current++,
                word: word,
                x: Math.random() * 80 + 10, // 10% to 90%
                y: -50,
                speed: 0.5 + (Math.random() * 0.5) + (score * 0.01), // Speed increases with score
                matchedIndex: 0
            };
            setEnemies(prev => [...prev, newEnemy]);
            lastSpawnTime.current = time;
            // Decrease spawn rate
            spawnRate.current = Math.max(800, 2000 - (score * 20));
        }

        requestRef.current = requestAnimationFrame(tick);
    }, [gameOver, score]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [animate]);

    useEffect(() => {
        if (lives <= 0) {
            setGameOver(true);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        }
    }, [lives]);

    // Input Handling
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (gameOver) return;
            const char = e.key;
            if (char.length !== 1) return;

            setEnemies(prev => {
                let targetId = activeEnemyId.current;
                const newEnemies = [...prev];

                // If no active target, find one
                if (targetId === null) {
                    // Find closest enemy starting with this char
                    // Sort by Y (highest first = closest to bottom)
                    const candidates = newEnemies
                        .filter(e => e.word.startsWith(char))
                        .sort((a, b) => b.y - a.y);

                    if (candidates.length > 0) {
                        targetId = candidates[0].id;
                        activeEnemyId.current = targetId;
                    } else {
                        return prev; // No match
                    }
                }

                // Process target
                if (targetId !== null) {
                    const idx = newEnemies.findIndex(e => e.id === targetId);
                    if (idx !== -1) {
                        const enemy = newEnemies[idx];
                        if (enemy.word[enemy.matchedIndex] === char) {
                            enemy.matchedIndex++;
                            if (enemy.matchedIndex === enemy.word.length) {
                                // Killed
                                newEnemies.splice(idx, 1);
                                setScore(s => s + 1);
                                activeEnemyId.current = null;
                            }
                        } else {
                            // Wrong key on active enemy? 
                            // Could implement penalty, or just ignore. 
                            // Strict mode: wrong key resets? No, that's too hard.
                        }
                    }
                }

                return newEnemies;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameOver]);

    const handleRestart = () => {
        setEnemies([]);
        setScore(0);
        setLives(3);
        setGameOver(false);
        activeEnemyId.current = null;
        lastSpawnTime.current = performance.now();
        requestRef.current = requestAnimationFrame(animate);
    };

    return (
        <div className={styles.gameContainer} ref={containerRef}>
            <div className={styles.hud}>
                <span>Score: {score}</span>
                <span onClick={onExit} style={{ cursor: 'pointer' }}>EXIT</span>
                <span>Lives: {"❤️".repeat(Math.max(0, lives))}</span>
            </div>

            {enemies.map(enemy => (
                <div
                    key={enemy.id}
                    className={`${styles.enemy} ${enemy.id === activeEnemyId.current ? styles.target : ''}`}
                    style={{ left: `${enemy.x}%`, top: `${enemy.y}px` }}
                >
                    <span className={styles.matched}>{enemy.word.substring(0, enemy.matchedIndex)}</span>
                    <span className={styles.unmatched}>{enemy.word.substring(enemy.matchedIndex)}</span>
                </div>
            ))}

            <div className={styles.player}>Testing</div>

            {gameOver && (
                <div className={styles.gameOver}>
                    <div className={styles.title}>GAME OVER</div>
                    <div className={styles.score}>Final Score: {score}</div>
                    <button className={styles.restartBtn} onClick={handleRestart}>Try Again</button>
                    <button className={styles.restartBtn} style={{ marginTop: '1rem', background: '#ccc' }} onClick={onExit}>Exit</button>
                </div>
            )}
        </div>
    );
}
