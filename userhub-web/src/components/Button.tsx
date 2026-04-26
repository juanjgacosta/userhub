import type { ElementType, ReactNode } from "react";

import styles from "../assets/styles/Button.module.css";

interface ButtonPrefixProps {
  icon: ElementType;
}

interface ButtonProps {
  label: string;
  variantType?: "button" | "reset" | "submit";
  variantStyle: string;
  children?: ReactNode;
  form?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonPrefix({ icon: Icon }: ButtonPrefixProps) {
  return <Icon size={18} />;
}

export function Button({
  label,
  variantType = "button",
  variantStyle = "primary",
  children,
  form,
  onClick,
}: ButtonProps) {
  // const variantClass =
  //   variantStyle === "primary" ? styles.primary : styles.secondary;

  let variantClass;
  switch (variantStyle) {
    case "primary":
      variantClass = styles.primary;
      break;

    case "secondary":
      variantClass = styles.secondary;
      break;

    case "edit":
      variantClass = styles.edit;
      break;

    case "delete":
      variantClass = styles.delete;
      break;

    default:
      variantClass = styles.primary;
      break;
  }

  return (
    <button
      type={variantType}
      className={`${styles.button} ${variantClass}`}
      form={form}
      onClick={onClick}
    >
      {children}
      <span>{label}</span>
    </button>
  );
}
