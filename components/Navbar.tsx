"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      setIsScrolled(currentScrollY > 24);

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (scrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -90, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4"
        >
          <nav
            className={`mx-auto max-w-6xl overflow-hidden rounded-[1.6rem] border transition-all duration-300 md:rounded-full ${
              isScrolled
                ? "border-yellow-300/15 bg-slate-950/80 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl"
                : "border-white/10 bg-slate-950/58 shadow-xl shadow-cyan-950/20 backdrop-blur-2xl"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 md:px-5">
              <a
                href="#top"
                className="flex items-center gap-3"
                onClick={() => setIsOpen(false)}
                aria-label="Go to top"
              >
                <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-yellow-300/25 bg-white shadow-[0_0_28px_rgba(250,204,21,0.14)]">
                  <Image
                    src="/logo/logotactlink.png"
                    alt="TactLink logo"
                    width={32}
                    height={32}
                    className="h-7 w-7 object-contain"
                    priority
                  />
                </span>

                <span>
                  <span className="block text-sm font-black leading-none tracking-wide text-white">
                    TactLink
                  </span>
                  <span className="mt-1 hidden text-xs font-medium text-slate-400 sm:block">
                    Smart Directory
                  </span>
                </span>
              </a>

              <div className="hidden items-center gap-7 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-slate-300 transition hover:text-yellow-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#download"
                  className="hidden items-center gap-2 rounded-full bg-yellow-300 px-3 py-2.5 text-sm font-black text-slate-950 transition hover:bg-yellow-200 sm:inline-flex"
                >
                  Start
                  <ArrowUpRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen((value) => !value)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
                  aria-label="Toggle navigation"
                >
                  {isOpen ? <X size={19} /> : <Menu size={19} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden"
                >
                  <div className="grid gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-yellow-200"
                      >
                        {item.label}
                      </a>
                    ))}

                    <a
                      href="#download"
                      onClick={() => setIsOpen(false)}
                      className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-yellow-200"
                    >
                      Download App
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}