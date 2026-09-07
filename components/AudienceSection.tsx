"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function AudienceSection() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { audiences, ui } = dict;

  return (
    <section id="audience" data-theme="dark" className="relative px-4 py-10 md:py-20 bg-primary">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none"><div className="absolute inset-0 bg-[linear-gradient(to_right,#efc94b15_1px,transparent_1px),linear-gradient(to_bottom,#efc94b15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" /><div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/15 blur-[120px]" /><div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[100px]" /></div><div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest text-primary bg-secondary">
            {ui.whoUses}
          </p>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl font-headline">
            {ui.audienceTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 font-medium">
            {ui.audienceDesc}
          </p>
        </div>

        <div className="no-scrollbar mt-12 flex snap-x gap-4 overflow-x-auto overflow-y-hidden pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            const content = (
              <>
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-xl bg-secondary text-primary shadow-sm transition group-hover:scale-105 group-hover:-translate-y-1">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white font-headline">
                  {audience.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70 font-medium">
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
                className="min-w-[80%] snap-start sm:min-w-[46%] md:min-w-0"
              >
                <div className="group h-full rounded-xl bg-white/5 border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                  {content}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
