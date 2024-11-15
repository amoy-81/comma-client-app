import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import useAuth from "../../../hooks/use-auth.hook";

const LoginPage = () => {
  const { user, login, isLoading } = useAuth();

  console.log(user, isLoading);

  const handleLogin = () => {
    const data = {
      email: "ali@mail.co",
      password: "12345678",
    };

    login(data);
  };

  return (
    <Box className=" flex justify-center items-center h-screen login-bg">
      <Container
        component="main"
        maxWidth="xs"
        className="border border-solid border-blue-500 rounded-3xl backdrop-blur-2xl"
      >
        <Box className="p-16 flex flex-col justify-center items-center gap-4">
          <Typography>Login</Typography>
          <Typography></Typography>

          {/* <LoginForm /> */}
          <TextField fullWidth variant="standard" name="email" label="Email" />
          <TextField
            fullWidth
            variant="standard"
            type="password"
            name="password"
            label="Password"
          />

          <Box>
            <Typography className="w-full text-right text-primary-600 text-sm">
              Forgot password?
            </Typography>
          </Box>

          <Button fullWidth variant="contained">
            LOGIN
          </Button>
          <Button fullWidth>LOGIN</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
