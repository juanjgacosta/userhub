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
    <div className={styles.topbarMain}>
      <aside className={styles.topbarTitle}>{title}</aside>
      <div className={styles.topbarInfo}>
        <img
          src="https://github.com/juanjgacosta.png"
          alt="Gómez's profile picture"
        />
        <span>Juan Gómez Admin</span>
        <button>Logout</button>
      </div>
    </div>
  );
}
