import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import be1 from '../images/be1.webp';
import af1 from '../images/af1.webp';
import be2 from '../images/be2.webp';
import af2 from '../images/af2.webp';
import be3 from '../images/be3.webp';
import af3 from '../images/af3.webp';

const transformations = [
  { before: be1, after: af1 },
  { before: be2, after: af2 },
  { before: be3, after: af3 },
];

// ─── Single draggable before/after slider ────────────────────────────────────
function BeforeAfterSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Reset to 50% whenever the slide changes
  const prevSlideIndex = useRef(0);
  useEffect(() => {
    if (prevSlideIndex.current !== undefined) {
      setSliderPos(50);
    }
    prevSlideIndex.current = 0; // just a flag
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [before, after]);

  const getPercent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return;
      setSliderPos(getPercent(e.clientX));
    },
    [getPercent]
  );

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    setSliderPos(getPercent(e.touches[0].clientX));
  };

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      setSliderPos(getPercent(e.touches[0].clientX));
    },
    [getPercent]
  );

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchmove', onTouchMove, { passive: false });
      container.addEventListener('touchend', onTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (container) {
        container.removeEventListener('touchmove', onTouchMove);
        container.removeEventListener('touchend', onTouchEnd);
      }
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl select-none cursor-col-resize"
      onTouchStart={onTouchStart}
    >
      {/* AFTER image — full width underneath */}
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* BEFORE — same size as after, clipped by clip-path */}
      <img
        src={before}
        alt={beforeLabel}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 h-full w-[3px] bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)] z-20 -translate-x-1/2"
        style={{ left: `${sliderPos}%` }}
      />

      {/* Handle circle */}
      <div
        className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 shadow-[0_0_16px_rgba(249,115,22,0.7)] border-4 border-white flex items-center justify-center cursor-col-resize"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Double arrow icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
          <path d="M7 5L2 10L7 15M13 5L18 10L13 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>

      {/* BEFORE label */}
      <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
        {beforeLabel}
      </div>

      {/* AFTER label */}
      <div className="absolute top-4 right-4 z-10 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
        {afterLabel}
      </div>
    </div>
  );
}

// ─── Main Results section ─────────────────────────────────────────────────────
export default function Results() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((p) => (p === transformations.length - 1 ? 0 : p + 1));
  const prev = () =>
    setCurrentIndex((p) => (p === 0 ? transformations.length - 1 : p - 1));

  return (
    <section id="results" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 section-heading uppercase">
            <span>{t.results.title1} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">
              {t.results.title2}
            </span>
          </h2>
          <p className="text-lg text-gray-600">{t.results.sub}</p>
        </div>

        {/* Slider + navigation */}
        <div className="max-w-3xl mx-auto relative">
          {/* Preload ALL images invisibly so switching is instant */}
          <div className="hidden" aria-hidden="true">
            {transformations.map((t, i) => (
              <React.Fragment key={i}>
                <img src={t.before} alt="" />
                <img src={t.after} alt="" />
              </React.Fragment>
            ))}
          </div>

          {/* No key= here — keeps the slider mounted, avoids re-load flash */}
          <BeforeAfterSlider
            before={transformations[currentIndex].before}
            after={transformations[currentIndex].after}
            beforeLabel={t.results.before}
            afterLabel={t.results.after}
          />

          {/* Drag hint */}
          <p className="text-center text-gray-400 text-sm mt-4 select-none">
            ← Prevuci da vidiš transformaciju →
          </p>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous transformation"
            className="absolute top-1/2 -left-4 md:-left-14 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 text-orange-500 hover:bg-orange-50 transition-colors z-30"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <button
            onClick={next}
            aria-label="Next transformation"
            className="absolute top-1/2 -right-4 md:-right-14 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 text-orange-500 hover:bg-orange-50 transition-colors z-30"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Slide navigation">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                role="tab"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : undefined}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index
                  ? 'bg-orange-500 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
