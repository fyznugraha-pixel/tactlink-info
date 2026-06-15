"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { features } from "@/lib/content";

export default function FeatureSection() {
  return (
    <section id="features" className="relative px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
            What TactLink Offers
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
            Built for people who network, manage communities, and run events.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            From personal digital identity to association-scale networking,
            TactLink makes connections easier to create, manage, and grow.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
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
                    {feature.points.map((point) => (
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