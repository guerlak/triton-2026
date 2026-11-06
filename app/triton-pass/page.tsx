import { Metadata } from "next";
import TritonPassClient from "./TritonPassClient";

export const metadata: Metadata = {
  title: "TRITON Pass & Club Pass | Race With Freedom | TRITON World Series",
  description:
    "Upgrade to the TRITON Club Pass for €19/year. 80% registration protection, free deferral, priority registration, and exclusive athlete benefits on Apple & Google Wallet.",
  openGraph: {
    title: "TRITON Club Pass - Race With Freedom",
    description:
      "Cancel one eligible race per membership year and receive 80% registration fee back. Upgrade for €19/year.",
    images: ["/images/og-image.jpg"],
  },
};

export default function TritonPassPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <TritonPassClient />
      </main>
    </div>
  );
}
