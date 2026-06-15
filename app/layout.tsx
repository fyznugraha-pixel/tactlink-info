import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "TactLink | Smart Directory & Digital Networking",
  description:
    "Reimagine networking with TactLink. Build digital namecards, manage smart directories, and connect communities through one platform.",
  metadataBase: new URL("https://www.tactlink.com"),
  openGraph: {
    title: "TactLink | Smart Directory & Digital Networking",
    description:
      "Connect smarter, go paperless, and grow your professional community with TactLink.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
