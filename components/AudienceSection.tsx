"use client";

import { motion } from "framer-motion";
import { audiences } from "@/lib/content";

export default function AudienceSection() {
  return (
    <section id="audience" className="relative px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
            For Who
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
            One platform for every connection-driven ecosystem.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            TactLink is built for people and organizations that need faster
            connection, cleaner contact management, and stronger community engagement.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-300/25 hover:bg-white/[0.08]"
              >
                <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/20 transition group-hover:scale-105 group-hover:bg-yellow-300/18">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-black text-white">
                  {audience.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {audience.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}