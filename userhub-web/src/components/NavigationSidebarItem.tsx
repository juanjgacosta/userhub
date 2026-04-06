import type { ElementType } from "react";
import { NavLink } from "react-router-dom";

import styles from "../assets/styles/NavigationSidebarItem.module.css";

interface NavigationSidebarItemProps {
  title: string;
  icon: ElementType;
  to: string;
}

export function NavigationSidebarItem({
  title,
  icon: Icon,
  to,
}: NavigationSidebarItemProps) {
  return (
    <NavLink to={to} className={styles.navigationItem}>
      <Icon className={styles.navigationIcon} />
      <span>{title}</span>
    </NavLink>
  );
}
