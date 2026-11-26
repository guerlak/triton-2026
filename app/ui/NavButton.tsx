import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface NavButtonProps {
  isRed?: boolean;
  text: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export default function NavButton({
  isRed,
  text,
  href,
  icon,
  className = "",
  external = false,
  disabled = false,
}: NavButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border shadow-sm group hover:scale-105 active:scale-95 text-center";
  const redStyles =
    "bg-triton-red hover:bg-red-700 text-white border-triton-red hover:border-red-700";
  const defaultStyles =
    "bg-white/10 hover:bg-triton-red text-white border-white/20 hover:border-triton-red";
  const disabledStyles =
    "bg-neutral-800 text-gray-500 cursor-not-allowed opacity-60 border-white/10 select-none pointer-events-none hover:scale-100 active:scale-100";

  if (disabled) {
    return (
      <span className={`${baseStyles} ${disabledStyles} ${className}`}>
        {icon}
        <span>{text}</span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${isRed ? redStyles : defaultStyles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      <span>{text}</span>
      {external && (
        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      )}
    </Link>
  );
}
