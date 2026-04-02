
interface HeadingProps {
    text1: string;
    text2: string;
}

export default function Heading({ text1, text2 }: HeadingProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 font-sans">
                {text1}
            </h2>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6 font-sans">
                {text2}
            </h2>

        </div>
    );
}