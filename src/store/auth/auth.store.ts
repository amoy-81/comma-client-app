import { create } from "zustand";
import { AuthState } from "./auth.type";

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () =>
    set({
      user: null,
    }),
}));

export default useAuthStore;
