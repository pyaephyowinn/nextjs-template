'use client';

import { Link } from '@/navigation';
import { useAuthSession } from '@/store/useAuthSession';
import LocaleSwitcher from './LocalSwitcher';

export function Navbar() {
  const { session, removeAuth } = useAuthSession();

  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto h-16 flex items-center justify-between'>
        <Link href='/' className='flex-shrink-0 text-white'>
          Next.js App
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
                  Employer Profile
                </Link>
              )}

              {session?.role === 'job-seeker' && (
                <Link
                  href='/jobseeker/profile'
                  className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
                >
                  Job Seeker Profile
                </Link>
              )}

              <button
                onClick={() => {
                  removeAuth();
                }}
                className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
              >
                logout
              </button>
            </>
          ) : (
            <div className='flex items-center gap-4'>
              <Link
                href='/auth/employer-login'
                className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
              >
                Employer Login
              </Link>

              <Link
                href='/auth/jobseeker-login'
                className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
              >
                Job Seeker Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
