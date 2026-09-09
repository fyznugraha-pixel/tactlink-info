"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
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
    <p ref={ref} className="text-2xl font-black text-white sm:text-3xl md:text-4xl font-headline">
      {displayValue}
      {parsed.suffix}
    </p>
  );
}

export default function TrustSection() {
  const isDesktop = useIsDesktop();
  const { dict } = useLanguage();
  const { stats } = dict;

  const content = (
    <div data-theme="dark" className="relative overflow-hidden rounded-xl bg-primary px-5 py-7 shadow-md sm:p-8 md:p-16">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-center md:gap-12">
        <div className="relative text-center md:text-left">
          <p className="inline-block px-3.5 py-1 rounded bg-white/10 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-secondary">
            {dict.ui.trustBadge}
          </p>

          <h2 className="mt-4 text-2xl font-bold text-white sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            {dict.ui.trustTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-100 sm:mt-6 sm:text-base md:mx-0 font-normal">
            {dict.ui.trustDesc}
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const statContent = (
              <>
                <CountUpStat
                  value={stat.value}
                  delay={isDesktop ? index * 120 : index * 70}
                  duration={isDesktop ? 1500 : 900}
                />
                <p className="mt-1 text-[11px] font-medium leading-tight text-blue-100/90 sm:mt-2 sm:text-xs">
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
                <div className="relative h-full rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 px-3 py-3.5 sm:p-5 md:p-6 text-center shadow-sm backdrop-blur-md backdrop-saturate-150 overflow-hidden group">
                  {/* Volumetric glow and mirror edge (iOS 26 Style) */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[inset_0_0_8px_rgba(255,255,255,0.08)] pointer-events-none" />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[inset_0_3px_6px_-2px_rgba(255,255,255,0.15)] pointer-events-none" />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[inset_0_8px_32px_-6px_rgba(255,255,255,0.05)] pointer-events-none" />
                  
                  <div className="relative z-10">{statContent}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 py-8 md:py-16">
      <div className="mx-auto w-full max-w-[1440px]">
        {content}
      </div>
    </section>
  );
}
