"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import useIsDesktop from "@/hooks/useIsDesktop";
import useSwipeReset from "@/hooks/useSwipeReset";

export default function QuickLinks() {
  const isDesktop = useIsDesktop();
  const swipeRef = useSwipeReset(5000);
  const { dict } = useLanguage();
  const { ui, primaryLinks } = dict;

  return (
    <section id="links" className="relative px-4 py-10 md:py-20 bg-white">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="inline-block px-1 py-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
            {ui.quickLinks}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
            {ui.quickLinksTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 max-w-2xl">
            {ui.quickLinksDesc}
          </p>
        </div>

        <div ref={swipeRef} className="flex md:grid gap-4 md:grid-cols-2 md:gap-6 overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-6 scroll-pl-6 scroll-pr-6 md:mx-0 md:px-0">
          {primaryLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex-none w-[76vw] max-w-[340px] sm:w-[60vw] md:w-auto snap-start md:snap-none group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-slate-50 p-6 md:p-10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm text-black">
                    <Icon size={24} />
                  </div>

                  {item.badge && (
                    <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-slate-600">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="mt-12 sm:mt-24 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-blue-950 transition-colors">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm md:text-base font-medium leading-relaxed text-slate-500 max-w-[200px] md:max-w-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-full bg-black/5 text-black transition-colors group-hover:bg-blue-950 group-hover:text-white">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-6">
          <div className="rounded-[2rem] bg-slate-50 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-bold text-black mb-1">
                  {ui.downloadAppTitle}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {ui.downloadAppDesc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {dict.appDownloadLinks.map((item) => {
                  const Icon = item.icon;
                  const isAppStore = item.label.toLowerCase().includes("app");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-white shadow-sm px-6 py-3.5 transition hover:scale-[1.02] active:scale-[0.98] md:flex-none"
                    >
                      <Icon size={isAppStore ? 22 : 24} />
                      <div className="text-left">
                        <span className="block whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          {item.subLabel}
                        </span>
                        <span className="block whitespace-nowrap text-sm font-bold text-black">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
