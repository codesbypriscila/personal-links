import type { Profile, SocialLink } from "@/types/links";

export const profile: Profile = {
  name: "Priscila Pérez",
  bio: "Software developer who loves creating things, warm colors and the little details. Here are all my links!",
  photo: { src: "/profile.jpg", width: 770, height: 770, alt: "Priscila Pérez" },
};

export const socialLinks: readonly SocialLink[] = [
  { network: "instagram", label: "Instagram", href: "https://www.instagram.com/imnotpriscilaa__/" },
  { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/priscila-perez-h/" },
];
