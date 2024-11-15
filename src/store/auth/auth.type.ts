import { User } from "../../api/auth/auth.type";

export type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};
