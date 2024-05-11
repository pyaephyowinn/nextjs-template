import { Pathnames } from 'next-intl/navigation';

export const DEFAULT_LOCALE = 'en';
export const locales = ['en', 'mm'];
// Use the default: `always`
export const localePrefix = undefined;
export const pathnames = {
  '/': '/',
  '/login': { en: '/login', mm: '/လော့အင်' },
} satisfies Pathnames<typeof locales>;
export type AppPathnames = keyof typeof pathnames;
