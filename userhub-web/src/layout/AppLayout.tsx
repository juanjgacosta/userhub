import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { Outlet } from "react-router-dom";

import styles from "../assets/styles/AppLayout.module.css";

export function AppLayout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Topbar />
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
