import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}

const Carouseli: React.FC<CarouselProps> = ({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative h-full">
      <div
        className="flex h-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prev}
          id="prev-nextButton"
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
        <div id="dots" className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurr(i)}
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
};

export default Carouseli;
