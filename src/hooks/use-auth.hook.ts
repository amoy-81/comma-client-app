import Cookies from "js-cookie";
import { useAuthLogin } from "../api/auth/auth.querys";
import { LoginRequest, User } from "../api/auth/auth.type";
import useAuthStore from "../store/auth/auth.store";
import axiosInstance from "../services/http.service";
import { useState } from "react";

const useAuth = () => {
  const { user, setUser, logout } = useAuthStore();
  const [loading, setLoading] = useState(true);

  const { authLoginMutate, authLoginIsPending } = useAuthLogin();

  const login = async (body: LoginRequest): Promise<void> => {
    authLoginMutate(body, {
      onSuccess: (data) => {
        const { user, accessToken, refreshToken } = data;

        Cookies.set("accessToken", accessToken, {
          secure: true,
          httpOnly: false,
        });

        Cookies.set("refreshToken", refreshToken, {
          secure: true,
          httpOnly: false,
        });

        setUser(user);
        setLoading(false);
      },
    });
  };

  const getSession = async (): Promise<User | null | undefined> => {
    if (user) return user;

    setLoading(true);

    const token = Cookies.get("refreshToken");

    if (!token) {
      setLoading(false);
      logoutUser();
      return null;
    }

    try {
      const response = await axiosInstance.get("/auth/whoiam");

      setUser(response.data);

      setLoading(false);

      return response.data;
    } catch (error) {
      setLoading(false);
      logoutUser();
      return null;
    }
  };

  const logoutUser = (): void => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    logout();
  };

  return {
    user,
    login,
    getSession,
    isLoading: authLoginIsPending || loading,
    loginPending: authLoginIsPending,
    logout: logoutUser,
  };
};
export default useAuth;
