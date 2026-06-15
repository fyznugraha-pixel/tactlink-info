"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { benefits, brand } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-4 pb-14 pt-24 sm:pt-28 md:pt-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-14 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl md:h-[34rem] md:w-[34rem]" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-yellow-300/12 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <div className="mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-xs font-black text-yellow-100 shadow-lg shadow-yellow-950/10 backdrop-blur-xl sm:text-sm md:mx-0">
            <Sparkles size={16} />
            <span className="truncate">{brand.tagline}</span>
          </div>

          <h1 className="text-gradient text-5xl font-black leading-[0.96] tracking-tight sm:text-6xl md:text-7xl">
            {brand.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:mx-0 md:text-lg">
            {brand.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#download"
              className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black text-slate-950 transition"
            >
              Download App
              <ArrowRight size={18} />
            </a>

            <a
              href="https://www.tactlink.com/contact"
              target="_blank"
              rel="noreferrer"
              className="button-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-4 text-sm font-black text-white transition hover:bg-white/12"
            >
              Become a Partner
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {["Go paperless", "Exchange faster", "Grow communities"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3 text-sm font-semibold text-slate-300 sm:justify-start"
              >
                <CheckCircle2 className="shrink-0 text-yellow-300" size={17} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-3xl md:h-[30rem] md:w-[30rem]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/16 blur-3xl md:h-[28rem] md:w-[28rem]" />
          <div className="pointer-events-none absolute bottom-5 right-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="float-animation relative w-full">
            <div className="absolute inset-x-10 bottom-0 h-20 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative mx-auto h-[24rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:h-[26rem] md:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-cyan-300/5 to-violet-500/10" />
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-yellow-300/12 blur-3xl" />
              <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-cyan-400/12 blur-3xl" />

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
                  {[
                    ["QR", "Instant share"],
                    ["Profile", "Digital identity"],
                    ["Contacts", "Smart save"],
                  ].map(([title, desc]) => (
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

            <div className="absolute -left-1 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-cyan-300/20 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl lg:block">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                QR Networking
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Connect in seconds
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
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