
export const isThaiCombiningChar = (char: string): boolean => {
    const code = char.charCodeAt(0);
    // Thai Combining Characters: 0E30-0E3A (Vowels), 0E47-0E4E (Tone marks & signs)
    return (code >= 0x0E31 && code <= 0x0E3A) || (code >= 0x0E47 && code <= 0x0E4E);
};
