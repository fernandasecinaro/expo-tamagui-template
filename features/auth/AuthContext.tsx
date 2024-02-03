import { router } from 'expo-router';
import React, { PropsWithChildren } from 'react';

import { useLogIn } from './queries';
import { User } from './types';
import { useStorageState } from './useStorageState';

import { useAPIConfig } from '~/services/api/useApiConfig';

export interface Session {
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  session?: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isPendingLogIn: boolean;
  logInError: Error | null;
}

const AuthContext = React.createContext<Session>({
  logIn: async () => {},
  logOut: () => {},
  session: null,
  isLoading: false,
  isAuthenticated: false,
  isPendingLogIn: false,
  logInError: null,
});

export const useSession = () => {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
};

export const SessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [[isLoading, session], setSession] = useStorageState('session');
  const { mutate, isPending: isPendingLogIn, error: logInError } = useLogIn();
  const token = session ? session.token : undefined;

  const logOut = () => {
    setSession(null);
  };

  useAPIConfig({ token, onUnauthorized: logOut });

  const logIn = (email: string, password: string) =>
    mutate(
      { email, password },
      {
        onSuccess: (res) => {
          setSession(res);
          router.replace('/');
        },
        onError: () => {
          router.replace('/test');
        },
      }
    );

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        isAuthenticated: !!session,
        session,
        logInError,
        isPendingLogIn,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
