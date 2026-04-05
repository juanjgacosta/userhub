import { Home, LayoutDashboard, Settings, Users } from "lucide-react";
import { NavigationSidebarItem } from "./NavigationSidebarItem";

import styles from "../assets/styles/NavigationSidebar.module.css";

export function NavigationSidebar() {
  return (
    <nav className={styles.navigationSidebar}>
      <NavigationSidebarItem title="Home" icon={Home} />
      <NavigationSidebarItem title="Dashboard" icon={LayoutDashboard} />
      <NavigationSidebarItem title="Users" icon={Users} />
      <NavigationSidebarItem title="Settings" icon={Settings} />
    </nav>
  );
}
