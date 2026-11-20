import Image from "next/image";
import { profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";
import styles from "./ProfileHeader.module.css";

export function ProfileHeader() {
  const { photo } = profile;
  return (
    <header className={styles.header}>
      <Image
        className={styles.photo}
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        sizes="140px"
        quality={90}
        loading="eager"
        fetchPriority="high"
      />
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.bio}>{profile.bio}</p>
      <SocialLinks />
    </header>
  );
}
