import Link from "next/link";

interface NavButtonProps {
  isRed?: boolean;
  text: string;
  href: string;
}

export default function NavButton({ isRed, text, href }: NavButtonProps) {
  return isRed ? (
    <button className="bg-triton-red hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold uppercase transition-colors">
      <Link href={href}>{text}</Link>
    </button>
  ) : (
    <button className="bg-white  text-black hover:text-triton-red font-bold py-2 px-5 rounded-full text-sm uppercase transition-colors">
      <Link href={href}>{text}</Link>
    </button>
  );
}
