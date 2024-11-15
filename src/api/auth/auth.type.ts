export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string; // TODO: Change to enum
  bio: string;
  created_at: string;
  updated_at: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};