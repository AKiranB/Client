import { useState } from "react";
import Image from "next/image";
import { Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

interface NavProps {
  logo?: HTMLImageElement;
  items: string[];
}

export default function Nav({ logo, items }: NavProps) {
  return (
    <div className="flex flex-wrap place-items-center h-screen">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
              <Image
                width={16}
                height={16}
                className="h-9"
                src="logo.png"
                alt="logo"
              />
            </a>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-16">
              {items.map((item) => {
                return (
                  <li key={Math.random()}>
                    <a className="hover:text-gray-200" href="#">
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
        </nav>
      </section>
    </div>
  );
}
