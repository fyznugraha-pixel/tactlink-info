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
import LiquidGlassEdge from "./LiquidGlassEdge";

export default function Navbar() {
  const { dict, language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const navItems = dict.navItems;
  const isDesktop = useIsDesktop();
  const lastScrollYRef = useRef(0);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);
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

      if (Math.abs(currentScrollY - lastScrollYRef.current) > 10) {
        setIsOpen(false);
      }

      const darkElements = document.querySelectorAll('[data-theme="dark"]');
      let overDark = false;
      const navCenterY = 40; // Approximate center of the navbar vertically
      
      for (let i = 0; i < darkElements.length; i++) {
        const rect = darkElements[i].getBoundingClientRect();
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
          overDark = true;
          break;
        }
      }
      setIsOverDark(overDark);

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
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-auto">
      <nav
        className={`relative w-full max-w-5xl rounded-2xl transition-all duration-300 ${
          isScrolled || isOpen
            ? "ring-1 ring-inset ring-white/20 shadow-lg"
            : ""
        }`}
      >
        {/* Base Transparent Glass Layer with SVG Edge Distortion */}
        <LiquidGlassEdge
          className="absolute inset-0 z-0 transition-all duration-300"
          radius={16}
          edgeInset={18}
          distortionScale={isScrolled || isOpen ? 35 : 0}
          baseBackground={isScrolled || isOpen ? "rgba(255, 255, 255, 0.08)" : "transparent"}
          baseBackdropFilter={isScrolled || isOpen ? `blur(${isDesktop ? "6px" : "3px"}) saturate(200%)` : "none"}
        >
          {/* iOS 26 Style Glass Bevel & Mirror Edge */}
          <div className={`absolute inset-0 z-0 rounded-2xl transition-all duration-500 pointer-events-none overflow-hidden ${
            isScrolled || isOpen ? "opacity-100" : "opacity-0"
          }`}>
            {/* Extremely soft, blurred inner boundary (no hard lines) */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_8px_rgba(255,255,255,0.15)]" />
            
            {/* Smooth top volumetric highlight that fades naturally */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_3px_6px_-2px_rgba(255,255,255,0.4)]" />

            {/* Deep inner glow to give the glass 3D volume */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_8px_32px_-6px_rgba(255,255,255,0.1)]" />
          </div>
        </LiquidGlassEdge>
        <div className="relative z-10 flex items-center justify-between px-4 py-3 md:px-6 md:py-3">
          <a
            href="#top"
            className="group flex items-center gap-3"
            onClick={() => {
              setIsOpen(false);
              setActiveHref("#top");
            }}
            aria-label="Go to top"
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden">
              <Image
                src="/links/logo/icon.png"
                alt="TactLink logo"
                width={32}
                height={32}
                className="relative h-full w-full object-contain transition group-hover:opacity-100 opacity-100"
                priority
              />
            </span>
            <span className={`text-lg font-bold tracking-tight transition-colors ${isOverDark ? "text-secondary" : "text-primary"}`}>
              TactLink
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
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
                  className={`text-sm transition-all duration-200 ${
                    isActive
                      ? (isOverDark ? "text-secondary font-bold" : "text-primary font-bold")
                      : (isOverDark ? "text-white/80 hover:text-white font-medium" : "text-primary/75 hover:text-primary font-medium")
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={`/${language}${item.href}`}
                  className={`text-sm transition-all duration-200 ${
                    isActive
                      ? (isOverDark ? "text-secondary font-bold" : "text-primary font-bold")
                      : (isOverDark ? "text-white/80 hover:text-white font-medium" : "text-primary/75 hover:text-primary font-medium")
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-3">
            <LanguageSwitcher isOverDark={isOverDark} />

            <Link
              href={`/${language}/help`}
              className={`hidden md:inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 ${
                isOverDark
                  ? "bg-secondary text-primary hover:bg-[#e0bb42]"
                  : "bg-primary text-secondary hover:bg-primary/90"
              }`}
            >
              {dict.ui.helpCenter}
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className={`grid h-10 w-10 place-items-center rounded-xl transition active:scale-95 md:hidden border backdrop-blur-lg backdrop-saturate-150 ${
                isOverDark
                  ? "border-white/15 bg-white/10 text-secondary"
                  : "border-primary/20 bg-primary/5 text-primary"
              }`}
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
                  {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
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
              className={`relative z-10 overflow-hidden md:hidden rounded-b-[2rem] transition-colors duration-300 border-t border-white/20`}
            >
              <div className="px-4 pb-6 pt-3">
                <div className="grid gap-2">
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
                          className={`flex items-center justify-between rounded-xl px-5 py-3.5 text-sm transition-colors ${
                            isActive
                              ? (isOverDark ? "bg-white/15 text-secondary font-bold" : "bg-primary/10 text-primary font-bold")
                              : (isOverDark ? "text-white/80 font-medium hover:bg-white/10 hover:text-white" : "text-primary/80 font-medium hover:bg-primary/5 hover:text-primary")
                          }`}
                        >
                          <span>{item.label}</span>
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={`/${language}${item.href}`}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between rounded-xl px-5 py-3.5 text-sm transition-colors ${
                            isActive
                              ? (isOverDark ? "bg-white/15 text-secondary font-bold" : "bg-primary/10 text-primary font-bold")
                              : (isOverDark ? "text-white/80 font-medium hover:bg-white/10 hover:text-white" : "text-primary/80 font-medium hover:bg-primary/5 hover:text-primary")
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>
                      )
                    );
                  })}

                  <Link
                    href={`/${language}/help`}
                    onClick={() => setIsOpen(false)}
                    className={`mt-4 flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold shadow-sm transition hover:opacity-90 ${
                      isOverDark
                        ? "bg-secondary text-primary"
                        : "bg-primary text-secondary"
                    }`}
                  >
                    {dict.ui.helpCenter}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-auto">
        {navbarContent}
      </header>
      <LocationSuggester />
    </>
  );
}
