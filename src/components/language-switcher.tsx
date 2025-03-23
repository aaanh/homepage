'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Globe } from "lucide-react";

const locales = [
  { code: 'en-US', label: 'English' },
  { code: 'fr-CA', label: 'Français' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'jp', label: '日本語' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const currentPathWithoutLocale = pathname.split('/').slice(2).join('/');
    router.push(`/${locale}/${currentPathWithoutLocale}`);
  };

  const getCurrentLocale = () => {
    return locales.find(locale => pathname.startsWith(`/${locale.code}`))?.label || 'English';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => switchLanguage(locale.code)}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 