"use client";

import { MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingHelp() {
  const pathname = usePathname();
  const isHelpPage = pathname?.endsWith("/help");

  if (isHelpPage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <Link
        href="/help"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-yellow-300 text-slate-950 shadow-lg shadow-yellow-300/30 ring-1 ring-white/20 transition-transform duration-300 hover:scale-110 active:scale-95 md:h-16 md:w-16"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
        <MessageCircleQuestion size={26} className="relative transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8" />
        
        {/* Pulse effect */}
        <div className="absolute -inset-1 -z-10 animate-ping rounded-full bg-yellow-300/40 opacity-75" />
      </Link>
    </div>
  );
}
