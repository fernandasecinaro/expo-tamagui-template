import axios, { AxiosError } from 'axios';
import { useEffect, useRef } from 'react';

import { api } from './axiosInstance';

import { ApiError, NetworkError, UnknownError } from '~/features/auth/types';

/**
 * Sets `onUnauthorized` function in axios interceptor to run when a response's
 * status is 401. Make sure to invalidate or refresh the token inside the
 * `onUnauthorized` callback
 *
 * @param onUnauthorized 401 status handler callback
 */
export const useSetUpUnauthorizedCallback = (onUnauthorized: () => void) => {
  const onUnauthorizedRef = useRef(onUnauthorized);
  useEffect(() => {
    onUnauthorizedRef.current = onUnauthorized;
  });

  useEffect(() => {
    const httpUnauthorizedInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (axios.isAxiosError(error)) {
          const axiosError: AxiosError<ApiError> = error;
          if (axiosError.response) {
            if (axiosError.response.status === 401) {
              onUnauthorizedRef.current();
            }
            throw new ApiError(
              axiosError.response.data.message as string,
              axiosError.response.status,
              axiosError.response.data.errorCode
            );
          } else {
            throw new NetworkError();
          }
        } else {
          throw new UnknownError();
        }
      }
    );

    return () => {
      api.interceptors.response.eject(httpUnauthorizedInterceptor);
    };
  }, []);
};
