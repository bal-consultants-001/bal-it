"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const SCROLL_DELAY = 5000;
  const PAUSE_AFTER_INTERACTION = 60000;

  const totalItems = Array.isArray(children) ? children.length : 1;

  const pauseAutoScroll = () => {
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, PAUSE_AFTER_INTERACTION);
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement;
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const goNext = () => {
    pauseAutoScroll();
    const nextIndex = currentIndex + 1 >= totalItems ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  const goPrev = () => {
    pauseAutoScroll();
    const prevIndex = currentIndex - 1 < 0 ? totalItems - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  // Detect manual swipe end and snap to closest card
  const handleScrollEnd = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  useEffect(() => {
    if (isPaused) return;

    autoScrollInterval.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1 >= totalItems ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, SCROLL_DELAY);

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, [isPaused, totalItems]);

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      <button
        onClick={goPrev}
        className="md:hidden absolute left-1 top-2/3 -translate-y-1/2 z-10 bg-white/70 text-black w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm shadow"
        aria-label="Previous service"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={goNext}
        className="md:hidden absolute right-1 top-2/3 -translate-y-1/2 z-10 bg-white/70 text-black w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm shadow"
        aria-label="Next service"
      >
        ›
      </button>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onTouchStart={pauseAutoScroll}
        onMouseDown={pauseAutoScroll}
        onScrollEnd={handleScrollEnd}
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
