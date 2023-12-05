import { useMutation } from "@apollo/client";
import { LoginDocument, LoginMutation, User } from "../types/graphql-request";
import { useRouter } from "next/navigation";
import { useStore } from "../store";

export default function useLoginUser() {
  const addUserToState = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  const router = useRouter();
  const onUserLoginSuccess = (user: User) => {
    if (user) {
      console.log("called");
      localStorage.setItem("user", JSON.stringify(user));
      addUserToState(user);
      router.push("/dashboard");
      console.log(user);
    }
  };

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
