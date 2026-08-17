import Link from "next/link";

interface NavButtonProps {
  isRed?: boolean;
  text: string;
  href: string;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export default function NavButton({ isRed, text, href, className = "", external = false, disabled = false }: NavButtonProps) {
  const baseStyles = "px-5 py-2 rounded-full text-sm font-bold uppercase transition-colors inline-block text-center";
  const redStyles = "bg-triton-red hover:bg-red-700 text-white";
  const whiteStyles = "bg-white text-black hover:text-triton-red";
  const disabledStyles = "bg-neutral-800 text-gray-500 cursor-not-allowed opacity-60 border border-white/10 select-none pointer-events-none";

  if (disabled) {
    return (
      <span className={`${baseStyles} ${disabledStyles} ${className}`}>
        {text}
      </span>
    );
  }

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${isRed ? redStyles : whiteStyles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {text}
    </Link>
  );
}

