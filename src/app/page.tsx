
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
        <div style={{ flex: 1 }}>
          key bindings: tab (restart)
        </div>
        <div style={{ textAlign: "center", opacity: 0.5, flex: 2 }}>
          <p>Credit: Theerawit Waithayawan</p>
          <p>Contact: pm.theerawit@gmail.com</p>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          v0.1.0
        </div>
      </footer>
    </div>
  );
}
