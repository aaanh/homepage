import {
  Crimson_Pro,
  Geist,
  Geist_Mono,
  IBM_Plex_Sans,
  Playfair_Display,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["500", "100"],
});

export const playfairSerif = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
});

export const crimsonSerif = Crimson_Pro({
  variable: "--font-crimson-serif",
  subsets: ["latin"],
});
