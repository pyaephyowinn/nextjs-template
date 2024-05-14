'use server';

import { AUTH_COOKIE_NAME } from '@/config';
import { cookies } from 'next/headers';

export const getServerSession = () => {
  const cookieStore = cookies();
  const auth = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  return auth ? JSON.parse(auth) : null;
};
