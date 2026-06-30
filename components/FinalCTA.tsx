"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BorderGlow from "@/components/BorderGlow";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function FinalCTA() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { appDownloadLinks, ui } = dict;

  return (
    <section className="relative px-4 py-10 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-5xl rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 hidden h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl md:block" />

      <BorderGlow
        edgeSensitivity={30}
        glowColor="52 95 62"
        backgroundColor="rgba(2, 6, 23, 0.9)"
        borderRadius={isDesktop ? 34 : 28}
        glowRadius={isDesktop ? 38 : 24}
        glowIntensity={isDesktop ? 1.08 : 0.65}
        coneSpread={24}
        animated={isDesktop}
        colors={["#fde047", "#22d3ee", "#60a5fa"]}
        fillOpacity={isDesktop ? 0.18 : 0.08}
        className="relative mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-yellow-300/16 via-cyan-400/12 to-violet-600/20 p-5 text-center shadow-2xl shadow-cyan-950/30 md:rounded-[2.2rem] md:p-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-100 md:text-sm">
              {ui.readyToStart}
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:mt-4 md:text-6xl">
              {ui.ctaTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-cyan-50/80 sm:text-base">
              {ui.readyDesc}
            </p>

            <div className="mx-auto mt-7 grid max-w-xl gap-3 sm:grid-cols-2 md:mt-8">
              {appDownloadLinks.map((item) => {
                const Icon = item.icon;
                const isAppStore = item.label.toLowerCase().includes("app");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-left transition active:scale-[0.99] hover:border-yellow-300/30 hover:bg-slate-950/85 md:hover:-translate-y-0.5"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-yellow-300 text-slate-950 shadow-[0_0_24px_rgba(250,204,21,0.18)] ring-1 ring-yellow-100/40 transition duration-300 group-hover:bg-yellow-200 group-hover:shadow-[0_0_32px_rgba(250,204,21,0.26)]">
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
                      size={17}
                      className="shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yellow-200"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:info@tactlink.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white transition active:scale-[0.99] hover:border-yellow-300/25 hover:bg-white/15 hover:text-yellow-100"
              >
                <Mail size={18} />
                {ui.emailTactlink}
              </a>

              <a
                href="https://www.tactlink.com/contact"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-300/25 bg-yellow-300/10 px-6 py-4 text-sm font-black text-yellow-100 transition active:scale-[0.99] hover:bg-yellow-300 hover:text-slate-950"
              >
                {ui.becomePartner}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </BorderGlow>
    </section>
  );
}