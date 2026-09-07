"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import useIsDesktop from "@/hooks/useIsDesktop";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const desktopBackgroundImages = [
  "/links/hero/1.png",
  "/links/hero/2.png",
  "/links/hero/3.png",
  "/links/hero/4.png",
  "/links/hero/5.png",
];

const mobileBackgroundImages = [
  "/links/hero-mobile/1.png",
  "/links/hero-mobile/2.png",
  "/links/hero-mobile/3.png",
  "/links/hero-mobile/4.png",
  "/links/hero-mobile/5.png",
];

export default function HeroSection() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { brand, benefits, ui } = dict;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  useEffect(() => {
    const images = isDesktop ? desktopBackgroundImages : mobileBackgroundImages;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) return;

    const timer = setInterval(() => {
      setActiveBenefitIndex((prev) => (prev + 1) % Math.min(benefits.length, 4));
    }, 1500); // Auto rotate every 1.5 seconds on mobile

    return () => clearInterval(timer);
  }, [isDesktop, activeBenefitIndex, benefits.length]);

  return (
    <section id="top" data-theme="dark" className="relative flex flex-col items-center justify-center min-h-[80svh] md:min-h-[100vh] overflow-hidden pt-32 md:pt-40 pb-12 md:pb-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-primary">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={(isDesktop ? desktopBackgroundImages : mobileBackgroundImages)[currentImageIndex]}
              alt="TactLink networking"
              fill
              className="object-cover object-center"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center text-center">
        
        {/* Main Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 px-4 py-2 text-[10px] sm:text-xs md:text-sm font-medium text-white mb-6 md:mb-8 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(239,201,75,0.8)]" />
            {brand.tagline}
          </div>

          {/* Headline (Syne font) */}
          <h1 className="text-4xl leading-[1.2] sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-white md:leading-[1.05] mb-6 md:mb-8 font-headline">
            {brand.headline.split('\n').map((line, i, arr) => (<span key={i} className={i === arr.length - 1 ? "text-secondary italic block mt-1 md:mt-2" : "block"}>{line}</span>))}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-neutral/90 mb-10 md:mb-12 max-w-2xl leading-relaxed font-body font-light px-2 sm:px-0">
            {brand.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12 md:mb-16 px-4 sm:px-0">
            <a
              href="#app-links"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded bg-secondary hover:bg-[#e0bb42] px-8 py-3.5 md:px-10 md:py-4 text-sm md:text-base font-bold text-primary transition-all shadow-[0_4px_14px_0_rgba(239,201,75,0.39)] hover:shadow-[0_6px_20px_rgba(239,201,75,0.23)] hover:-translate-y-0.5"
            >
              {ui.downloadApp}
            </a>
            <a
              href="https://www.tactlink.com/contact"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 hover:bg-white/20 px-8 py-3.5 md:px-10 md:py-4 text-sm md:text-base font-medium text-white transition-all hover:-translate-y-0.5"
            >
              {dict.primaryLinks[1].label}
            </a>
          </div>

          {/* Checklist */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm md:text-base font-medium text-white/90 font-body">
            {dict.ui.heroChecklist.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary w-4 h-4 md:w-5 md:h-5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Benefits Row */}
      <div className="relative z-10 mx-auto mt-12 md:mt-32 w-full max-w-[1440px] px-4 md:px-12 lg:px-16 pb-6">
        
        {/* Desktop Layout */}
        <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-10 border-t border-white/10">
          {benefits.slice(0, 4).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white/5 backdrop-blur-lg backdrop-saturate-150 border border-transparent hover:border-white/10"
              >
                <div className="flex-shrink-0 grid h-12 w-12 place-items-center rounded bg-white/10 text-secondary border border-white/10">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-0.5 font-headline">{item.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout (Interactive Icon Tabs) */}
        <div className="md:hidden pt-8 border-t border-white/10">
          <div className="flex justify-between gap-3 max-w-xs mx-auto">
            {benefits.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              const isActive = activeBenefitIndex === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveBenefitIndex(index)}
                  className={`flex-1 grid place-items-center aspect-square rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 border-white/30 text-secondary shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-105"
                      : "bg-white/5 border-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                  } border`}
                >
                  <Icon size={22} strokeWidth={isActive ? 2 : 1.5} className="transition-transform duration-300" />
                </button>
              );
            })}
          </div>
          
          <div className="mt-5 text-center min-h-[3rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeBenefitIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="text-sm font-bold text-white font-headline"
              >
                {benefits[activeBenefitIndex]?.title}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
