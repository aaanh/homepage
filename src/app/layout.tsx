import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';

import interphases from '@/fonts/interphases';

export const metadata = {
  title: 'AAANH',
  description: `AAANH's Homepage`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interphases.className}`}>
        {' '}
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