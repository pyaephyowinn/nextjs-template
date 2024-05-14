import { Pathnames } from 'next-intl/navigation';
import { employerPagesPrefix, jobSeekerPagesPrefix } from './auth';

export const DEFAULT_LOCALE = 'en',
  locales = ['en', 'my'],
  localePrefix = 'always';

export const login = 'login',
  employerProfile = `/${employerPagesPrefix}/profile`,
  jobSeekerProfile = `/${jobSeekerPagesPrefix}/profile`;

export const pathnames = {
  '/': '/',
  login,
  employerProfile,
  jobSeekerProfile,
} satisfies Pathnames<typeof locales>;
