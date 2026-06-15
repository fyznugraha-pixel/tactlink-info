"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { navItems } from "@/lib/content";
import BorderGlow from "@/components/BorderGlow";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#top");

  const sectionHrefs = useMemo(
    () => navItems.map((item) => item.href).filter((href) => href.startsWith("#")),
    []
  );

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

      let currentActive = activeHref;

      for (const href of sectionHrefs) {
        const section = document.querySelector(href);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          currentActive = href;
          break;
        }
      }

      setActiveHref(currentActive);
      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeHref, sectionHrefs]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -90, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -90, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4"
        >
          <div className="mx-auto max-w-6xl">
            <BorderGlow
              edgeSensitivity={26}
              glowColor="52 95 62"
              backgroundColor={
                isScrolled ? "rgba(2, 6, 23, 0.86)" : "rgba(2, 6, 23, 0.68)"
              }
              borderRadius={999}
              glowRadius={26}
              glowIntensity={0.82}
              coneSpread={22}
              animated={isScrolled}
              colors={["#fde047", "#22d3ee", "#60a5fa"]}
              fillOpacity={0.11}
              className="overflow-hidden rounded-[1.6rem] md:rounded-full"
            >
              <nav
                className={`relative overflow-hidden rounded-[1.6rem] border transition-all duration-300 md:rounded-full ${
                  isScrolled
                    ? "border-yellow-300/15 bg-slate-950/72 shadow-2xl shadow-cyan-950/35 backdrop-blur-2xl"
                    : "border-white/10 bg-slate-950/48 shadow-xl shadow-cyan-950/20 backdrop-blur-2xl"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(250,204,21,0.13),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_34%)]" />
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200/55 to-transparent" />

                <div className="relative flex items-center justify-between px-4 py-3 md:px-5">
                  <a
                    href="#top"
                    className="group flex items-center gap-3"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveHref("#top");
                    }}
                    aria-label="Go to top"
                  >
                    <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-yellow-300/30 bg-white shadow-[0_0_30px_rgba(250,204,21,0.16)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(250,204,21,0.28)]">
                      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.28),transparent_42%)]" />

                      <Image
                        src="/logo/logotactlink.png"
                        alt="TactLink logo"
                        width={32}
                        height={32}
                        className="relative h-7 w-7 object-contain"
                        priority
                      />
                    </span>

                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-black leading-none tracking-wide text-white">
                        TactLink
                        <Sparkles
                          size={12}
                          className="text-yellow-200 opacity-0 transition duration-300 group-hover:opacity-100"
                        />
                      </span>

                      <span className="mt-1 hidden text-xs font-medium text-slate-400 sm:block">
                        Smart Directory
                      </span>
                    </span>
                  </a>

                  <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 md:flex">
                    {navItems.map((item) => {
                      const isActive = activeHref === item.href;

                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveHref(item.href)}
                          className={`relative rounded-full px-4 py-2 text-sm font-bold transition duration-300 ${
                            isActive
                              ? "text-slate-950"
                              : "text-slate-300 hover:text-yellow-100"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="navbar-active-pill"
                              className="absolute inset-0 rounded-full bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,0.22)]"
                              transition={{
                                type: "spring",
                                stiffness: 420,
                                damping: 34,
                              }}
                            />
                          )}

                          <span className="relative z-10">{item.label}</span>
                        </a>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="#download"
                      className="group relative hidden overflow-hidden rounded-full border border-yellow-300/25 bg-yellow-300 px-4 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(250,204,21,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-200 hover:shadow-[0_0_38px_rgba(250,204,21,0.28)] sm:inline-flex"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-700 group-hover:translate-x-full" />

                      <span className="relative flex items-center gap-2">
                        Start
                        <ArrowUpRight
                          size={16}
                          className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsOpen((value) => !value)}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-yellow-300/20 hover:bg-white/10 md:hidden"
                      aria-label="Toggle navigation"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={isOpen ? "close" : "menu"}
                          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.18 }}
                        >
                          {isOpen ? <X size={19} /> : <Menu size={19} />}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="relative border-t border-white/10 px-4 pb-4 pt-2 md:hidden"
                    >
                      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent" />

                      <div className="grid gap-2">
                        {navItems.map((item, index) => {
                          const isActive = activeHref === item.href;

                          return (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.22,
                                delay: index * 0.035,
                              }}
                              onClick={() => {
                                setIsOpen(false);
                                setActiveHref(item.href);
                              }}
                              className={`relative overflow-hidden rounded-2xl px-4 py-3 text-sm font-bold transition ${
                                isActive
                                  ? "bg-yellow-300 text-slate-950"
                                  : "text-slate-200 hover:bg-white/10 hover:text-yellow-200"
                              }`}
                            >
                              {isActive && (
                                <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.35),transparent_35%)]" />
                              )}

                              <span className="relative">{item.label}</span>
                            </motion.a>
                          );
                        })}

                        <motion.a
                          href="#download"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.22, delay: 0.12 }}
                          onClick={() => setIsOpen(false)}
                          className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-4 py-3 text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(250,204,21,0.18)] transition hover:bg-yellow-200"
                        >
                          Download App
                          <ArrowUpRight size={16} />
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            </BorderGlow>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}