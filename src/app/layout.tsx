import { ReactNode } from "react";
import { ThemeProvider } from "../components/theme-provider";
import "@/styles/globals.css";
import { geistSans, geistMono } from "@/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <SpeedInsights />
      </body>
    </html>
  );
}
