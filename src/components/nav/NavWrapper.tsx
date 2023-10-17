"use client";
import Nav from "./Nav";
import useLoginUser from "../../hooks/useLoginuser";
import useUserLogout from "../../hooks/useLogoutUser";

const NavWrapper = ({
  loggedInUser = false,
  items,
}: {
  loggedInUser?: boolean;
  items?: string[];
}) => {
  const { login, loading } = useLoginUser();
  const { logout } = useUserLogout();

  const handleLogin = () => {
    login();
  };
  const handleLogout = () => {
    console.log("logout");
    logout();
  };
  return (
    <Nav
      handleLogout={handleLogout}
      items={items}
      handleLogin={handleLogin}
      loading={loading}
      loggedInUser={loggedInUser}
    />
  );
};
export default NavWrapper;
