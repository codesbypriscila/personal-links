import { Arimo, Imperial_Script, Manrope } from "next/font/google";

/* Same type as the portfolio: Arimo bold for titles, Imperial Script for accents, Manrope for text. */
const arimo = Arimo({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-title",
  display: "swap",
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = [arimo.variable, imperialScript.variable, manrope.variable].join(" ");
