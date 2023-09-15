"use client";
import Image from "next/image";
import Avatar from "./Avatar";
import Button from "./Button";

interface NavProps {
  logo?: HTMLImageElement;
  items: string[];
  loggedInUser?: boolean;
}

export default function Nav({ items, loggedInUser = false }: NavProps) {
  return (
    <nav className="flex justify-between text-white  h-16 border-b border-gray-100">
      <div className="flex items-center pl-8">
        <a className="text-3xl font-bold font-heading" href="#">
          <Image width={48} height={32} src="/logo.svg" alt="logo" />
        </a>
      </div>
      {loggedInUser ? (
        <>
          {" "}
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <ul className="hidden md:flex px-4 mx-auto text-gray-400 font-semi-bold font-heading space-x-16">
              {items.map((item) => {
                return (
                  <li key={Math.random()}>
                    <a className="hover:text-gray-900" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="navbar-burger self-center mr-12 md:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
          <div className="mr-8 py-2">
            <Avatar />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-end ml-auto pr-8">
          <Button
            text="Log in as guest"
            className="h-12"
            onClick={() => console.log("log in as guest")}
          />
        </div>
      )}
    </nav>
  );
}
