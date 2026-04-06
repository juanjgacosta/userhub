import { Home, LayoutDashboard, Settings, Users } from "lucide-react";
import { NavigationSidebarItem } from "./NavigationSidebarItem";

import styles from "../assets/styles/NavigationSidebar.module.css";

export function NavigationSidebar() {
  return (
    <nav className={styles.navigationSidebar}>
      <NavigationSidebarItem title="Home" icon={Home} to="/" />
      <NavigationSidebarItem
        title="Dashboard"
        icon={LayoutDashboard}
        to="/dashboard"
      />
      <NavigationSidebarItem title="Users" icon={Users} to="/users" />
      <NavigationSidebarItem title="Settings" icon={Settings} to="/settings" />
    </nav>
  );
}
