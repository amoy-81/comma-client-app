import { User } from "../../api/user/user.type";

export type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};
