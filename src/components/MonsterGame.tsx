"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { getRandomWords, Language, Difficulty } from "@/lib/dictionaries";
import styles from "./MonsterGame.module.css";

interface Enemy {
    id: number;
    word: string;
    x: number; // Percentage 0-100
    y: number; // Pixels
    speed: number;
    matchedIndex: number; // How many letters matched
    type: 'slime' | 'bat' | 'ghost';
    shake: boolean;
    maxHealth: number;
    currentHealth: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    text: string;
}

export default function MonsterGame({ onExit, language, difficulty }: { onExit: () => void, language: Language, difficulty: Difficulty }) {
    const [enemies, setEnemies] = useState<Enemy[]>([]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [isAttacking, setIsAttacking] = useState(false);
    const [combo, setCombo] = useState(0);
    const [particles, setParticles] = useState<Particle[]>([]);

    const requestRef = useRef<number | null>(null);
    const lastSpawnTime = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const spawnRate = useRef(2000); // ms
    const nextEnemyId = useRef(0);
    const activeEnemyId = useRef<number | null>(null);
    const nextParticleId = useRef(0);

    // --- Game Logic Helpers ---

    const getDifficultyStats = () => {
        switch (difficulty) {
            case 'starter': return { speed: 0.3, spawn: 2500, scoreMult: 0.5 };
            case 'elementary': return { speed: 0.5, spawn: 2000, scoreMult: 0.8 };
            case 'intermediate': return { speed: 0.8, spawn: 1800, scoreMult: 1 };
            case 'advanced': return { speed: 1.2, spawn: 1500, scoreMult: 1.5 };
            case 'master': return { speed: 2.0, spawn: 1000, scoreMult: 2.5 };
            default: return { speed: 0.5, spawn: 2000, scoreMult: 1 };
        }
    };

    const spawnEnemy = useCallback((time: number) => {
        const word = getRandomWords(language, difficulty, 1)[0];
        const types: Enemy['type'][] = ['slime', 'bat', 'ghost'];
        const type = types[Math.floor(Math.random() * types.length)];

        // Speed var based on type + difficulty
        const { speed: diffSpeed, spawn: diffSpawn } = getDifficultyStats();

        let baseSpeed = diffSpeed;
        if (type === 'bat') baseSpeed *= 1.2;
        if (type === 'ghost') baseSpeed *= 0.8;

        const newEnemy: Enemy = {
            id: nextEnemyId.current++,
            word: word,
            x: Math.random() * 80 + 10,
            y: -50,
            speed: baseSpeed + (Math.random() * 0.2) + (score * 0.002),
            matchedIndex: 0,
            type,
            shake: false,
            maxHealth: word.length,
            currentHealth: word.length
        };
        setEnemies(prev => [...prev, newEnemy]);
        lastSpawnTime.current = time;
        // Cap spawn rate 
        spawnRate.current = Math.max(500, diffSpawn - (score * 10));
    }, [score, difficulty, language]);

    const createParticle = (x: number, y: number, text: string) => {
        const id = nextParticleId.current++;
        setParticles(prev => [...prev, { id, x, y, text }]);
        setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== id));
        }, 500); // Match CSS animation
    };

    // --- Game Loop ---
    const animate = useCallback(function tick(time: number) {
        if (gameOver) return;

        setEnemies(prevEnemies => {
            const newEnemies = prevEnemies.map(e => ({
                ...e,
                y: e.y + e.speed,
                shake: false // Reset shake frame
            })).filter(e => {
                const hitLimit = 480; // Ground level approx
                if (e.y > hitLimit) {
                    setLives(l => l - 1);
                    setCombo(0); // Reset combo on hit
                    if (activeEnemyId.current === e.id) {
                        activeEnemyId.current = null;
                    }
                    return false;
                }
                return true;
            });
            return newEnemies;
        });

        if (time - lastSpawnTime.current > spawnRate.current) {
            spawnEnemy(time);
        }

        requestRef.current = requestAnimationFrame(tick);
    }, [gameOver, score, spawnEnemy]);

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

    // --- Input Handling ---
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (gameOver) return;
            const char = e.key;
            if (char.length !== 1) return;

            setEnemies(prev => {
                let targetId = activeEnemyId.current;
                const newEnemies = [...prev];

                // Find target if none active
                if (targetId === null) {
                    const candidates = newEnemies
                        .filter(e => e.word.startsWith(char))
                        .sort((a, b) => b.y - a.y); // Closest to bottom first

                    if (candidates.length > 0) {
                        targetId = candidates[0].id;
                        activeEnemyId.current = targetId;
                    } else {
                        // Missed (no enemy starts with char)
                        setCombo(0);
                        return prev;
                    }
                }

                // Process Attack
                if (targetId !== null) {
                    const idx = newEnemies.findIndex(e => e.id === targetId);
                    if (idx !== -1) {
                        const enemy = newEnemies[idx];
                        if (enemy.word[enemy.matchedIndex] === char) {
                            // HIT!
                            enemy.matchedIndex++;
                            enemy.shake = true; // Visual feedback

                            // Sword Animation
                            setIsAttacking(true);
                            setTimeout(() => setIsAttacking(false), 150);

                            if (enemy.matchedIndex === enemy.word.length) {
                                // KILLED
                                createParticle(enemy.x, enemy.y, `+${10 + combo}`);
                                newEnemies.splice(idx, 1);
                                setScore(s => s + 10 + combo);
                                setCombo(c => c + 1);
                                activeEnemyId.current = null;
                            }
                        } else {
                            // Missed active target
                            // Maybe add penalty? For now just reset combo
                            // setCombo(0); 
                            // Actually, strict typing usually doesn't fail unless you mistype current letter
                        }
                    }
                }

                return newEnemies;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameOver, combo]); // Added combo deps to update score calc correctly

    const handleRestart = () => {
        setEnemies([]);
        setScore(0);
        setLives(3);
        setCombo(0);
        setGameOver(false);
        activeEnemyId.current = null;
        lastSpawnTime.current = performance.now();
        requestRef.current = requestAnimationFrame(animate);
    };

    return (
        <div className={styles.gameContainer} ref={containerRef}>
            {/* Background elements could go here */}

            <div className={styles.hud}>
                <div className={styles.hudGroup}>
                    <span>Score: {score}</span>
                    <span>Combo: {combo}</span>
                </div>
                <div className={styles.hudGroup}>
                    <span>Lives: {"❤️".repeat(Math.max(0, lives))}</span>
                    <span onClick={onExit} style={{ cursor: 'pointer', marginLeft: '1rem' }}>❌</span>
                </div>
            </div>

            {/* Enemies */}
            {enemies.map(enemy => (
                <div
                    key={enemy.id}
                    className={`${styles.enemy} ${enemy.id === activeEnemyId.current ? styles.target : ''}`}
                    style={{
                        left: `${enemy.x}%`,
                        top: `${enemy.y}px`,
                        transform: `translateX(-50%) ${enemy.shake ? 'translateX(5px)' : ''}`
                    }}
                    data-type={enemy.type}
                >
                    <div className={styles.enemySprite}></div>
                    <div className={styles.wordBadge}>
                        <span className={styles.matched}>{enemy.word.substring(0, enemy.matchedIndex)}</span>
                        <span className={styles.unmatched}>{enemy.word.substring(enemy.matchedIndex)}</span>
                    </div>
                </div>
            ))}

            {/* Particles */}
            {particles.map(p => (
                <div
                    key={p.id}
                    className={styles.damageText}
                    style={{ left: `${p.x}%`, top: `${p.y}px` }}
                >
                    {p.text}
                </div>
            ))}

            {/* Player Character */}
            <div className={`${styles.playerContainer} ${isAttacking ? styles.attacking : ''}`}>
                <div className={styles.playerBody}></div>
                <div className={styles.playerHead}></div>
                <div className={styles.swordWrapper}>
                    <div className={styles.swordHandle}></div>
                    <div className={styles.sword}></div>
                </div>
            </div>

            {gameOver && (
                <div className={styles.gameOver}>
                    <div className={styles.title}>GAME OVER</div>
                    <div className={styles.score}>Score: {score}</div>
                    <button className={styles.restartBtn} onClick={handleRestart}>Try Again</button>
                    <button className={styles.exitBtn} onClick={onExit}>Exit to Menu</button>
                </div>
            )}
        </div>
    );
}
