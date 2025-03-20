import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../../../store/auth/auth.store";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animations/google-login.json";
import { Box } from "@mui/material";

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

      navigate("/home");
    } else {
      navigate("/auth/login");
    }
  }, [navigate, location, setUser]);

  return (
    <Box className="flex justify-center items-center w-full h-screen">
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
};

export default VerifyPage;
