import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ThemeProvider } from "../components/theme-provider";
import "@/styles/globals.css";
import Header from "@/components/sections/header";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AAANH",
  description: "Anh's Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="light"
      style={{ colorScheme: "light" }}
    >
      <body
        className={`min-h-screen antialiased ${geistSans.variable} ${geistMono.variable}
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
