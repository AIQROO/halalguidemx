import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  const wrapper = light
    ? "select-none inline-flex items-center bg-[#F7F4EB]/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl shadow-sm border border-[#EFEAD8]"
    : "select-none inline-flex items-center";

  return (
    <div className={`${wrapper} ${className}`}>
      <Image
        src="/logo.png"
        alt="Halal Guide MX — Discover Mexico"
        width={1823}
        height={863}
        priority
        className="h-9 md:h-10 w-auto"
      />
    </div>
  );
}
