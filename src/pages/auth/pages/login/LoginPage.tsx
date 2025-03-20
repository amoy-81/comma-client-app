import { Box, Button, Container, Typography } from "@mui/material";
import useAuth from "../../../../hooks/use-auth.hook";
import { FormProvider, useForm } from "react-hook-form";
import { LoginRequest } from "../../../../api/auth/auth.type";
import GoogleLogo from "../../../../assets/svg/google-logo.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { AppConfig } from "../../../../configs/app/app.config";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, login, loginPending } = useAuth();

  const methods = useForm<LoginRequest>();

  const { handleSubmit } = methods;

  useEffect(() => {
    if (user) navigate("/posts");
  }, [user]);

  const handleLogin = (data: LoginRequest) => {
    login(data);
  };

  const handleLoginWithGoogle = () => {
    window.location.href = `${AppConfig.baseURL}/auth/google`;
  };

  return (
    <Box className=" flex justify-center items-center h-screen loading-animation login-bg">
      <Container
        component="main"
        maxWidth="xs"
        className="border-2 border-solid border-primary-600 rounded-3xl backdrop-blur-2xl bg-secondary-600/50 !shadow-lg !mx-4"
      >
        <Box className="sm:p-12 p-10 px-4 flex flex-col justify-center items-center gap-4">
          {/* Title Section */}
          <Box className="w-full">
            <Typography className="!font-bold">{t("login")}</Typography>
            <Typography className="!text-xs text-secondary-500">
              {t("loginDesc")}
            </Typography>
          </Box>

          {/* Form Section */}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleLogin)}>
              {/* <TextInput
                fullWidth
                name="email"
                label={t("email")}
                rules={{
                  required: t("emailIsRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("emailError"),
                  },
                }}
                placeholder={t("Enter your email...")}
              />

              <TextInput
                fullWidth
                name="password"
                type="password"
                label={t("Password")}
                rules={{
                  required: t("Password is required"),
                  minLength: {
                    value: 8,
                    message: t("Password must be at least 8 characters"),
                  },
                }}
                placeholder="********"
              />

              <Box className="py-4">
                <Typography className="w-full text-right text-primary-600 !text-sm">
                  {t("Forgot password?")}
                </Typography>
              </Box> */}

              {/* Action Button */}
              {/* <Button
                fullWidth
                type="submit"
                variant="contained"
                className="!mt-2"
                disabled={loginPending}
              >
                {loginPending ? t("Sending...") : t("login")}
              </Button> */}
              <Button
                fullWidth
                className="!bg-white !text-black !mt-2 flex gap-2"
                onClick={handleLoginWithGoogle}
              >
                <img src={GoogleLogo} alt="google logo" />
                {t("LOGIN With Google")}
              </Button>
            </form>
          </FormProvider>
        </Box>

        {/* <Box className="flex items-center">
          <Box className="flex-1 bg-primary-600/40 h-px" />
          <Typography className="px-2">{t("OR")}</Typography>
          <Box className="flex-1 bg-primary-600/40 h-px" />
        </Box> */}

        {/* Link Section */}
        {/* <Typography className="!mt-2 !font-medium text-center">
          {t("Dont have an accont?")}
        </Typography> */}
        {/* <Box className="sm:px-12 px-4 py-4 pb-6">
          <Button fullWidth className="" variant="outlined" color="inherit">
            {t("Sign up")}
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
};

export default LoginPage;
