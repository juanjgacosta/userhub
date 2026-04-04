import { LayoutDashboard, Settings, Users } from "lucide-react";
import styles from "../assets/styles/Sidebar.module.css";
export function SidebarNav() {
  return (
    <nav className={styles.sidebarNav}>
      <a href="">
        <LayoutDashboard className={styles.sidebarNavIcon} />
        <span>Dashboard</span>
      </a>

      <a href="">
        <Users className={styles.sidebarNavIcon} />
        <span>Users</span>
      </a>

      <a href="">
        <Settings className={styles.sidebarNavIcon} />
        <span>Settings</span>
      </a>
    </nav>
  );
}
