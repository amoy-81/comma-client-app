import { Button } from "@mui/material";
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
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
