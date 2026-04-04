import styles from "../src/assets/styles/App.module.css";

import "./global.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>Sidebar</aside>
      <main className={styles.main}>Main</main>
    </div>
  );
}
