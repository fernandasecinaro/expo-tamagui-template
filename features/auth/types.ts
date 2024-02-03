export interface User {
  id: string;
  fullName: string;
  email: string;
  isVerified: boolean;
  image?: string;
  token: string;
}

export class ApiError extends Error {
  message: string;
  status: number;
  errorCode: string;

  constructor(message: string, status: number, errorCode: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.errorCode = errorCode;
  }
}

export class NetworkError extends ApiError {
  constructor() {
    super('A network error occurred', 504, 'NETWORK_ERROR');
    this.name = 'NetworkError';
  }
}

export class UnknownError extends ApiError {
  constructor() {
    super('An unexpected error occurred', 500, 'UNKNOWN_ERROR');
    this.name = 'UnknownError';
  }
}
