import { AUTH_COOKIE_NAME } from '@/config';
import { getCookie, removeCookie, setCookie } from './cookie';

export const getAuthSession = () => {
  return getCookie(AUTH_COOKIE_NAME);
};

export const setAuthSession = (data: Record<string, unknown>) => {
  return setCookie(AUTH_COOKIE_NAME, data);
};

export const removeAuthSession = () => {
  return removeCookie(AUTH_COOKIE_NAME);
};
