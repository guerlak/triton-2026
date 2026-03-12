import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            {/* Navigation Bar for Info Pages */}
            <div className="pt-20 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-xsm uppercase tracking-widest text-gray-400 hover:text-triton-red transition-all duration-300 group"
                    >
                        <ChevronLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </div>

            <div className="flex-1 pb-10">
                {children}
            </div>
        </div>
    );
}