import styles from "../assets/styles/Sidebar.module.css";

// import userHubLogo from "../assets/images/logo-userhub.svg";
import { NavigationSidebar } from "./NavigationSidebar";

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        {/* <img src={userHubLogo} alt="UserHub Logo" /> */}
        <h2 className={styles.title}>UserHub</h2>
      </header>

      <NavigationSidebar />
    </aside>
  );
}
