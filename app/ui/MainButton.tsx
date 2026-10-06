import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MainButton({ children, href, external, disabled }: { children: React.ReactNode, href: string, external?: boolean, disabled?: boolean }) {
    if (disabled) {
        return (
            <div
                className="group relative inline-flex rounded-xl items-center justify-center gap-2 sm:gap-3 bg-neutral-800 text-gray-500 px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base font-black uppercase tracking-wider sm:tracking-widest cursor-not-allowed opacity-60 border border-white/10 select-none text-center"
            >
                <span>{children}</span>
            </div>
        );
    }

    return (
        <Link
            href={href}
            target={`${external ? "_blank" : "_self"}`}
            className="group relative inline-flex rounded-xl items-center justify-center gap-2 sm:gap-3 bg-triton-red hover:bg-white text-white hover:text-black px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base font-black uppercase tracking-wider sm:tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(234,30,36,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center"
        >
            <span>{children}</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        </Link>
    )
}   