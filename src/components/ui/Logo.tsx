import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export default function Logo({ className = "", imgClassName = "h-18 md:h-20" }: LogoProps) {
  return (
    <div className={`select-none inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Halal Guide MX — Discover Mexico"
        width={1823}
        height={863}
        priority
        className={`${imgClassName} w-auto`}
      />
    </div>
  );
}
