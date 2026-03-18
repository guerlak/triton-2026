import Link from "next/link";

interface NavButtonProps {
  isRed?: boolean;
  text: string;
  href: string;
  className?: string;
}

export default function NavButton({ isRed, text, href, className = "" }: NavButtonProps) {
  const baseStyles = "px-5 py-2 rounded-full text-sm font-bold uppercase transition-colors inline-block text-center";
  const redStyles = "bg-triton-red hover:bg-red-700 text-white";
  const whiteStyles = "bg-white text-black hover:text-triton-red";

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${isRed ? redStyles : whiteStyles} ${className}`}
    >
      {text}
    </Link>
  );
}

