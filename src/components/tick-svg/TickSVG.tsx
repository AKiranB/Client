"use client";
import { useState, useEffect } from "react";

interface TickSVGProps {
  timeout?: number;
}

export default function TickSVG({ timeout = 250 }: TickSVGProps) {
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationStart(true);
    }, timeout);
  }, [timeout]);

  return (
    <div
      className="border-2 border-green-500 rounded-full text-green-500"
      style={{
        width: "24px",
        height: "24px",
        position: "relative",
        borderRadius: "50%",
        opacity: animationStart ? 1 : 0,
        transition: "opacity 0.8s ease-out",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 20 20"
        className="stroke-current"
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          top: "50%",
          left: "50%",
          transform: animationStart
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0)",
          strokeDasharray: animationStart ? "25 0" : "0 25",
          strokeWidth: "1",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          transition:
            "transform 0.6s ease-in, stroke-dasharray 0.6s ease-in-out",
        }}
      >
        <path
          d="M4.25 10.75L8.5 15"
          style={{
            strokeDashoffset: animationStart ? 0 : 10,
            transition: "stroke-dashoffset 0.1s ease-in-out",
          }}
        />
        <path
          d="M8.5 15L16.75 6.75"
          style={{
            strokeDashoffset: animationStart ? 0 : -15,
            transition: "stroke-dashoffset 0.3s ease-in-out",
          }}
        />
      </svg>
    </div>
  );
}
