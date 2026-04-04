import { LayoutDashboard } from "lucide-react";
import styles from "../assets/styles/Sidebar.module.css";
export function SidebarNav() {
  return (
    <nav className={styles.sidebarNav}>
      <a href="">
        <LayoutDashboard className={styles.sidebarNavIcon} />
        <span>Dashboard</span>
      </a>
    </nav>
  );
}
