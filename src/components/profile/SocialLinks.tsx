import { socialLinks } from "@/data/profile";
import { SocialIcon } from "./SocialIcon";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  return (
    <ul className={styles.list} aria-label="Social networks">
      {socialLinks.map((social) => (
        <li key={social.network}>
          <a className={styles.link} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
            <SocialIcon network={social.network} />
          </a>
        </li>
      ))}
    </ul>
  );
}
