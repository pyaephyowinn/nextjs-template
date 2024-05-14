import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, localePrefix, locales } from './config';

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/');
  console.log('locale', locale);
  console.log('locale', segments.join('/'));

  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('x-intl-locale') || DEFAULT_LOCALE;

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix,
    pathnames: {
      '/': '/',
    },
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set('x-intl-locale', defaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(mm|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
