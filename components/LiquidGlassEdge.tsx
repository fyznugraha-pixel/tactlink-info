"use client";

import React, { useEffect, useRef, useId, useState } from 'react';
import useIsDesktop from '@/hooks/useIsDesktop';

interface LiquidGlassEdgeProps {
  children?: React.ReactNode;
  className?: string;
  radius?: number;
  edgeInset?: number;
  distortionScale?: number;
  baseBackdropFilter?: string;
  baseBackground?: string;
}

function roundedRectPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  r = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function buildEdgeDisplacementMap(w: number, h: number, radius: number, edgeInset: number) {
  edgeInset = Math.max(1, Math.min(edgeInset, Math.min(w, h) * 0.35)); // jangan sampai makan seluruh sisi terpendek
  const cnv = document.createElement('canvas');
  cnv.width = w; cnv.height = h;
  const ctx = cnv.getContext('2d');
  if (!ctx) return '';

  const gx = ctx.createLinearGradient(0, 0, w, 0);
  gx.addColorStop(0, '#000'); gx.addColorStop(1, '#fff');
  ctx.fillStyle = gx; ctx.fillRect(0, 0, w, h);
  const xData = ctx.getImageData(0, 0, w, h);

  const gy = ctx.createLinearGradient(0, 0, 0, h);
  gy.addColorStop(0, '#000'); gy.addColorStop(1, '#fff');
  ctx.fillStyle = gy; ctx.fillRect(0, 0, w, h);
  const yData = ctx.getImageData(0, 0, w, h);

  const out = ctx.createImageData(w, h);
  for (let i = 0; i < out.data.length; i += 4) {
    out.data[i]   = xData.data[i];
    out.data[i+1] = yData.data[i];
    out.data[i+2] = 128; // Blue channel is 128 (neutral)
    out.data[i+3] = 255; // Alpha
  }
  ctx.putImageData(out, 0, 0);

  ctx.filter = `blur(${edgeInset}px)`;
  ctx.fillStyle = 'rgb(128,128,128)';
  roundedRectPath(ctx, edgeInset, edgeInset, w - edgeInset * 2, h - edgeInset * 2, Math.max(radius - edgeInset, 0));
  ctx.fill();
  ctx.filter = 'none';

  return cnv.toDataURL();
}

export default function LiquidGlassEdge({
  children,
  className = "",
  radius = 16,
  edgeInset = 16,
  distortionScale = 25,
  baseBackdropFilter = "none",
  baseBackground = "transparent",
}: LiquidGlassEdgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapUrl, setMapUrl] = useState<string>('');
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const isDesktop = useIsDesktop();
  
  const id = useId().replace(/:/g, "");
  const filterId = `edge-distortion-${id}`;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          const url = buildEdgeDisplacementMap(Math.round(width), Math.round(height), radius, edgeInset);
          setMapUrl(url);
          setDimensions({ w: width, h: height });
        }
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [radius, edgeInset]);

  return (
    <div ref={containerRef} className={className || "relative"} style={{ borderRadius: radius }}>
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id={filterId} x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          {mapUrl && (
            <feImage 
              href={mapUrl} 
              result="map" 
              width={dimensions.w} 
              height={dimensions.h} 
              preserveAspectRatio="none" 
            />
          )}
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="map" 
            scale={distortionScale} 
            xChannelSelector="R" 
            yChannelSelector="G" 
            result="displaced"
          />
        </filter>
      </svg>
      
      {/* We apply the filter to the container itself to distort the background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-300"
        style={{
          borderRadius: radius,
          background: baseBackground,
          backdropFilter: mapUrl && baseBackdropFilter !== "none" && isDesktop ? `${baseBackdropFilter} url(#${filterId})` : baseBackdropFilter,
          WebkitBackdropFilter: mapUrl && baseBackdropFilter !== "none" && isDesktop ? `${baseBackdropFilter} url(#${filterId})` : baseBackdropFilter,
        }}
      />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
