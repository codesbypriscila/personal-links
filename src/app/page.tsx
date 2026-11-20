import { LinkList } from "@/components/links/LinkList";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.column}>
        <ProfileHeader />
        <LinkList />
      </div>
    </main>
  );
}
