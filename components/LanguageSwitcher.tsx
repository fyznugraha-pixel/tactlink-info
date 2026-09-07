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

export default function LanguageSwitcher({ isScrolled = false }: { isScrolled?: boolean }) {
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
          "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium backdrop-blur-md transition-all",
          isScrolled
            ? "border-slate-200 bg-slate-100/50 text-slate-700 hover:bg-slate-200 hover:text-primary"
            : "border-white/20 bg-black/20 text-white/90 hover:bg-white/20 hover:text-white"
        )}
      >
        <Globe2 size={16} className={isScrolled ? "text-primary" : "text-yellow-400"} />
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
              "absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-2xl border p-1 shadow-xl backdrop-blur-xl",
              isScrolled
                ? "border-slate-200 bg-white/95"
                : "border-slate-700 bg-slate-900/95"
            )}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                  language === lang.code
                    ? (isScrolled ? "bg-slate-100 font-bold text-primary" : "bg-yellow-400/10 font-bold text-yellow-400")
                    : (isScrolled ? "text-slate-600 font-medium hover:bg-slate-50 hover:text-primary" : "text-slate-300 font-medium hover:bg-slate-800 hover:text-white")
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
