import { LayoutDashboard, Settings, Users } from "lucide-react";
import styles from "../assets/styles/Sidebar.module.css";
export function NavigationSidebar() {
  return (
    <nav className={styles.navigationSidebar}>
      <a href="">
        <LayoutDashboard className={styles.navigationSidebarIcon} />
        <span>Dashboard</span>
      </a>

      <a href="">
        <Users className={styles.navigationSidebarIcon} />
        <span>Users</span>
      </a>

      <a href="">
        <Settings className={styles.navigationSidebarIcon} />
        <span>Settings</span>
      </a>
    </nav>
  );
}
