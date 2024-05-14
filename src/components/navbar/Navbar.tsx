import { Link } from '@/navigation';
import LocaleSwitcher from './LocalSwitcher';

export function Navbar() {
  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto h-16 flex items-center justify-between'>
        <Link href='/' className='flex-shrink-0 text-white'>
          Next.js App
        </Link>

        <div className='flex items-center gap-4 justify-center'>
          <LocaleSwitcher />

          <Link
            href='employer/profile'
            className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
          >
            Employer Profile
          </Link>

          <Link
            href='/job-seeker/profile'
            className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
          >
            Job Seeker Profile
          </Link>

          <Link
            href='/login'
            className='h-10 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700'
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
