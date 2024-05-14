import Cookie from 'js-cookie';

export function getCookie(name: string) {
  return Cookie.get(name);
}

export function setCookie(name: string, value: object | string) {
  if (typeof value === 'object') {
    return Cookie.set(name, JSON.stringify(value));
  }
  return Cookie.set(name, value);
}

export function removeCookie(name: string) {
  Cookie.remove(name);
}
