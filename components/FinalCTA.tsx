"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function FinalCTA() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { appDownloadLinks, ui } = dict;

  return (
    <section className="relative px-4 py-10 md:py-20 bg-primary">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none"><div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]" /><div className="absolute top-[10%] left-[20%] w-[30%] h-[40%] rounded-full bg-secondary/15 blur-[100px]" /><div className="absolute bottom-[0%] right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/15 blur-[120px]" /></div><div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-8 text-center md:p-16">
          <div className="relative">
            <p className="inline-block px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest text-primary bg-secondary">
              {ui.readyToStart}
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white md:mt-8 md:text-5xl font-headline">
              {ui.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 font-medium">
              {ui.readyDesc}
            </p>

            <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2 md:mt-12">
              {appDownloadLinks.map((item) => {
                const Icon = item.icon;
                const isAppStore = item.label.toLowerCase().includes("app");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between gap-4 rounded-xl bg-white/10 border border-white/10 px-6 py-5 text-left transition-all hover:-translate-y-1 hover:bg-white/20"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition duration-300">
                        <Icon size={isAppStore ? 22 : 24} />
                      </span>

                      <span className="min-w-0">
                        <span className="block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-white/70">
                          {item.subLabel}
                        </span>
                        <span className="block whitespace-nowrap text-sm text-sm font-bold text-white transition-colors group-hover:text-secondary">
                          {item.label}
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/50 transition group-hover:text-secondary"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:info@tactlink.com"
                className="inline-flex items-center justify-center gap-2 rounded bg-secondary shadow-[0_4px_14px_0_rgba(239,201,75,0.39)] hover:shadow-[0_6px_20px_rgba(239,201,75,0.23)] px-8 py-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5"
              >
                <Mail size={18} strokeWidth={1.5} />
                {ui.emailTactlink}
              </a>

              <a
                href="https://www.tactlink.com/contact"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                {ui.becomePartner}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
