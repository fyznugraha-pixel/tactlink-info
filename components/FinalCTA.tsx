"use client";

import { ArrowRight, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-yellow-300/20 bg-gradient-to-br from-yellow-300/16 via-cyan-400/12 to-violet-600/20 p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-12">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-100">
            Ready to Connect Smarter?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Turn every meeting into a meaningful network.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-cyan-50/80">
            Download TactLink, create your digital identity, and help your
            community grow beyond static contact lists.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#links"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-yellow-200"
            >
              Open Quick Links
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:info@tactlink.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:bg-white/15"
            >
              <Mail size={18} />
              Email TactLink
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}