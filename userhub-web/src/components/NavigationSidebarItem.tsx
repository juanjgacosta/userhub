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
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.item} ${isActive ? styles.itemActive : ""}`
      }
    >
      <Icon className={styles.icon} />
      <span>{title}</span>
    </NavLink>
  );
}
