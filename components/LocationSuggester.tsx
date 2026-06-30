"use client";

import { useEffect, useState } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, X } from "lucide-react";

const countryToLang: Record<string, Language> = {
  ID: "id", // Indonesia
  MY: "ms", // Malaysia
  VN: "vi", // Vietnam
  BD: "bn", // Bangladesh
  PH: "tl", // Philippines
};

const langNames: Record<Language, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  vi: "Tiếng Việt",
  bn: "বাংলা (Bengali)",
  tl: "Filipino",
};

export default function LocationSuggester() {
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [suggestedLang, setSuggestedLang] = useState<Language | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only check once per session to avoid annoying the user
    const hasChecked = sessionStorage.getItem("has_checked_location");
    if (hasChecked) return;

    const checkLocation = async () => {
      try {
        const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
        const data = await res.json();
        const country = data.country_code;

        if (country && countryToLang[country]) {
          const suggested = countryToLang[country];
          if (suggested !== language) {
            setSuggestedLang(suggested);
            setShow(true);
          }
        }
      } catch (error) {
        console.error("Failed to detect location", error);
      } finally {
        sessionStorage.setItem("has_checked_location", "true");
      }
    };

    // Small delay so it doesn't pop up instantly on page load
    const timer = setTimeout(checkLocation, 2500);
    return () => clearTimeout(timer);
  }, [language]);

  const switchLanguage = () => {
    if (!suggestedLang || !pathname) return;
    setShow(false);
    
    const segments = pathname.split("/");
    segments[1] = suggestedLang;
    router.push(segments.join("/"));
  };

  return (
    <AnimatePresence>
      {show && suggestedLang && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <motion.div
            key="location-suggester"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pointer-events-auto w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-xl"
          >
          <button 
            onClick={() => setShow(false)}
            className="absolute right-3 top-3 text-slate-400 hover:text-white"
          >
            <X size={16} />
          </button>
          
          <div className="flex items-start gap-4 pr-6">
            <div className="mt-1 rounded-full bg-cyan-400/20 p-2 text-cyan-400">
              <Globe2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white">Change Language?</h4>
              <p className="mt-1 text-sm text-slate-300">
                We noticed you might prefer <span className="font-semibold text-white">{langNames[suggestedLang]}</span>.
              </p>
              
              <div className="mt-4 flex gap-3">
                <button
                  onClick={switchLanguage}
                  className="rounded-full bg-cyan-400 px-4 py-1.5 text-sm font-bold text-slate-950 transition-transform hover:scale-105"
                >
                  Yes, switch
                </button>
                <button
                  onClick={() => setShow(false)}
                  className="rounded-full border border-slate-700 bg-transparent px-4 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800"
                >
                  No, thanks
                </button>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
