import { useMatches } from "react-router-dom";

import styles from "../assets/styles/Topbar.module.css";

interface RouterHandle {
  title?: string;
}

export function Topbar() {
  const matches = useMatches();

  const currentRoute = matches[matches.length - 1];
  const title = (currentRoute?.handle as RouterHandle)?.title || "UserHub";

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.actions}>
        <div className={styles.user}>
          <img
            src="https://github.com/juanjgacosta.png"
            alt="Gómez's profile picture"
          />
          <div className={styles.userInfo}>
            <span className={styles.userName}>Juan Gómez</span>
            <span className={styles.userRole}>Admin</span>
          </div>
        </div>

        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
}