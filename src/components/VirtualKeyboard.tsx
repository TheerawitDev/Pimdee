"use client";

import React, { useMemo } from 'react';
import styles from './VirtualKeyboard.module.css';
import { KEYBOARD_LAYOUT, KeyData } from '@/data/keyboardLayouts';

interface VirtualKeyboardProps {
    language: 'english' | 'thai';
    activeChar: string;
    showHands?: boolean;
}

export default function VirtualKeyboard({ language, activeChar, showHands = true }: VirtualKeyboardProps) {

    // Determine which key(s) to highlight
    const targetKeyInfo = useMemo(() => {
        if (!activeChar) return null;

        let foundKey: KeyData | null = null;
        let requiresShift = false;

        for (const row of KEYBOARD_LAYOUT) {
            for (const key of row) {
                // Check English
                if (language === 'english') {
                    if (key.en === activeChar) {
                        foundKey = key;
                        break;
                    }
                    if (key.enShift === activeChar) {
                        foundKey = key;
                        requiresShift = true;
                        break;
                    }
                }
                // Check Thai
                else {
                    if (key.th === activeChar) {
                        foundKey = key;
                        break;
                    }
                    if (key.thShift === activeChar) {
                        foundKey = key;
                        requiresShift = true;
                        break;
                    }
                }
            }
            if (foundKey) break;
        }

        return foundKey ? { key: foundKey, requiresShift } : null;
    }, [activeChar, language]);

    const isKeyActive = (key: KeyData) => {
        if (!targetKeyInfo) return false;

        // Direct match
        if (targetKeyInfo.key.code === key.code) return true;

        // Shift key highlighting
        if (targetKeyInfo.requiresShift && (key.code === 'ShiftLeft' || key.code === 'ShiftRight')) {
            // Logic to pick left or right shift based on hand?
            // Usually: 
            // - Left hand keys (finger <= 5) -> Right Shift
            // - Right hand keys (finger >= 6) -> Left Shift
            // For simplicity, highlight both or just one. Let's try smart highlighting.

            if (targetKeyInfo.key.finger <= 5 && key.code === 'ShiftRight') return true;
            if (targetKeyInfo.key.finger >= 6 && key.code === 'ShiftLeft') return true;

            // Fallback for non-finger mapped keys or edge cases, highlight both
            if (targetKeyInfo.key.finger === 0) return true;
        }

        return false;
    };

    return (
        <div className={styles.keyboardWrapper}>
            {KEYBOARD_LAYOUT.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((key) => {
                        const isActive = isKeyActive(key);
                        const flexGrow = key.width || 1;

                        return (
                            <div
                                key={key.code}
                                className={`${styles.key} ${isActive ? styles.active : ''} ${key.type === 'modifier' ? styles.modifier : ''} ${key.type === 'space' ? styles.space : ''}`}
                                style={{ flexGrow }}
                            >
                                <div className={styles.keyLabel}>
                                    {language === 'english' ? (
                                        <>
                                            <span className={styles.shiftChar}>{key.enShift}</span>
                                            <span className={styles.primaryChar}>{key.en}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className={styles.shiftChar}>{key.thShift}</span>
                                            <span className={styles.primaryChar}>{key.th}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}

            {/* Optional Hand visuals could go here */}
            {showHands && (
                <div className={styles.handsContainer}>
                    {/* SVG visuals can be added later */}
                </div>
            )}
        </div>
    );
}
