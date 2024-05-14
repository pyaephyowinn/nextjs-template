'use client';

import { Link } from '@/navigation';
import { useAuthSession } from '@/store/useAuthSession';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocalSwitcher';

export function Navbar() {
  const t = useTranslations('navbar');
  const { session, removeAuth } = useAuthSession();

  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto h-16 flex items-center justify-between'>
        <Link href='/' className='flex-shrink-0 text-white'>
          Next.js Template
        </Link>

        <div className='flex items-center gap-4 justify-center'>
          <LocaleSwitcher />

          {session ? (
            <>
              {session?.role === 'employer' && (
                <Link
                  href='/employer/profile'
                  className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
                >
                  {t('employer-profile')}
                </Link>
              )}

              {session?.role === 'job-seeker' && (
                <Link
                  href='/jobseeker/profile'
                  className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
                >
                  {t('jobseeker-profile')}
                </Link>
              )}

              <button
                onClick={() => {
                  removeAuth();
                }}
                className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
              >
                {t('logout')}
              </button>
            </>
          ) : (
            <div className='flex items-center gap-4'>
              <Link
                href='/auth/employer-login'
                className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
              >
                {t('employer-login')}
              </Link>

              <Link
                href='/auth/jobseeker-login'
                className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
              >
                {t('jobseeker-login')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
