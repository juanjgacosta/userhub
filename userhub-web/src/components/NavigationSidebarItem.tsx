import type { ElementType } from "react";

import styles from "../assets/styles/Sidebar.module.css";

interface NavigationSidebarItemProps {
  title: string;
  icon: ElementType;
}

export function NavigationSidebarItem({
  title,
  icon: Icon,
}: NavigationSidebarItemProps) {
  return (
    <a href="">
      <Icon className={styles.navigationSidebarIcon} />
      <span>{title}</span>
    </a>
  );
}
