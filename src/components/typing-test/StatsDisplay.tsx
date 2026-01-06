import styles from "../TypingTest.module.css";
import { TypingState } from "@/hooks/useTypingEngine";

interface StatsDisplayProps {
    mode: 'standard' | 'time' | 'document';
    gameState: TypingState;
    timeLeft: number;
    wpm: number;
    stopGame: () => void;
    isGameMode: boolean;
    setIsGameMode: (val: boolean) => void;
}

export default function StatsDisplay({
    mode,
    gameState,
    timeLeft,
    wpm,
    stopGame,
    isGameMode,
    setIsGameMode
}: StatsDisplayProps) {
    return (
        <div className={styles.stats}>
            {mode === 'time' && gameState !== 'finish' && <span className={styles.timer}>{timeLeft}</span>}
            {mode === 'time' && gameState === 'finish' && (
                <span>{wpm} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>wpm</span></span>
            )}
            {gameState === 'start' && (
                <button
                    className={styles.stopBtn}
                    onClick={stopGame}
                >
                    STOP
                </button>
            )}
            <button
                className={styles.gameModeBtn}
                onClick={() => setIsGameMode(true)}
            >
                GAME MODE
            </button>
        </div>
    );
}
