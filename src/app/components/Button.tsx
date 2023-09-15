"use client";
interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
