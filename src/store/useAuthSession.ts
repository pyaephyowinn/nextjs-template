import {
  getAuthSession,
  removeAuthSession,
  setAuthSession,
} from '@/utils/auth';
import { useEffect } from 'react';
import { create } from 'zustand';

interface IAuthSession {
  session: any | null;
  setAuth: (newValue: object) => void;
  removeAuth: () => void;
  initializeSession: () => void;
}

export const useAuthSession = create<IAuthSession>((set) => ({
  session: null,

  setAuth: (newValue: any) => {
    setAuthSession(newValue);
    set({ session: newValue });
  },
  removeAuth: () => {
    removeAuthSession();
    set({ session: null });
  },

  initializeSession: () => {
    const session = getAuthSession();
    set({ session });
  },
}));

// Hook to initialize the session
export const useInitializeAuthSession = () => {
  const initializeSession = useAuthSession((state) => state.initializeSession);

  useEffect(() => {
    initializeSession();
  }, [initializeSession]);
};
