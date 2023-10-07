"use client";
import Image from "next/image";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";

interface NavProps {
  logo?: HTMLImageElement;
  items: string[];
  loggedInUser?: boolean;
  handleLogin?: any
  loading?: boolean
}

export default function Nav({ items, loggedInUser = false, handleLogin }: NavProps) {
  return (
    <nav className="flex justify-between text-white h-16 border-b border-gray-100 items-center">

      <div className="flex items-center pl-8">
        <a className="text-3xl font-bold font-heading" href="#">
          <Image width={48} height={32} src="/logo.svg" alt="logo" />
        </a>
      </div>


      <ul className="hidden md:flex text-gray-400 font-semi-bold font-heading space-x-16 mx-auto pl-16">
        {items.map((item) => {
          return (
            <li key={Math.random()}>
              <a className="hover:text-gray-900 font-bold" href="#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>


      {loggedInUser ? (
        <div className="flex items-center pr-8">
          <a className="navbar-burger self-center mr-12 md:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
          <div className="mr-8 py-2 flex-shrink-0 ">
            <Avatar />
          </div>
          <Button
            text="Log out"
            className="h-12 w-32"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}
          />
        </div>
      ) : (
        <div className="flex items-center pr-8">
          <Button
            text="Log in as guest"
            className="h-12"
            onClick={handleLogin}
          />
        </div>
      )}
    </nav>
  );
}