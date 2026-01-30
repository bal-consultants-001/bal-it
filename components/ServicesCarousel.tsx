"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const SCROLL_DELAY = 4000;
  const PAUSE_AFTER_INTERACTION = 60000;

  const handleUserInteraction = () => {
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, PAUSE_AFTER_INTERACTION);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollNext = () => {
      if (isPaused) return;

      const cardWidth = container.firstElementChild?.clientWidth || 0;
      container.scrollBy({ left: cardWidth + 24, behavior: "smooth" });

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 500);
      }
    };

    autoScrollInterval.current = setInterval(scrollNext, SCROLL_DELAY);

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, [isPaused]);

  return (
    <div
      ref={scrollRef}
      onScroll={handleUserInteraction}
      onTouchStart={handleUserInteraction}
      onMouseDown={handleUserInteraction}
      className="
        flex gap-6 overflow-x-auto pb-4
        snap-x snap-mandatory
        md:block md:overflow-visible
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      "
    >
      {children}
    </div>
  );
}
