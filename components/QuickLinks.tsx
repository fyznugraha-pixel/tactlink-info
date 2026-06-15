"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { appDownloadLinks, primaryLinks, secondaryLinks } from "@/lib/content";

export default function QuickLinks() {
  return (
    <section id="links" className="relative px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 max-w-4xl rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
            Quick Access
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
            Everything TactLink, one tap away.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            A premium social gateway for downloads, partnerships, product information,
            and official TactLink channels.
          </p>
        </div>

        <motion.div
          id="download"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-5 overflow-hidden rounded-[2rem] border border-yellow-300/20 bg-gradient-to-br from-yellow-300/15 via-cyan-300/10 to-white/5 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl md:p-6"
        >
          <div className="relative grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-yellow-300/15 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
                Download TactLink App
              </p>

              <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                Start building smarter connections today.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Create your digital profile, share your smart directory, and connect faster
                through the official TactLink app.
              </p>
            </div>

            <div className="relative grid gap-3 sm:grid-cols-2 md:min-w-[360px]">
              {appDownloadLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-slate-950/75"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/15">
                        <Icon size={22} />
                      </span>

                      <span>
                        <span className="block text-xs font-semibold text-slate-400">
                          {item.subLabel}
                        </span>
                        <span className="block text-sm font-black text-white">
                          {item.label}
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yellow-200"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {primaryLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="quick-link group relative rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/25 hover:bg-white/[0.09]"
              >
                <div className="absolute right-4 top-4 rounded-full border border-yellow-300/15 bg-yellow-300/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-yellow-100">
                  {item.badge ?? "Link"}
                </div>

                <div className="flex items-start gap-4 pr-12">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-yellow-300/12 text-yellow-200 ring-1 ring-yellow-200/20 transition duration-300 group-hover:scale-105 group-hover:bg-yellow-300/18">
                    <Icon size={25} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-black text-white md:text-lg">
                      {item.label}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Open Link
                  </span>

                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-950 transition duration-300 group-hover:bg-yellow-300">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {secondaryLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-yellow-300/30 hover:bg-yellow-300/10 hover:text-yellow-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}