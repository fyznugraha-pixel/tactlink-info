"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import GradientText from "@/components/GradientText";
import useIsDesktop from "@/hooks/useIsDesktop";

const PixelBlast = dynamic(() => import("@/components/PixelBlast"), {
  ssr: false,
});

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { brand, benefits, ui } = dict;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden px-4 pb-10 pt-24 sm:pt-28 md:min-h-screen md:pb-14 md:pt-32"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isDesktop ? (
          <div className="absolute inset-0 opacity-[0.5]">
            <PixelBlast
              variant="square"
              pixelSize={4}
              color="#EAB308"
              patternScale={2}
              patternDensity={1}
              pixelSizeJitter={0}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquid={false}
              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.5}
              edgeFade={0.25}
              transparent
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(250,204,21,0.18),transparent_32%),radial-gradient(circle_at_10%_32%,rgba(34,211,238,0.13),transparent_34%),radial-gradient(circle_at_90%_74%,rgba(139,92,246,0.10),transparent_34%)]" />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/65 via-transparent to-slate-950/45" />
      </div>

      <div className="bg-grid pointer-events-none absolute inset-0 z-[1] opacity-[0.055] md:opacity-[0.1]" />

      <div className="pointer-events-none absolute left-1/2 top-20 z-[1] h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl md:h-[34rem] md:w-[34rem]" />
      <div className="pointer-events-none absolute -right-28 bottom-24 z-[1] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl md:h-72 md:w-72" />
      <div className="pointer-events-none absolute -left-24 top-1/2 z-[1] h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl md:h-64 md:w-64" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col justify-center gap-8 md:grid md:min-h-0 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto w-full max-w-[38rem] text-center md:mx-0 md:max-w-none md:text-left"
        >
          <div className="mx-auto mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-2 text-[10px] font-black text-yellow-100 shadow-lg shadow-yellow-950/10 backdrop-blur-xl sm:text-sm md:mx-0 md:px-4">
            <Sparkles size={14} />
            <span className="truncate">{brand.tagline}</span>
          </div>

          <GradientText
            colors={["#5227FF","#f2f1f4","#EAB308","#f2f1f4"]}
            animationSpeed={5}
            showBorder={false}
            className="mx-auto block max-w-[22rem] whitespace-normal break-words text-[2.75rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:max-w-[34rem] sm:text-5xl md:mx-0 md:max-w-none md:text-7xl"
          >
            {brand.headline}
          </GradientText>

          <p className="mx-auto mt-5 max-w-[21rem] text-sm leading-7 text-slate-300 sm:max-w-2xl sm:text-base md:mx-0 md:text-lg md:leading-8">
            {brand.description}
          </p>

          <div className="mx-auto mt-7 flex max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:mx-0 md:justify-start">
            <a
              href="#download"
              className="hero-glow-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black text-slate-950 transition duration-300 hover:-translate-y-0.5"
            >
              {ui.downloadApp}
              <ArrowRight size={18} />
            </a>

            <a
              href="https://www.tactlink.com/contact"
              target="_blank"
              rel="noreferrer"
              className="button-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-4 text-sm font-black text-white transition hover:bg-white/12"
            >
              {dict.primaryLinks[1].label}
            </a>
          </div>

          <div className="mx-auto mt-6 grid max-w-[22rem] grid-cols-1 gap-2 sm:max-w-none sm:grid-cols-3 md:mx-0">
            {dict.ui.heroChecklist.map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-slate-300 backdrop-blur-xl sm:justify-start"
                >
                  <CheckCircle2 className="shrink-0 text-yellow-300" size={17} />
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-[32rem] items-center justify-center md:flex"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/16 blur-3xl" />
          <div className="pointer-events-none absolute bottom-5 right-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="float-animation relative w-full">
            <div className="absolute inset-x-10 bottom-0 h-20 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative mx-auto h-[28rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-cyan-300/5 to-violet-500/10" />

              <Image
                src="/images/tactlink-app-mockup.png"
                alt="TactLink app preview"
                width={1100}
                height={880}
                priority
                className="absolute bottom-10 left-1/2 z-10 w-[82%] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_24px_60px_rgba(34,211,238,0.18)]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 z-30 rounded-[1.2rem] border border-white/10 bg-slate-950/72 p-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {dict.ui.heroFeatures.map(({ title, desc }) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-white/[0.055] px-2 py-2.5"
                    >
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-yellow-200">
                        {title}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold text-slate-400">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -right-1 top-6 hidden rounded-2xl border border-yellow-300/20 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-yellow-950/20 backdrop-blur-xl lg:block">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
                Smart Directory
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Digital identity ready
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-8 hidden max-w-6xl md:block">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.slice(0, 4).map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-yellow-300/20 hover:bg-white/[0.07]"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/20">
                  <Icon size={20} />
                </div>
                <p className="text-sm font-bold text-white">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}