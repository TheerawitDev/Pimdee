export interface KeyData {
    code: string;
    en: string;
    enShift: string;
    th: string;
    thShift: string;
    finger: number; // 0=None, 1=L-Pinky, 2=L-Ring... 4=L-Index, 5=L-Thumb, 6=R-Thumb, 7=R-Index... 10=R-Pinky
    width?: number; // base unit is 1
    type?: 'normal' | 'modifier' | 'space';
}

export const KEYBOARD_LAYOUT: KeyData[][] = [
    // Row 1
    [
        { code: 'Backquote', en: '`', enShift: '~', th: '_', thShift: '%', finger: 1 },
        { code: 'Digit1', en: '1', enShift: '!', th: 'ๅ', thShift: '+', finger: 1 },
        { code: 'Digit2', en: '2', enShift: '@', th: '/', thShift: '๑', finger: 2 },
        { code: 'Digit3', en: '3', enShift: '#', th: '-', thShift: '๒', finger: 3 },
        { code: 'Digit4', en: '4', enShift: '$', th: 'ภ', thShift: '๓', finger: 4 },
        { code: 'Digit5', en: '5', enShift: '%', th: 'ถ', thShift: '๔', finger: 4 },
        { code: 'Digit6', en: '6', enShift: '^', th: 'ุ', thShift: 'ู', finger: 7 },
        { code: 'Digit7', en: '7', enShift: '&', th: 'ึ', thShift: '฿', finger: 7 },
        { code: 'Digit8', en: '8', enShift: '*', th: 'ค', thShift: '๕', finger: 8 },
        { code: 'Digit9', en: '9', enShift: '(', th: 'ต', thShift: '๖', finger: 9 },
        { code: 'Digit0', en: '0', enShift: ')', th: 'จ', thShift: '๗', finger: 10 },
        { code: 'Minus', en: '-', enShift: '_', th: 'ข', thShift: '๘', finger: 10 },
        { code: 'Equal', en: '=', enShift: '+', th: 'ช', thShift: '๙', finger: 10 },
        { code: 'Backspace', en: 'Backspace', enShift: 'Backspace', th: 'Back', thShift: 'Back', finger: 10, width: 2, type: 'modifier' },
    ],
    // Row 2
    [
        { code: 'Tab', en: 'Tab', enShift: 'Tab', th: 'Tab', thShift: 'Tab', finger: 1, width: 1.5, type: 'modifier' },
        { code: 'KeyQ', en: 'q', enShift: 'Q', th: 'ๆ', thShift: '๐', finger: 1 },
        { code: 'KeyW', en: 'w', enShift: 'W', th: 'ไ', thShift: '"', finger: 2 },
        { code: 'KeyE', en: 'e', enShift: 'E', th: 'ำ', thShift: 'ฎ', finger: 3 },
        { code: 'KeyR', en: 'r', enShift: 'R', th: 'พ', thShift: 'ฑ', finger: 4 },
        { code: 'KeyT', en: 't', enShift: 'T', th: 'ะ', thShift: 'ธ', finger: 4 },
        { code: 'KeyY', en: 'y', enShift: 'Y', th: 'ั', thShift: 'ํ', finger: 7 },
        { code: 'KeyU', en: 'u', enShift: 'U', th: 'ี', thShift: '๊', finger: 7 },
        { code: 'KeyI', en: 'i', enShift: 'I', th: 'ร', thShift: 'ณ', finger: 8 },
        { code: 'KeyO', en: 'o', enShift: 'O', th: 'น', thShift: 'ฯ', finger: 9 },
        { code: 'KeyP', en: 'p', enShift: 'P', th: 'ย', thShift: 'ญ', finger: 10 },
        { code: 'BracketLeft', en: '[', enShift: '{', th: 'บ', thShift: 'ฐ', finger: 10 },
        { code: 'BracketRight', en: ']', enShift: '}', th: 'ล', thShift: ',', finger: 10 },
        { code: 'Backslash', en: '\\', enShift: '|', th: 'ฃ', thShift: 'ฅ', finger: 10, width: 1.5 },
    ],
    // Row 3
    [
        { code: 'CapsLock', en: 'Caps', enShift: 'Caps', th: 'Caps', thShift: 'Caps', finger: 1, width: 1.75, type: 'modifier' },
        { code: 'KeyA', en: 'a', enShift: 'A', th: 'ฟ', thShift: 'ฤ', finger: 1 },
        { code: 'KeyS', en: 's', enShift: 'S', th: 'ห', thShift: 'ฆ', finger: 2 },
        { code: 'KeyD', en: 'd', enShift: 'D', th: 'ก', thShift: 'ฏ', finger: 3 },
        { code: 'KeyF', en: 'f', enShift: 'F', th: 'ด', thShift: 'โ', finger: 4 },
        { code: 'KeyG', en: 'g', enShift: 'G', th: 'เ', thShift: 'ฌ', finger: 4 },
        { code: 'KeyH', en: 'h', enShift: 'H', th: '้', thShift: '็', finger: 7 },
        { code: 'KeyJ', en: 'j', enShift: 'J', th: '่', thShift: '๋', finger: 7 },
        { code: 'KeyK', en: 'k', enShift: 'K', th: 'า', thShift: 'ษ', finger: 8 },
        { code: 'KeyL', en: 'l', enShift: 'L', th: 'ส', thShift: 'ศ', finger: 9 },
        { code: 'Semicolon', en: ';', enShift: ':', th: 'ว', thShift: 'ซ', finger: 10 },
        { code: 'Quote', en: "'", enShift: '"', th: 'ง', thShift: '.', finger: 10 },
        { code: 'Enter', en: 'Enter', enShift: 'Enter', th: 'Enter', thShift: 'Enter', finger: 10, width: 2.25, type: 'modifier' },
    ],
    // Row 4
    [
        { code: 'ShiftLeft', en: 'Shift', enShift: 'Shift', th: 'Shift', thShift: 'Shift', finger: 1, width: 2.25, type: 'modifier' },
        { code: 'KeyZ', en: 'z', enShift: 'Z', th: 'ผ', thShift: '(', finger: 1 },
        { code: 'KeyX', en: 'x', enShift: 'X', th: 'ป', thShift: ')', finger: 2 },
        { code: 'KeyC', en: 'c', enShift: 'C', th: 'แ', thShift: 'ฉ', finger: 3 },
        { code: 'KeyV', en: 'v', enShift: 'V', th: 'อ', thShift: 'ฮ', finger: 4 },
        { code: 'KeyB', en: 'b', enShift: 'B', th: 'ิ', thShift: 'ฺ', finger: 4 },
        { code: 'KeyN', en: 'n', enShift: 'N', th: 'ื', thShift: '์', finger: 7 },
        { code: 'KeyM', en: 'm', enShift: 'M', th: 'ท', thShift: '?', finger: 7 },
        { code: 'Comma', en: ',', enShift: '<', th: 'ม', thShift: 'ฒ', finger: 8 },
        { code: 'Period', en: '.', enShift: '>', th: 'ใ', thShift: 'ฬ', finger: 9 },
        { code: 'Slash', en: '/', enShift: '?', th: 'ฝ', thShift: 'ฦ', finger: 10 },
        { code: 'ShiftRight', en: 'Shift', enShift: 'Shift', th: 'Shift', thShift: 'Shift', finger: 10, width: 2.75, type: 'modifier' },
    ],
    // Row 5
    [
        { code: 'ControlLeft', en: 'Ctrl', enShift: 'Ctrl', th: 'Ctrl', thShift: 'Ctrl', finger: 1, width: 1.25, type: 'modifier' },
        { code: 'MetaLeft', en: 'Win', enShift: 'Win', th: 'Win', thShift: 'Win', finger: 0, width: 1.25, type: 'modifier' },
        { code: 'AltLeft', en: 'Alt', enShift: 'Alt', th: 'Alt', thShift: 'Alt', finger: 5, width: 1.25, type: 'modifier' },
        { code: 'Space', en: ' ', enShift: ' ', th: ' ', thShift: ' ', finger: 6, width: 6.25, type: 'space' },
        { code: 'AltRight', en: 'Alt', enShift: 'Alt', th: 'Alt', thShift: 'Alt', finger: 6, width: 1.25, type: 'modifier' },
        { code: 'MetaRight', en: 'Fn', enShift: 'Fn', th: 'Fn', thShift: 'Fn', finger: 0, width: 1.25, type: 'modifier' },
        { code: 'ControlRight', en: 'Ctrl', enShift: 'Ctrl', th: 'Ctrl', thShift: 'Ctrl', finger: 10, width: 1.25, type: 'modifier' },
    ]
];
