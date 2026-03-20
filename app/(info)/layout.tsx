import InfoNavbar from "./InfoNavbar";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <InfoNavbar />
            {/* Top padding to account for fixed navbar */}
            <div className="flex-1 pt-24 pb-20">
                {children}
            </div>
        </div>
    );
}