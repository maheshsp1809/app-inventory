// src/components/Carousel.tsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-1185 h-473">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-1185 h-473 object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: string, i: number) => (
            <div
              onClick={() => {
                setCurr(i);
              }}
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full cursor-pointer
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
