import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className }: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className ?? ""}`.trim();

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button className={cls}>{children}</button>;
}
