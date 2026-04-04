import styles from "../src/assets/styles/App.module.css";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.main}>Main</main>
    </div>
  );
}
