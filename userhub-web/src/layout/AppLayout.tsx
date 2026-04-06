import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import styles from "../assets/styles/App.module.css";

export function AppLayout() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
