import { useMutation } from '@tanstack/react-query';
import SessionService, { LogInRequest } from 'services/api/endpoints/auth';

import { ApiError, User } from './types';

export const useLogIn = () => {
  return useMutation<User, ApiError, LogInRequest>({
    mutationFn: SessionService.logIn,
  });
};
