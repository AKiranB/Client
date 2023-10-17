import { useRouter } from "next/navigation";
import { useStore } from "../store";

const useLogoutUser = () => {
  const router = useRouter();
  const logoutUser = useStore((store) => store.logoutUser);
  const logout = () => {
    localStorage.removeItem("user");
    logoutUser();
    router.push("/");
  };
  return { logout };
};

export default useLogoutUser;
