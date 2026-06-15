"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/content";
import MagicBento from "@/components/MagicBento";

export default function SocialSection() {
  return (
    <section id="socials" className="relative px-4 py-10 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 max-w-4xl rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 hidden h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-24 top-1/2 hidden h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl md:block" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-200 md:text-sm">
              Official Social Channels
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-5xl">
              Follow TactLink across global communities.
            </h2>
          </div>

          <p className="hidden max-w-md leading-7 text-slate-300 sm:block md:text-right">
            Stay updated with product stories, events, community highlights,
            and regional TactLink activities.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <MagicBento
            cards={socialLinks.map((item) => ({
              title: item.label,
              description: item.region,
              label: item.featured ? "Official" : "Regional",
              href: item.href,
              icon: item.icon,
              color: item.featured
                ? "linear-gradient(135deg, rgba(234,179,8,0.11), rgba(34,211,238,0.07), rgba(255,255,255,0.035))"
                : "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.035))",
            }))}
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="234, 179, 8"
            disableAnimations={false}
          />
        </motion.div>
      </div>
    </section>
  );
}