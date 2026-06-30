"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeatureSection() {
  const { dict } = useLanguage();
  const { features, ui } = dict;
  return (
    <section id="features" className="relative px-4 py-10 md:py-20">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-3xl text-center md:mb-10 md:text-left">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-200 md:text-sm">
            {ui.coreFeatures}
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-5xl">
            {ui.featuresTitle}
          </h2>

          <p className="mt-4 hidden max-w-2xl leading-7 text-slate-300 sm:block">
            {ui.featuresDesc}
          </p>
        </div>

        {/* Mobile: horizontal scroll with balanced left-right spacing */}
        <div className="md:hidden">
          <div className="no-scrollbar flex gap-3 overflow-x-auto px-1 pb-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.22, delay: 0 }}
                  className="glass-card group relative w-[78%] shrink-0 overflow-hidden rounded-[1.5rem] p-4"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-300/10 blur-2xl" />

                  <div className="relative mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/20">
                    <Icon size={23} />
                  </div>

                  <div className="relative">
                    <h3 className="text-base font-black text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {feature.description}
                    </p>

                    <div className="mt-4 grid gap-2">
                      {feature.points.slice(0, 1).map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-sm font-semibold text-slate-300"
                        >
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-yellow-300/12 text-yellow-200">
                            <Check size={13} />
                          </span>
                          <span className="line-clamp-1">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop / Tablet Grid */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-card group relative overflow-hidden rounded-[1.8rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/25"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-300/10 blur-2xl transition group-hover:bg-yellow-300/20" />

                <div className="relative mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/20 transition group-hover:scale-105 group-hover:bg-yellow-300/18">
                  <Icon size={24} />
                </div>

                <div className="relative">
                  <h3 className="text-lg font-black text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {feature.description}
                  </p>

                  <div className="mt-5 grid gap-2">
                    {feature.points.slice(0, 2).map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-300"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-yellow-300/12 text-yellow-200">
                          <Check size={13} />
                        </span>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}