"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeatureSection() {
  const { dict } = useLanguage();
  const { features, ui } = dict;
  return (
    <section id="features" className="relative px-4 py-10 md:py-20 bg-neutral">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-8 max-w-3xl md:mb-16 md:text-center mx-auto">
          <p className="inline-block px-1 py-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
            {ui.coreFeatures}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl font-headline">
            {ui.featuresTitle}
          </h2>

          <p className="mt-4 hidden max-w-2xl mx-auto leading-relaxed text-slate-500 font-medium sm:block">
            {ui.featuresDesc}
          </p>
        </div>

        {/* Mobile: horizontal scroll with balanced left-right spacing */}
        <div className="md:hidden">
          <div className="no-scrollbar flex gap-4 overflow-x-auto px-1 pb-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.22, delay: 0 }}
                  className="group relative w-[85%] shrink-0 overflow-hidden rounded-xl bg-white p-8 border-b-4 border-b-transparent hover:border-b-secondary shadow-sm"
                >
                  <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary shadow-sm transition duration-300 group-hover:-translate-y-1">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <div className="relative">
                    <h3 className="text-xl font-bold text-primary font-headline">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500 font-medium">
                      {feature.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {feature.points.slice(0, 1).map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2.5 text-sm font-semibold text-slate-600"
                        >
                          <Check size={14} className="text-primary" />
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
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-xl bg-white p-8 border-b-4 border-b-transparent hover:border-b-secondary transition duration-300 hover:shadow-md"
              >
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral text-primary shadow-sm transition duration-300 bg-secondary text-primary group-hover:-translate-y-1">
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-primary font-headline">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 font-medium">
                    {feature.description}
                  </p>

                  <div className="mt-8 grid gap-3">
                    {feature.points.slice(0, 2).map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-600"
                      >
                        <Check size={16} className="text-secondary shrink-0 mt-0.5" />
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
