import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../../../store/auth/auth.store";
import axiosInstance from "../../../../services/http.service";

const VerifyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuthStore();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");

    if (accessToken && refreshToken) {
      Cookies.set("accessToken", accessToken, { secure: true });
      Cookies.set("refreshToken", refreshToken, { secure: true, expires: 7 });

      const fetchUser = async () => {
        try {
          const response = await axiosInstance.get("/auth/whoiam", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const user = response.data;

          if (user) {
            setUser(user);
            navigate("/");
          } else {
            navigate("/auth/login");
          }
        } catch (err) {
          navigate("/auth/login");
        }
      };

      fetchUser();
    } else {
      navigate("/auth/login");
    }
  }, [navigate, location, setUser]);

  return <div>Please wait...</div>;
};

export default VerifyPage;
