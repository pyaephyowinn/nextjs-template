import {
  getAuthSession,
  removeAuthSession,
  setAuthSession,
} from '@/utils/auth';
import { create } from 'zustand';

interface IAuthSession {
  session: object | null;
  setAuth: (newValue: object) => void;
  removeAuth: () => void;
}

export const useAuthSession = create<IAuthSession>((set) => ({
  session: getAuthSession(),

  setAuth: (newValue: object) => {
    setAuthSession(newValue);
    set({ session: newValue });
  },
  removeAuth: () => {
    removeAuthSession();
    set({ session: null });
  },
}));
