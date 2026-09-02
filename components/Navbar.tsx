"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BorderGlow from "@/components/BorderGlow";
import useIsDesktop from "@/hooks/useIsDesktop";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import LocationSuggester from "./LocationSuggester";

export default function Navbar() {
  const { dict, language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const navItems = dict.navItems;
  const isDesktop = useIsDesktop();
  const lastScrollYRef = useRef(0);

  const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#top");

  const sectionHrefs = useMemo(
    () => navItems.map((item) => item.href).filter((href) => href.startsWith("#")),
    []
  );

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollYRef.current;

      setIsScrolled(currentScrollY > 18);

      if (currentScrollY < 80 || scrollingUp) {
              } else {
                setIsOpen(false);
      }

      lastScrollYRef.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-150px 0px -50% 0px" }
    );

    sectionHrefs.forEach((href) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionHrefs]);

  useEffect(() => {
    if (pathname !== "/" && pathname !== `/${language}`) {
      const currentItem = navItems.find((item) => 
        !item.href.startsWith("#") && pathname.endsWith(item.href)
      );
      if (currentItem) {
        setActiveHref(currentItem.href);
      } else {
        setActiveHref("");
      }
    }
  }, [pathname, language, navItems]);

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const navbarContent = (
    <nav
      className={`relative border transition-colors duration-300 ${
        isDesktop ? "rounded-full" : "rounded-[1.5rem]"
      } ${
        isScrolled
          ? "border-yellow-300/15 bg-slate-950/82 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl"
          : "border-white/10 bg-slate-950/68 shadow-xl shadow-cyan-950/20 backdrop-blur-2xl"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(250,204,21,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.10),transparent_34%)]" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200/45 to-transparent" />
      </div>

      <div className="relative flex items-center justify-between px-3 py-2.5 md:px-5 md:py-3">
        <a
          href="#top"
          className="group flex flex-1 min-w-0 items-center gap-2.5 md:gap-3"
          onClick={() => {
            setIsOpen(false);
            setActiveHref("#top");
          }}
          aria-label="Go to top"
        >
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-yellow-300/30 bg-white shadow-[0_0_24px_rgba(250,204,21,0.14)] transition duration-300 md:h-11 md:w-11 md:group-hover:scale-105 md:group-hover:shadow-[0_0_40px_rgba(250,204,21,0.28)]">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.26),transparent_42%)]" />

            <Image
              src="/logo/logotactlink.png"
              alt="TactLink logo"
              width={32}
              height={32}
              className="relative h-6 w-6 object-contain md:h-7 md:w-7"
              priority
            />
          </span>

          <span className="min-w-0">
            <span className="flex items-center gap-1.5 text-sm font-black leading-none tracking-wide text-white">
              TactLink
              
            </span>

            <span className="mt-1 hidden text-xs font-medium text-slate-400 sm:block">
              {dict.ui.smartDirectory}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveHref(item.href);
                  if (pathname === `/${language}` || pathname === "/") {
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    router.push(`/${language}${item.href}`);
                  }
                }}
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
            ) : (
              <Link
                key={item.href}
                href={`/${language}${item.href}`}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition duration-300 ${
                  isActive
                    ? "text-slate-950 bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,0.22)]"
                    : "text-slate-300 hover:text-yellow-100"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />

          <Link
            href={`/${language}/help`}
            className="group relative hidden overflow-hidden rounded-full border border-yellow-300/25 bg-yellow-300 px-4 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(250,204,21,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-200 hover:shadow-[0_0_38px_rgba(250,204,21,0.28)] md:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-700 group-hover:translate-x-full" />

            <span className="relative flex items-center gap-2">
              {dict.ui.helpCenter}
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition active:scale-95 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0, scale: 0.85 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.16 }}
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
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative overflow-hidden md:hidden"
          >
            <div className="border-t border-white/10 px-3 pb-3 pt-2">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200/35 to-transparent" />

              <div className="grid gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeHref === item.href;

                  return (
                    item.href.startsWith("#") ? (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          setActiveHref(item.href);
                          if (pathname === `/${language}` || pathname === "/") {
                            const target = document.querySelector(item.href);
                            if (target) {
                              target.scrollIntoView({ behavior: "smooth" });
                            }
                          } else {
                            router.push(`/${language}${item.href}`);
                          }
                        }}
                        className={`relative flex items-center justify-between overflow-hidden rounded-2xl px-4 py-3 text-sm font-bold transition active:scale-[0.99] ${
                          isActive
                            ? "bg-yellow-300 text-slate-950"
                            : "bg-white/[0.035] text-slate-200"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.32),transparent_38%)]" />
                        )}
                        <span className="relative">{item.label}</span>
                        {isActive ? (
                          <span className="relative h-1.5 w-1.5 rounded-full bg-slate-950" />
                        ) : (
                          <ArrowUpRight size={14} className="text-slate-500" />
                        )}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={`/${language}${item.href}`}
                        onClick={() => setIsOpen(false)}
                        className={`relative flex items-center justify-between overflow-hidden rounded-2xl px-4 py-3 text-sm font-bold transition active:scale-[0.99] ${
                          isActive
                            ? "bg-yellow-300 text-slate-950"
                            : "bg-white/[0.035] text-slate-200"
                        }`}
                      >
                        <span className="relative">{item.label}</span>
                        <ArrowUpRight size={14} className="text-slate-500" />
                      </Link>
                    )
                  );
                })}

                <Link
                  href={`/${language}/help`}
                  onClick={() => setIsOpen(false)}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-4 py-3 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(250,204,21,0.16)] transition active:scale-[0.99]"
                >
                  {dict.ui.helpCenter}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4 pointer-events-auto">
        <div className="mx-auto max-w-[1400px]">
          {isDesktop ? (
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
              animated={false}
              colors={["#fde047", "#22d3ee", "#60a5fa"]}
              fillOpacity={0.11}
              className="rounded-full"
            >
              {navbarContent}
            </BorderGlow>
          ) : (
            navbarContent
          )}
        </div>
      </header>
      <LocationSuggester />
    </>
  );
}