import { AUTH_COOKIE_NAME } from '@/config';
import { getCookie, removeCookie, setCookie } from './cookie';

export const getAuthSession = () => {
  const auth = getCookie(AUTH_COOKIE_NAME);
  return auth ? JSON.parse(auth) : null;
};

export const setAuthSession = (data: object) => {
  return setCookie(AUTH_COOKIE_NAME, data);
};

export const removeAuthSession = () => {
  return removeCookie(AUTH_COOKIE_NAME);
};
