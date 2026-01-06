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
    type: 'slime' | 'bat' | 'ghost' | 'spider' | 'skeleton' | 'wolf' | 'eye';
    shake: boolean;
    maxHealth: number;
    currentHealth: number;
    dying: boolean;
    deathTime: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    text: string;
}

export default function MonsterGame({ onExit, language, difficulty }: { onExit: () => void, language: Language, difficulty: Difficulty }) {
    const [enemies, setEnemies] = useState<Enemy[]>([]);
    const [dyingEnemies, setDyingEnemies] = useState<Enemy[]>([]);
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
            case 'starter': return { speed: 0.1, spawn: 3000, scoreMult: 0.5 };
            case 'elementary': return { speed: 0.12, spawn: 2800, scoreMult: 0.6 };
            case 'intermediate': return { speed: 0.15, spawn: 2600, scoreMult: 0.7 };
            case 'advanced': return { speed: 0.18, spawn: 2400, scoreMult: 0.8 };
            case 'master': return { speed: 0.2, spawn: 2200, scoreMult: 0.9 };
            default: return { speed: 0.15, spawn: 2500, scoreMult: 0.7 };
        }
    };

    const spawnEnemy = useCallback((time: number) => {
        const word = getRandomWords(language, difficulty, 1)[0];
        const types: Enemy['type'][] = ['slime', 'bat', 'ghost', 'spider', 'skeleton', 'wolf', 'eye'];
        const type = types[Math.floor(Math.random() * types.length)];

        // Speed var based on type + difficulty
        const { speed: diffSpeed, spawn: diffSpawn } = getDifficultyStats();

        let baseSpeed = diffSpeed;
        if (type === 'bat') baseSpeed *= 1.2;
        if (type === 'ghost') baseSpeed *= 0.8;
        if (type === 'wolf') baseSpeed *= 1.4;
        if (type === 'spider') baseSpeed *= 1.1;
        if (type === 'skeleton') baseSpeed *= 0.9;
        if (type === 'eye') baseSpeed *= 1.0;

        const newEnemy: Enemy = {
            id: nextEnemyId.current++,
            word: word,
            x: Math.random() * 80 + 10,
            y: -50,
            speed: baseSpeed + (Math.random() * 0.1) + (score * 0.0002),
            matchedIndex: 0,
            type,
            shake: false,
            maxHealth: word.length,
            currentHealth: word.length,
            dying: false,
            deathTime: 0
        };
        setEnemies(prev => [...prev, newEnemy]);
        lastSpawnTime.current = time;
        // Cap spawn rate 
        spawnRate.current = Math.max(800, diffSpawn - (score * 2));
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

        // 1. Update Living Enemies
        setEnemies(prevEnemies => {
            return prevEnemies.map(e => ({
                ...e,
                y: e.y + e.speed,
                shake: false // Reset shake
            })).filter(e => {
                // Check bounds
                const hitLimit = 480;
                if (e.y > hitLimit) {
                    setLives(l => l - 1);
                    setCombo(0);
                    if (activeEnemyId.current === e.id) {
                        activeEnemyId.current = null;
                    }
                    return false;
                }
                return true;
            });
        });

        // 2. Update Dying Enemies
        setDyingEnemies(prev => {
            const now = performance.now();
            return prev.filter(e => (now - e.deathTime) < 500);
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

    const enemiesRef = useRef<Enemy[]>([]);

    // Sync ref with state
    useEffect(() => {
        enemiesRef.current = enemies;
    }, [enemies]);

    // --- Input Handling ---
    // --- Input Handling ---
    const inputRef = useRef<HTMLInputElement>(null);

    const processInput = useCallback((char: string) => {
        if (gameOver) return;

        // Normalize input to lower case if your game requires it, 
        // but current logic seems to check exact match or maybe case insensitive?
        // The dictionary usually returns lowercase? Let's check. 
        // Existing logic used e.key.

        const currentEnemies = enemiesRef.current;
        let targetId = activeEnemyId.current;

        // 1. Find Target if needed
        if (targetId === null) {
            const candidates = currentEnemies
                .filter(e => e.word.startsWith(char))
                .sort((a, b) => b.y - a.y);

            if (candidates.length > 0) {
                targetId = candidates[0].id;
                activeEnemyId.current = targetId;
            } else {
                setCombo(0);
                return; // Missed
            }
        }

        // 2. Process Attack
        if (targetId !== null) {
            const idx = currentEnemies.findIndex(e => e.id === targetId);

            if (idx !== -1) {
                const enemy = currentEnemies[idx];

                if (enemy.word[enemy.matchedIndex] === char) {
                    // HIT
                    const nextIndex = enemy.matchedIndex + 1;
                    const isDead = nextIndex === enemy.word.length;

                    // Visuals
                    setIsAttacking(true);
                    setTimeout(() => setIsAttacking(false), 150);

                    if (isDead) {
                        // KILL LOGIC
                        createParticle(enemy.x, enemy.y, `+${10 + combo}`);
                        setScore(s => s + 10 + combo);
                        setCombo(c => c + 1);
                        activeEnemyId.current = null;

                        // 1. Add to dying
                        const dyingEnemy = {
                            ...enemy,
                            matchedIndex: nextIndex,
                            dying: true,
                            deathTime: performance.now()
                        };
                        setDyingEnemies(prev => [...prev, dyingEnemy]);

                        // 2. Remove from living (Use functional update to be safe against race with animate)
                        setEnemies(prev => prev.filter(e => e.id !== targetId));

                    } else {
                        // HIT LOGIC (Update matched index)
                        // Use functional update to ensure we modify the LATEST position from animate loop
                        setEnemies(prev => prev.map(e => {
                            if (e.id === targetId) {
                                return {
                                    ...e,
                                    matchedIndex: nextIndex,
                                    shake: true
                                };
                            }
                            return e;
                        }));
                    }
                } else {
                    // Wrong key for current target
                }
            } else {
                // Target gone (maybe hit bottom)
                activeEnemyId.current = null;
            }
        }
    }, [gameOver, combo]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if coming from input (to avoid double process)
            if (e.target instanceof HTMLInputElement) return;

            if (e.key.length === 1) {
                processInput(e.key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [processInput]);

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
        <div className={styles.gameContainer} ref={containerRef} onClick={() => inputRef.current?.focus()}>
            {/* Hidden Input for Mobile */}
            <input
                ref={inputRef}
                type="text"
                style={{
                    position: 'absolute',
                    top: '-9999px',
                    left: '-9999px',
                    opacity: 0,
                    height: 0,
                    width: 0,
                    pointerEvents: 'none'
                }}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                value=""
                onChange={(e) => {
                    const val = e.target.value;
                    if (val) {
                        const char = val.slice(-1);
                        processInput(char);
                    }
                }}
            />
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

            {/* Dying Enemies (Visual Only) */}
            {dyingEnemies.map(enemy => (
                <div
                    key={`dying-${enemy.id}`}
                    className={`${styles.enemy} ${styles.dying}`}
                    style={{
                        left: `${enemy.x}%`,
                        top: `${enemy.y}px`
                    }}
                    data-type={enemy.type}
                >
                    <div className={styles.enemySprite}></div>
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
                <div className={styles.playerCape}></div>
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
