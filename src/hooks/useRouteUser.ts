"use client"
import router from "next/router";
import { useEffect, useState } from "react";

const useRouteLoggedInUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') as string);
        if (user) {
            router.push('/dashboard');
        }
        setIsLoading(false);
    }, [router]);
    return isLoading;
}

export { useRouteLoggedInUser }