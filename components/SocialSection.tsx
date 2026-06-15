"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/content";

export default function SocialSection() {
  return (
    <section id="socials" className="relative px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 max-w-4xl rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Official Social Channels
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Follow TactLink across global communities.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-300 md:text-right">
            Stay updated with product stories, events, community highlights,
            and regional TactLink activities.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={`${item.label}-${item.region}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`group relative overflow-hidden rounded-[1.7rem] border p-5 transition duration-300 hover:-translate-y-1 ${
                  item.featured
                    ? "border-yellow-300/25 bg-yellow-300/[0.075] hover:bg-yellow-300/[0.11]"
                    : "border-white/10 bg-white/[0.055] hover:border-yellow-300/25 hover:bg-white/[0.08]"
                }`}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-300/10 blur-2xl transition group-hover:bg-yellow-300/20" />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.07] text-yellow-100 ring-1 ring-white/10">
                    <Icon size={23} />
                  </div>

                  <ArrowUpRight
                    className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yellow-200"
                    size={20}
                  />
                </div>

                <div className="relative mt-6">
                  <p className="text-lg font-black text-white">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-yellow-100/80">
                    {item.region}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}