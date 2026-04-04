import { LayoutDashboard, Settings, Users } from "lucide-react";
import styles from "../assets/styles/Sidebar.module.css";
import { NavigationSidebarItem } from "./NavigationSidebarItem";
export function NavigationSidebar() {
  return (
    <nav className={styles.navigationSidebar}>
      <NavigationSidebarItem title="Dashboard" icon={LayoutDashboard} />
      <NavigationSidebarItem title="Users" icon={Users} />
      <NavigationSidebarItem title="Settings" icon={Settings} />
    </nav>
  );
}
