import EventNavbar from "./EventNavBar";

export default function TritonEventLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <EventNavbar />
            {children}
        </>
    )
}
