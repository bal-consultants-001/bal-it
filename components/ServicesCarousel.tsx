"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const SCROLL_DELAY = 5000; // slower time between scrolls
  const PAUSE_AFTER_INTERACTION = 60000;

  const handleUserInteraction = () => {
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, PAUSE_AFTER_INTERACTION);
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount = cardWidth + 24;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollNext = () => {
      if (isPaused) return;

      const cardWidth = container.firstElementChild?.clientWidth || 0;
      const scrollAmount = cardWidth + 24;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 800);
      }
    };

    autoScrollInterval.current = setInterval(scrollNext, SCROLL_DELAY);

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, [isPaused]);

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      <button
        onClick={() => scrollByAmount("left")}
        className="md:hidden absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
        aria-label="Scroll left"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scrollByAmount("right")}
        className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
        aria-label="Scroll right"
      >
        ›
      </button>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onScroll={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
        className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory scroll-smooth
          md:block md:overflow-visible
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {children}
      </div>
    </div>
  );
}
