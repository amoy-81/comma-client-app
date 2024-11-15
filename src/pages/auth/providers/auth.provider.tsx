import { FC, ReactNode, useEffect } from "react";
import useAuth from "../../../hooks/use-auth.hook";
import SuspansLoader from "../../../components/suspans-loader/SuspansLoader";
import { useNavigate } from "react-router-dom";

type AuthProviderProps = {
  children: ReactNode;
  mode: "panel" | "auth";
};

const AuthProvider: FC<AuthProviderProps> = ({ children, mode }) => {
  const navigate = useNavigate();
  const { getSession, user, isLoading } = useAuth();

  useEffect(() => {
    if (user && mode === "auth") navigate("/posts");
  }, [user, isLoading]);

  useEffect(() => {
    getSession();
  }, []);

  useEffect(() => {
    if (!user && !isLoading && mode === "panel") navigate("/auth/login");
  }, [user, isLoading]);

  if (!user && !isLoading && mode === "auth") return <>{children}</>;

  if (user && !isLoading && mode === "panel") return <>{children}</>;

  return (
    <>
      <SuspansLoader />
    </>
  );
};

export default AuthProvider;
