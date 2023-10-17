import { useMutation } from "@apollo/client";
import router from "next/router";
import { LoginDocument, LoginMutation } from "../types/graphql-request";

export default function useLoginUser() {
  //create a service layerfor this
  const [login, { loading }] = useMutation(LoginDocument, {
    variables: {
      loginUserInput: {
        password: "GuestUser123",
        email: "guest@gmail.com",
      },
    },
    onCompleted: (data: LoginMutation) => {
      const user = data.login.user;
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
