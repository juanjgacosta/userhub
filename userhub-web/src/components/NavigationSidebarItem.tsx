import type { ElementType } from "react";

import styles from "../assets/styles/NavigationSidebarItem.module.css";

interface NavigationSidebarItemProps {
  title: string;
  icon: ElementType;
}

export function NavigationSidebarItem({
  title,
  icon: Icon,
}: NavigationSidebarItemProps) {
  return (
    <a href="" className={styles.navigationItem}>
      <Icon className={styles.navigationIcon} />
      <span>{title}</span>
    </a>
  );
}
