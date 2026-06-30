import type { Metadata } from "next";
import "../globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { LanguageProvider, Language } from "@/context/LanguageContext";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "TactLink | Quick Information",
  description:
    "Reimagine networking with TactLink. Build digital namecards, manage smart directories, and connect communities through one platform.",
  metadataBase: new URL("https://www.tactlink.com"),
  openGraph: {
    title: "TactLink | Quick Information",
    description:
      "Connect smarter, go paperless, and grow your professional community with TactLink.",
    type: "website",
  },
    icons: {
    icon: "/logo/icon.png",
    shortcut: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={cn("font-sans", geist.variable)}>
      <body suppressHydrationWarning>
        <LanguageProvider lang={lang as Language}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
