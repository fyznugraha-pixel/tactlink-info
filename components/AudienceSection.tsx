"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SpotlightCard from "@/components/SpotlightCard";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function AudienceSection() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { audiences, ui } = dict;

  return (
    <section id="audience" className="relative px-4 py-10 md:py-20">
      <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-10 hidden h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl md:block" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-200 md:text-sm">
            {ui.whoUses}
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-5xl">
            {ui.audienceTitle}
          </h2>

          <p className="mx-auto mt-4 hidden max-w-2xl leading-7 text-slate-300 sm:block">
            {ui.audienceDesc}
          </p>
        </div>

        <div className="no-scrollbar mt-7 flex snap-x gap-3 overflow-x-auto pb-2 md:mt-10 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            const content = (
              <>
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/20 transition md:mb-5 md:h-14 md:w-14 md:group-hover:scale-105 md:group-hover:bg-yellow-300/18">
                  <Icon size={24} />
                </div>

                <h3 className="text-base font-black text-white md:text-lg">
                  {audience.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-400 md:mt-3 md:text-sm md:leading-6">
                  {audience.description}
                </p>
              </>
            );

            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: isDesktop ? 0.45 : 0.24,
                  delay: isDesktop ? index * 0.05 : 0,
                }}
                className="min-w-[72%] snap-start sm:min-w-[46%] md:min-w-0"
              >
                {isDesktop ? (
                  <SpotlightCard
                    spotlightColor="rgba(234, 179, 8, 0.24)"
                    className="group h-full rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-300/25 hover:bg-white/[0.08]"
                  >
                    {content}
                  </SpotlightCard>
                ) : (
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-4 text-center backdrop-blur-xl">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}