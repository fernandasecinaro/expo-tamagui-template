import { useEffect, useRef } from 'react';

import { api } from './axiosInstance';

/**
 * Sets up token with axios instance's interceptor
 *
 * @param token token to be used in headers as Bearer authentication
 */
export const useSetUpTokenWithAPI = (token: string | undefined): void => {
  const tokenRef = useRef<string | undefined>(token);
  useEffect(() => {
    tokenRef.current = token;
  });

  useEffect(() => {
    const tokenInterceptor = api.interceptors.request.use((config) => {
      const tokenValue = tokenRef.current;
      if (tokenValue) {
        config.headers.Authorization = `Bearer ${tokenValue}`;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(tokenInterceptor);
    };
  }, []);
};
