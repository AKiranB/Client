import { useMutation } from "@apollo/client";
import { LoginDocument, LoginMutation, User } from "../types/graphql-request";
import { useRouter } from "next/navigation";
import { useStore } from "../store";

export default function useLoginUser() {
  const addUserToState = useStore((state) => state.setUser);
  const onUserLoginSuccess = (user: User) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
      addUserToState(user);
    }
  };
  const router = useRouter();
  const [login, { loading }] = useMutation(LoginDocument, {
    variables: {
      loginUserInput: {
        password: "GuestUser123",
        email: "guest@gmail.com",
      },
    },
    onCompleted: (data: LoginMutation) => {
      onUserLoginSuccess(data.login.user);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { login, loading };
}
