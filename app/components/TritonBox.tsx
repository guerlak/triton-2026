import React from "react";

export default function TritonBox({ children }: React.PropsWithChildren) {
    return (
        <div className="mx-auto md:max-w-[1200px] bg-linear-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-8 border-l-4 border-triton-red shadow-2xl">
            {children}
        </div>
    )
}