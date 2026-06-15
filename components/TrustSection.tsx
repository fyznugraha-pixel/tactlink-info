"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/content";
import BorderGlow from "@/components/BorderGlow";
import SpotlightCard from "@/components/SpotlightCard";
import useIsDesktop from "@/hooks/useIsDesktop";

function parseStatValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);

  if (!match) {
    return {
      number: 0,
      suffix: value,
      decimals: 0,
    };
  }

  const numberText = match[1];
  const suffix = match[2] ?? "";
  const decimals = numberText.includes(".")
    ? numberText.split(".")[1]?.length ?? 0
    : 0;

  return {
    number: Number(numberText),
    suffix,
    decimals,
  };
}

function CountUpStat({
  value,
  delay = 0,
  duration = 1300,
}: {
  value: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  const parsed = useMemo(() => parseStatValue(value), [value]);

  useEffect(() => {
    if (!isInView) return;

    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startTime = performance.now();
    const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

    timeoutId = setTimeout(() => {
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = easeOutCubic(progress);

        setCount(parsed.number * eased);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setCount(parsed.number);
        }
      };

      frameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [isInView, parsed.number, delay, duration]);

  const displayValue =
    parsed.decimals > 0
      ? count.toFixed(parsed.decimals)
      : Math.round(count).toLocaleString("en-US");

  return (
    <p ref={ref} className="text-3xl font-black text-white md:text-4xl">
      {displayValue}
      {parsed.suffix}
    </p>
  );
}

export default function TrustSection() {
  const isDesktop = useIsDesktop();

  const content = (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl md:rounded-[2rem] md:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-8">
        <div className="relative text-center md:text-left">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-200 md:text-sm">
            Global Movement
          </p>

          <h2 className="mt-3 text-2xl font-black text-white md:text-4xl">
            Designed for modern, paperless networking.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300 md:mx-0 md:text-base">
            From professional communities to cross-border events, TactLink helps
            organizations turn static lists into active digital networks.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-3">
          {stats.map((stat, index) => {
            const statContent = (
              <>
                <CountUpStat
                  value={stat.value}
                  delay={isDesktop ? index * 120 : index * 70}
                  duration={isDesktop ? 1500 : 900}
                />

                <p className="mt-1 line-clamp-2 text-[11px] font-semibold leading-4 text-slate-400 transition md:mt-2 md:text-xs md:leading-5 md:group-hover:text-yellow-100/75">
                  {stat.label}
                </p>
              </>
            );

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: isDesktop ? 0.45 : 0.24,
                  delay: isDesktop ? index * 0.06 : 0,
                }}
                className="min-w-0"
              >
                {isDesktop ? (
                  <SpotlightCard
                    spotlightColor="rgba(234, 179, 8, 0.23)"
                    className="group h-full rounded-3xl border border-white/10 bg-slate-950/45 p-4 text-center transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/25 hover:bg-slate-950/60"
                  >
                    {statContent}
                  </SpotlightCard>
                ) : (
                  <div className="h-full rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-center">
                    {statContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 py-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <BorderGlow
          edgeSensitivity={isDesktop ? 30 : 42}
          glowColor="52 95 62"
          backgroundColor="rgba(2, 6, 23, 0.9)"
          borderRadius={isDesktop ? 32 : 26}
          glowRadius={isDesktop ? 36 : 22}
          glowIntensity={isDesktop ? 1.05 : 0.58}
          coneSpread={isDesktop ? 24 : 20}
          animated
          loopGlow
          colors={["#fde047", "#22d3ee", "#60a5fa"]}
          fillOpacity={isDesktop ? 0.16 : 0.08}
        >
          {content}
        </BorderGlow>
      </div>
    </section>
  );
}