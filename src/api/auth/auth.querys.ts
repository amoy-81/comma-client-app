import { useMutation } from "@tanstack/react-query";
import useAuthAction from "./auth.actions";
import { AuthKeys } from "./auth.keys";
import { LoginRequest } from "./auth.type";

export const useAuthLogin = () => {
  const { loginAction } = useAuthAction();

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationKey: [AuthKeys.login],
    mutationFn: (data: LoginRequest) => loginAction(data),
  });

  return {
    authLoginData: data,
    authLoginMutate: mutate,
    authLoginIsPending: isPending,
    authLoginIsSuccess: isSuccess,
  };
};
