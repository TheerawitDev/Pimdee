import styles from "../TypingTest.module.css";

interface ResultOverlayProps {
    wpm: number;
    accuracy: number;
    resetGame: () => void;
}

export default function ResultOverlay({ wpm, accuracy, resetGame }: ResultOverlayProps) {
    return (
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
    );
}
