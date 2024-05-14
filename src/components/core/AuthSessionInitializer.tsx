'use client';

import { useInitializeAuthSession } from '@/store/useAuthSession';

export default function AuthSessionInitializer() {
  useInitializeAuthSession();
  return null;
}
