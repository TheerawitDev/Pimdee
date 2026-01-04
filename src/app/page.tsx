
import TypingTest from "@/components/TypingTest";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`container ${styles.container}`}>
      <header className={`container ${styles.header}`}>
        <div className={styles.headerGroup}>
          {/* Placeholder for Logo */}
          <div className={styles.logo}>pimdee</div>
        </div>
        <nav className={styles.nav}>
          {/* Placeholder for Nav Items */}
        </nav>
      </header>

      <main className={`container ${styles.main}`}>
        <TypingTest />
      </main>

      <footer className={`container ${styles.footer}`}>
        <div>
          key bindings: tab (restart)
        </div>
        <div>
          v0.1.0
        </div>
      </footer>
    </div>
  );
}
