import type { LinkItem } from "@/types/links";
import styles from "./LinkButton.module.css";

export function LinkButton({ link }: { link: LinkItem }) {
  return (
    <a className={styles.button} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
    </a>
  );
}
