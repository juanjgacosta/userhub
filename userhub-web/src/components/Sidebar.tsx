import styles from "../assets/styles/Sidebar.module.css";

// import userHubLogo from "../assets/images/logo-userhub.svg";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <strong className={styles.sidebarTitle}>
        {/* <img src={userHubLogo} alt="UserHub Logo" /> */}
        <span>UserHub</span>
      </strong>

      <SidebarNav />
    </aside>
  );
}
