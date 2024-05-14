'use client';

import { setAuthSession } from '@/app/utils/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from '@/navigation';

export default function Login() {
  const handleLogin = () => {
    setAuthSession({
      username: 'alice',
      role: 'employer',
      token: 'jwt12345',
    });
  };

  return (
    <div className='w-full lg:grid lg:grid-cols-2 h-screen'>
      <div className='absolute left-4 top-4'>
        <Link href='/'>
          <Button variant='ghost'>Back</Button>
        </Link>
      </div>

      <div
        onClick={handleLogin}
        className='flex items-center justify-center py-12'
      >
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Employer Login</h1>
            <p className='text-balance text-muted-foreground'>
              Enter your email below to login to your account
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <a href='#' className='ml-auto inline-block text-sm underline'>
                  Forgot your password?
                </a>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <a href='#' className='underline'>
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className='hidden bg-gray-100 lg:block'>
        {/* <Image
          src='/placeholder.svg'
          alt='Image'
          width='1920'
          height='1080'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        /> */}
      </div>
    </div>
  );
}
