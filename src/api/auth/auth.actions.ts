import axiosInstance from "../../services/http.service";
import { LoginRequest, LoginResponse } from "./auth.type";
import { AuthUrls } from "./auth.urls";

const useAuthAction = () => {
  const loginAction = async (body: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance
      .post<LoginRequest>(AuthUrls.login, body)
      .then((res) => res.data)
      .catch((err) => err);

    return response;
  };

  return { loginAction };
};

export default useAuthAction;
