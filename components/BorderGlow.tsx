"use client";

import { type ReactNode, type HTMLAttributes } from "react";

interface BorderGlowProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
  loopGlow?: boolean;
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = "",
  backgroundColor = "transparent",
  borderRadius = 16,
  edgeSensitivity,
  glowColor,
  glowRadius,
  glowIntensity,
  coneSpread,
  animated,
  colors,
  fillOpacity,
  loopGlow,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`relative border border-white/5 bg-slate-900/40 transition-all duration-300 hover:border-white/20 hover:bg-slate-800/50 shadow-sm hover:shadow-md ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        ...props.style,
      }}
    >
      <div className="relative z-[1] flex h-full w-full flex-col overflow-visible">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
