import { headers } from 'next/headers';

const dictionaries = {
  'en-US': () => import('../translations/en-US.json').then(module => module.default),
  'fr-CA': () => import('../translations/fr-CA.json').then(module => module.default),
  // 'vi': () => import('../translations/vi.json').then(module => module.default),
  // 'jp': () => import('../translations/jp.json').then(module => module.default),
};

export type Locale = keyof typeof dictionaries;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export async function getCurrentLocale() {
  const headersList = headers();
  const pathname = (await headersList).get('x-pathname') || '';
  
  // Extract locale from pathname
  const locale = pathname.split('/')[1] as Locale;
  return locale || 'en-US';
} 