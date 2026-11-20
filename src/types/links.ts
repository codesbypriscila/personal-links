export type SocialNetwork = "instagram" | "linkedin";

export interface SocialLink {
  network: SocialNetwork;
  label: string;
  href: string;
}

export interface LinkItem {
  id: string;
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  bio: string;
  photo: { src: string; width: number; height: number; alt: string };
}
