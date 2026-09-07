"use client";

import { useLanguage, Language } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa Indonesia" },

  { code: "vi", label: "Tiếng Việt" },
  { code: "bn", label: "বাংলা" },
  { code: "tl", label: "Filipino" },
];

export default function LanguageSwitcher({ isOverDark = false }: { isOverDark?: boolean }) {
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (newLang: Language) => {
    setIsOpen(false);
    if (!pathname) return;
    
    // Replace the current locale in the pathname
    const segments = pathname.split("/");
    // First segment is empty, second is current locale
    segments[1] = newLang;
    const newPath = segments.join("/");
    
    router.push(newPath);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLangLabel = languages.find(l => l.code === language)?.label || "Language";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium backdrop-blur-lg backdrop-saturate-150 transition-all shadow-sm",
          isOverDark
            ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-secondary"
            : "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
        )}
      >
        <Globe2 size={16} className={isOverDark ? "text-secondary" : "text-primary"} />
        <span className="hidden sm:inline-block">{currentLangLabel}</span>
        <span className="sm:hidden uppercase">{language}</span>
        <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-2xl border p-1 shadow-2xl backdrop-blur-xl backdrop-saturate-200",
              isOverDark
                ? "border-white/10 bg-[#161B2E]/90 text-white"
                : "border-primary/10 bg-white/95 text-primary shadow-xl"
            )}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                  language === lang.code
                    ? (isOverDark ? "bg-yellow-400/15 font-bold text-yellow-400" : "bg-primary/10 font-bold text-primary")
                    : (isOverDark ? "text-slate-300 font-medium hover:bg-white/10 hover:text-white" : "text-primary/80 font-medium hover:bg-primary/5 hover:text-primary")
                )}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
