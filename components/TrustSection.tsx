"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export default function TrustSection() {
  return (
    <section className="px-4 py-14 md:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl md:p-8">
        <div className="relative grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Global Movement
            </p>

            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Designed for modern, paperless networking.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              From professional communities to cross-border events, TactLink helps
              organizations turn static lists into active digital networks.
            </p>
          </div>

          <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-slate-950/45 p-4 text-center transition hover:border-yellow-300/25 hover:bg-slate-950/60"
              >
                <p className="text-3xl font-black text-white md:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}