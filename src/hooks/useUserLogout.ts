import { useRouter } from "next/navigation";

const useUserLogout = () => {
  const router = useRouter();
  localStorage.remove("user");
  router.push("/");
};

export default useUserLogout;
