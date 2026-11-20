import { links } from "@/data/links";
import { LinkButton } from "./LinkButton";
import styles from "./LinkList.module.css";

export function LinkList() {
  return (
    <section className={styles.panel} aria-labelledby="get-in-touch">
      <h2 id="get-in-touch" className={styles.title}>
        Get <span className={styles.script}>in touch</span>
      </h2>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.id}>
            <LinkButton link={link} />
          </li>
        ))}
      </ul>
      <p className={styles.footer}>© {new Date().getFullYear()} Priscila Pérez</p>
    </section>
  );
}
