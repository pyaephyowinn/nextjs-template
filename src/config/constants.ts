import { Pathnames } from 'next-intl/navigation';

//#region localization

export type AppPathnames = keyof typeof pathnames;
export const DEFAULT_LOCALE = 'en',
  locales = ['en', 'mm'],
  localePrefix = undefined,
  pathnames = {
    '/': '/',
    '/login': { en: '/login', mm: '/လော့အင်' },
  } satisfies Pathnames<typeof locales>;

//#endregion
