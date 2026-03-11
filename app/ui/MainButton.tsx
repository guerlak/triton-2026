import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MainButton({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <Link
            href={href}
            className="group relative inline-flex items-center gap-3 bg-triton-red hover:bg-white text-white hover:text-black px-12 py-5 font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(234,30,36,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
            <span>{children}</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
        </Link>
    )
}   