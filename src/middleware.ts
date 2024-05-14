import {
  AUTH_COOKIE_NAME,
  authedEmployerPages,
  authedJobSeekerPages,
  employerLoginPage,
  intlCookieHeader,
  jobSeekerLoginPage,
} from '@/config';
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LOCALE, localePrefix, locales } from './config';

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/');
  const pathname = segments.join('/');

  const isEmployerPages = authedEmployerPages.includes(pathname);
  const isJobSeekerPages = authedJobSeekerPages.includes(pathname);

  const auth = (() => {
    const authCookieValue = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    if (authCookieValue) return JSON.parse(authCookieValue);
    return null;
  })();

  const isAuthenticatedEmployer = auth && auth.role === 'employer';
  const isAuthenticatedJobSeeker = auth && auth.role === 'job-seeker';

  if (
    (isEmployerPages && !isAuthenticatedEmployer) ||
    (isJobSeekerPages && !isAuthenticatedJobSeeker)
  ) {
    const loginUrl = isEmployerPages ? employerLoginPage : jobSeekerLoginPage;
    const redirectUrl = new URL(`/${locale}/${loginUrl}`, request.url);
    redirectUrl.searchParams.set('callbackUrl', request.url);
    return NextResponse.redirect(redirectUrl);
  }

  const defaultLocale = request.headers.get(intlCookieHeader) || DEFAULT_LOCALE;
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix,
  });
  const response = handleI18nRouting(request);
  response.headers.set(intlCookieHeader, defaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(my|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
