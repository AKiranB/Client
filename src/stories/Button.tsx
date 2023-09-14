import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="#"
          className="text-2xl no-underline text-black hover:text-blue-dark"
        >
          Home
        </a>
      </div>
      <div>
        <a
          href="#"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          One
        </a>
        <a
          href="#"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Two
        </a>
        <a
          href="#"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Three
        </a>
      </div>
    </nav>
  );
};
