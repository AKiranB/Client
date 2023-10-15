"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useRouteLoggedInUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    console.log(user);
    if (user) {
      router.push("/dashboard");
    }
    setIsLoading(false);
  }, [router]);
  return isLoading;
};

export { useRouteLoggedInUser };
