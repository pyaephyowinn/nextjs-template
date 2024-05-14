// useCookie.js
import {
  getAuthSession,
  removeAuthSession,
  setAuthSession,
} from '@/utils/auth';
import { useState } from 'react';

export const useAuthSession = () => {
  const initialAuthSession = getAuthSession();
  const [session, setSession] = useState(initialAuthSession);

  const setAuth = (newValue: object) => {
    setSession(newValue);
    setAuthSession(newValue);
  };

  const removeAuth = () => {
    removeAuthSession();
    setSession(null);
  };

  return { session, setAuth, removeAuth };
};
