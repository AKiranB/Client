"use client";
import { LoginDocument, LoginMutation } from "@/types/graphql-request";
import Nav from "./Nav";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import useLoginUser from "../../hooks/useLoginuser";

const NavWrapper = ({
  loggedInUser = false,
  items,
}: {
  loggedInUser?: boolean;
  items?: string[];
}) => {
  const { login, loading } = useLoginUser();
  const handleLogin = () => {
    login();
  };
  return (
    <Nav
      items={items}
      handleLogin={handleLogin}
      loading={loading}
      loggedInUser={loggedInUser}
    />
  );
};
export default NavWrapper;
