import styles from "./page.module.css";
import TypingTest from "@/components/TypingTest";

export default function Home() {
  return (
    <>
      <header className="container" style={{ height: "var(--header-height)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Placeholder for Logo */}
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--text-color)" }}>pimdee</div>
        </div>
        <nav style={{ color: "var(--sub-color)" }}>
          {/* Placeholder for Nav Items */}
        </nav>
      </header>

      <main className="container" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <TypingTest />
      </main>

      <footer className="container" style={{ height: "var(--footer-height)", display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--sub-color)", fontSize: "0.75rem" }}>
        <div>
          key bindings: tab (restart)
        </div>
        <div>
          v0.1.0
        </div>
      </footer>
    </>
  );
}
