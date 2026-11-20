import type { LinkItem } from "@/types/links";

const portfolioUrl = "https://priscilaa-portfolioo.vercel.app";

export const links: readonly LinkItem[] = [
  { id: "portfolio", label: "My portfolio", href: portfolioUrl },
  { id: "cv", label: "Download my CV", href: `${portfolioUrl}/cv/priscila-perez-cv-en.pdf` },
  { id: "quote", label: "Quote your project", href: "https://cotizador-priscila.vercel.app" },
  { id: "github", label: "GitHub", href: "https://github.com/codesbypriscila" },
  { id: "gitlab", label: "GitLab", href: "https://gitlab.com/Priscilaperez" },
];
