import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import sf_pro_display from "@/fonts/sf_pro";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Contact @aaanh",
  description: "Inquiries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          sf_pro_display.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
