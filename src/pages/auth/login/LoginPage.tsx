import { Box, Button, Container, Typography } from "@mui/material";
import useAuth from "../../../hooks/use-auth.hook";
import TextInput from "../../../components/text-input/TextInput";
import { FormProvider, useForm } from "react-hook-form";
import { LoginRequest } from "../../../api/auth/auth.type";
import GoogleLogo from "../../../assets/svg/google-logo.svg";

const LoginPage = () => {
  const { user, login, isLoading } = useAuth();

  const methods = useForm<LoginRequest>();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log(user, isLoading, errors);

  const handleLogin = (data: LoginRequest) => {
    console.log(data);
    // const data = {
    //   email: "ali@mail.co",
    //   password: "12345678",
    // };

    // login(data);
  };

  return (
    <Box className=" flex justify-center items-center h-screen login-bg">
      <Container
        component="main"
        maxWidth="xs"
        className="border-2 border-solid border-primary-600 rounded-3xl backdrop-blur-2xl bg-secondary-600/50 !shadow-lg !mx-4"
      >
        <Box className="sm:p-12 p-10 px-4 flex flex-col justify-center items-center gap-4">
          <Box className="w-full">
            <Typography className="!font-bold">Login</Typography>
            <Typography className="!text-xs text-secondary-500">
              Comma is a place to express opinions
            </Typography>
          </Box>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleLogin)}>
              <TextInput
                fullWidth
                name="email"
                label="Email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                }}
                placeholder="Enter your email..."
              />

              <TextInput
                fullWidth
                name="password"
                type="password"
                label="Password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
                placeholder="********"
              />

              <Box className="py-4">
                <Typography className="w-full text-right text-primary-600 !text-sm">
                  Forgot password?
                </Typography>
              </Box>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                className="!mt-2"
              >
                LOGIN
              </Button>
              <Button
                fullWidth
                className="!bg-white !text-black !mt-2 flex gap-2"
              >
                <img src={GoogleLogo} alt="google logo" />
                LOGIN With Google
              </Button>
            </form>
          </FormProvider>
        </Box>
        <Box className="flex items-center">
          <Box className="flex-1 bg-primary-600/40 h-px" />
          <Typography className="px-2">OR</Typography>
          <Box className="flex-1 bg-primary-600/40 h-px" />
        </Box>

        <Typography className="!mt-2 !font-medium text-center">Dont have an accont?</Typography>
        <Box className="sm:px-12 px-4 py-4 pb-6">
          <Button fullWidth className="" variant="outlined" color="inherit">
            Sign up
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
