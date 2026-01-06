# Pimdee - Thai & English Typing Practice

**Pimdee** is a modern, minimalist typing practice application designed to help users improve their typing speed and accuracy in both Thai and English.

[![Pimdee Preview](https://pimdee.games/)

## Features

*   **Dual Language Support**: Seamlessly switch between **Thai** and **English** typing tests.
*   **Multiple Modes**:
    *   **Time Mode**: Race against the clock (30s, 60s, 120s).
    *   **Word Mode**: Practice a set number of words (Basic, Intermediate, Advanced).
    *   **Document Mode**: Type full paragraphs and articles for a realistic experience.
*   **Gamification**:
    *   **Monster Mode**: A fun typing game where you defeat monsters by typing words correctly before they reach you.
*   **Visual Aids**:
    *   **Virtual Keyboard**: Real-time visual guidance for key placement.
    *   **Smart Hints**: Highlights the next key to press.
*   **Detailed Statistics**: Track your **WPM** (Words Per Minute) and **Accuracy** in real-time.
*   **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
*   **Themes**: Toggle between Light and Dark modes.

## Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: CSS Modules (Vanilla CSS for maximum control and performance)
*   **Deployment**: Docker support included

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Recent Updates

*   **Cross-Browser Thai Support**: Fixed vowel stacking and "dotted circle" rendering issues specifically for Safari/iOS while maintaining perfect rendering on Windows/Chrome.
*   **Enhanced UI/UX**:
    *   Modern gradient buttons and pill-shaped UI elements.
    *   Improved timer visibility and aesthetics.
    *   Dynamic Favicon and Social Preview images generated automatically.
*   **Mobile Optimization**: Improved layout and font sizing for better usability on phones.

## License

[MIT](LICENSE)
