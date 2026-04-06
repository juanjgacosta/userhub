import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { Outlet } from "react-router-dom";

import styles from "../assets/styles/App.module.css";

export function AppLayout() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.main}>
        <Topbar />
        <div className={styles.mainPage}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
