"use client";


import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import useIsDesktop from "@/hooks/useIsDesktop";


export default function SocialSection() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { socialLinks, ui } = dict;

  return (
    <section id="socials" className="relative px-4 py-10 md:py-20 bg-white">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-4 text-center md:mb-12 md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-3xl">
            <p className="inline-block px-1 py-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {ui.connectRegion}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
              {ui.socialTitle}
            </h2>
          </div>

          <p className="hidden max-w-md leading-relaxed text-slate-500 font-medium sm:block md:text-right">
            {ui.socialDesc}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:grid-cols-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={`${item.label}-${item.region}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-5 sm:p-6 transition duration-300 shadow-md shadow-slate-200/80 border border-slate-200/70 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
                >
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black shadow-sm transition duration-300 group-hover:scale-105 group-hover:text-blue-950">
                      <Icon size={24} />
                    </div>

                    <div className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-slate-500 transition group-hover:bg-blue-950 group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className="relative mt-8">
                    <p className="text-xl font-bold text-black transition group-hover:text-blue-950">
                      {item.label}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-slate-500">
                      {item.region}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
      </div>
    </section>
  );
}
