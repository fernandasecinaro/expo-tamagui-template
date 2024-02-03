import { api } from '../axiosInstance';

import { User } from '~/features/auth/types';

export interface LogInRequest {
  email: string;
  password: string;
}

interface LogInResponse {
  id: string;
  fullName: string;
  email: string;
  isVerified: boolean;
  image?: string;
  token: string;
}

const authService = {
  logIn: async (req: LogInRequest): Promise<User> => {
    const { data } = await api.post<LogInResponse>('/auth/login', req);
    return data;
  },
  logOut: async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export default authService;
