"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BorderGlow from "@/components/BorderGlow";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function QuickLinks() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { appDownloadLinks, primaryLinks, secondaryLinks, ui } = dict;

  return (
    <section id="links" className="relative px-4 py-10 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 max-w-4xl rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 hidden h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl md:block" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 text-center md:mb-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-200 md:text-sm">
            {ui.quickLinks}
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-black tracking-tight text-white md:text-5xl">
            {ui.quickLinksTitle}
          </h2>

          <p className="mx-auto mt-3 hidden max-w-2xl leading-7 text-slate-300 sm:block">
            {ui.quickLinksDesc}
          </p>
        </div>

        <motion.div
          id="download"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: isDesktop ? 0.45 : 0.24 }}
          className="mb-4 scroll-mt-28 md:mb-5"
        >
          <BorderGlow
            edgeSensitivity={28}
            glowColor="52 95 62"
            backgroundColor="rgba(2, 6, 23, 0.86)"
            borderRadius={28}
            glowRadius={isDesktop ? 34 : 22}
            glowIntensity={isDesktop ? 1.15 : 0.65}
            coneSpread={24}
            animated={isDesktop}
            colors={["#fde047", "#22d3ee", "#60a5fa"]}
            fillOpacity={isDesktop ? 0.22 : 0.08}
          >
            <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-yellow-300/15 via-cyan-300/10 to-white/5 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl md:rounded-[2rem] md:p-6">
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-yellow-300/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <div className="relative text-center md:text-left">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200 md:text-sm">
                    {ui.downloadAppTitle}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white md:text-3xl">
                    {ui.downloadAppHeadline}
                  </h3>

                  <p className="mx-auto mt-2 hidden max-w-2xl text-sm leading-6 text-slate-300 sm:block md:mx-0">
                    {ui.downloadAppDesc}
                  </p>
                </div>

                <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 md:min-w-[360px]">
                  {appDownloadLinks.map((item) => {
                    const Icon = item.icon;
                    const isAppStore = item.label.toLowerCase().includes("app");

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 text-left transition active:scale-[0.99] hover:border-yellow-300/30 hover:bg-slate-950/80 md:px-4 md:py-4 md:hover:-translate-y-0.5"
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow-300 text-slate-950 shadow-[0_0_24px_rgba(250,204,21,0.18)] ring-1 ring-yellow-100/40 transition duration-300 group-hover:bg-yellow-200 group-hover:shadow-[0_0_32px_rgba(250,204,21,0.26)] md:h-11 md:w-11">
                            <Icon
                              size={isAppStore ? 20 : 22}
                              className={isAppStore ? "translate-y-[-1px]" : ""}
                            />
                          </span>

                          <span className="min-w-0">
                            <span className="block text-xs font-semibold text-slate-400">
                              {item.subLabel}
                            </span>

                            <span className="block truncate text-sm font-black text-white">
                              {item.label}
                            </span>
                          </span>
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yellow-200"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          {primaryLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: isDesktop ? 0.45 : 0.24,
                  delay: isDesktop ? index * 0.05 : 0,
                }}
                className="quick-link group relative rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4 transition duration-300 active:scale-[0.99] hover:border-yellow-300/25 hover:bg-white/[0.09] md:rounded-[1.8rem] md:p-5 md:hover:-translate-y-1"
              >
                <div className="absolute right-4 top-4 rounded-full border border-yellow-300/15 bg-yellow-300/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-yellow-100 md:text-[10px]">
                  {item.badge ?? "Link"}
                </div>

                <div className="flex items-start gap-3 pr-16 md:gap-4 md:pr-12">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/20 transition duration-300 group-hover:scale-105 group-hover:bg-yellow-300/18 md:h-14 md:w-14">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-black text-white md:text-lg">
                      {item.label}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400 md:mt-2 md:text-sm md:leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 hidden items-center justify-between border-t border-white/10 pt-4 md:flex">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    {ui.openLink}
                  </span>

                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-950 transition duration-300 group-hover:bg-yellow-300">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1 md:mt-6 md:flex-wrap md:justify-center md:gap-3 md:overflow-visible">
          {secondaryLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="min-w-max rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-yellow-300/30 hover:bg-yellow-300/10 hover:text-yellow-100 md:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}