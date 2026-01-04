import { Difficulty, Language } from "@/lib/dictionaries";
import styles from "../TypingTest.module.css";

interface ConfigBarProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    mode: 'standard' | 'time' | 'document';
    setMode: (mode: 'standard' | 'time' | 'document') => void;
    timeLimit: 30 | 60 | 120;
    setTimeLimit: (time: 30 | 60 | 120) => void;
    difficulty: Difficulty;
    setDifficulty: (diff: Difficulty) => void;
    showKeyboard: boolean;
    setShowKeyboard: (show: boolean) => void;
    showHints: boolean;
    setShowHints: (show: boolean) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export default function ConfigBar({
    language,
    setLanguage,
    mode,
    setMode,
    timeLimit,
    setTimeLimit,
    difficulty,
    setDifficulty,
    showKeyboard,
    setShowKeyboard,
    showHints,
    setShowHints,
    theme,
    toggleTheme
}: ConfigBarProps) {
    return (
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
                aria-label="Toggle Virtual Keyboard"
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

            {/* Hint Toggle (Lightbulb) - Only visible when keyboard is active */}
            {showKeyboard && (
                <button
                    className={`${styles.themeToggle} ${showHints ? styles.active : ''}`}
                    onClick={() => setShowHints(!showHints)}
                    title="Toggle Key Hints"
                    aria-label="Toggle Key Hints"
                    style={{ marginRight: '0.5rem' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18h6"></path>
                        <path d="M10 22h4"></path>
                        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                    </svg>
                </button>
            )}

            {/* Theme Toggle */}
            <button className={styles.themeToggle} onClick={toggleTheme} title="Toggle Theme" aria-label="Toggle Theme">
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
    );
}
