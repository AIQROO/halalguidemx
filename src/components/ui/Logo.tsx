import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic vector brand mark */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Custom Inverted Arch / Map Pin Shape */}
          <path
            d="M50 15C32 15 25 28 25 45C25 57 32 68 50 85C68 68 75 57 75 45C75 28 68 15 50 15Z"
            fill="url(#logo-grad-teal)"
            stroke="#C15C3D"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Decorative Islamic arch interior line */}
          <path
            d="M50 21C37 21 32 30 32 45C32 54 38 63 50 75C62 63 68 54 68 45C68 30 63 21 50 21Z"
            stroke="#FCF9F2"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          {/* Elegant Crescent & Star (Center-right offset for balance) */}
          <path
            d="M48 37C53.5 37 57 41.5 56.5 47C56 52 51 55.5 45.5 54C49 52.5 50.5 48.5 49.5 44.5C48.5 40.5 45 38.5 42 39.5C44 38 46 37 48 37Z"
            fill="#FCF9F2"
          />
          <path
            d="M55 42.5L56 40L57 42.5L59.5 43L57 44L58 46.5L55.5 45L53 46.5L54 44L51.5 43L55 42.5Z"
            fill="#C15C3D"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="logo-grad-teal" x1="50" y1="15" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0D3F47" />
              <stop offset="100%" stopColor="#072A30" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-[20px] font-extrabold tracking-wide uppercase text-teal-deep">
            Halal Guide
          </span>
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-terracotta uppercase mt-0.5">
            MX • Riviera Maya
          </span>
        </div>
      )}
    </div>
  );
}
