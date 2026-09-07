import { useEffect, useRef } from "react";

export default function useSwipeReset<T extends HTMLElement = HTMLDivElement>(
  resetDelayMs = 5000
) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timer: ReturnType<typeof setTimeout> | null = null;
    let isInteracting = false;

    const clearResetTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    const startResetTimer = () => {
      clearResetTimer();
      if (isInteracting) return;
      if (container.scrollLeft <= 5) return;

      timer = setTimeout(() => {
        if (!isInteracting && container.scrollLeft > 5) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, resetDelayMs);
    };

    const handleInteractionStart = () => {
      isInteracting = true;
      clearResetTimer();
    };

    const handleInteractionEnd = () => {
      isInteracting = false;
      startResetTimer();
    };

    const handleScroll = () => {
      startResetTimer();
    };

    container.addEventListener("touchstart", handleInteractionStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleInteractionEnd, {
      passive: true,
    });
    container.addEventListener("touchcancel", handleInteractionEnd, {
      passive: true,
    });
    container.addEventListener("pointerdown", handleInteractionStart, {
      passive: true,
    });
    container.addEventListener("pointerup", handleInteractionEnd, {
      passive: true,
    });
    container.addEventListener("pointercancel", handleInteractionEnd, {
      passive: true,
    });
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearResetTimer();
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("touchend", handleInteractionEnd);
      container.removeEventListener("touchcancel", handleInteractionEnd);
      container.removeEventListener("pointerdown", handleInteractionStart);
      container.removeEventListener("pointerup", handleInteractionEnd);
      container.removeEventListener("pointercancel", handleInteractionEnd);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [resetDelayMs]);

  return containerRef;
}
