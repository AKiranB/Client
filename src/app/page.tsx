"use client"
import TickSVG from "./components/tick-svg/TickSVG";
import NavWrapper from "./components/nav/NavWrapper";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Spinner from "./components/spinner/spinner";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  //initial login check before we implement JWT
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      router.push('/dashboard');
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-32">
        <Spinner />
      </div>
    </div>;
  }
  return (
    <>
      <NavWrapper />
      <main className="flex min-h-screen flex-col items-center">
        <div>
          <h1 className="mb-4 mt-24 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Challenge Yourself
            </span>{" "}
            <br />
            Everyday
          </h1>
          <div className="flex justify-start min-w-screen">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 text-1xl ml-2">
              <li className="flex items-center space-x-3">
                <TickSVG timeout={250} />
                <span>Schedule Workouts</span>
              </li>
              <li className="flex items-center space-x-3 text-bold">
                <TickSVG timeout={500} />
                <span>Report Outcomes</span>
              </li>
              <li className="flex items-center space-x-3">
                <TickSVG timeout={750} />
                <span>Track Progress</span>
              </li>
            </ul>
          </div>
        </div>
      </main></>
  );
}
