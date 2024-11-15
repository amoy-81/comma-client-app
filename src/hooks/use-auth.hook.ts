import Cookies from "js-cookie";
import { useAuthLogin } from "../api/auth/auth.querys";
import { LoginRequest } from "../api/auth/auth.type";
import useAuthStore from "../store/auth/auth.store";

const useAuth = () => {
  const { user, setUser, logout } = useAuthStore();
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
      },
    });
  };

  const logoutUser = (): void => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    logout();
  };

  return {
    user,
    login,
    isLoading: authLoginIsPending,
    logout: logoutUser,
  };
};
export default useAuth;
