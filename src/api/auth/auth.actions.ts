import axios from "axios";
import { LoginRequest, LoginResponse } from "./auth.type";
import { AuthUrls } from "./auth.urls";
import toast from "react-hot-toast";
import { AppConfig } from "../../configs/app/app.config";

const useAuthAction = () => {
  const loginAction = async (body: LoginRequest): Promise<LoginResponse> => {
    const response = await axios
      .post<LoginRequest>(`${AppConfig.baseURL}${AuthUrls.login}`, body)
      .then((res) => res.data)
      .catch((err) => {
        const { data } = err.response;

        // Show Error in Toast
        if (data?.message) {
          if (Array.isArray(data.message)) {
            data.message.forEach((msg: string) => toast.error(msg));
          } else {
            toast.error(data.message);
          }
        } else {
          toast.error("An unexpected error occurred");
        }

        return err;
      });

    return response;
  };

  return { loginAction };
};

export default useAuthAction;
