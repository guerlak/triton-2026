
interface HeadingProps {
    text1: string;
    text2: string;
}

export default function Heading({ text1, text2 }: HeadingProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <h2 className="text-triton-red text-xs sm:text-sm font-bold tracking-widest uppercase mb-1 sm:mb-2 font-sans">
                {text1}
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-4 sm:mb-6 font-sans">
                {text2}
            </h2>
        </div>
    );
}