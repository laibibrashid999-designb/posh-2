import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

interface Bestseller {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
}

interface BestsellerCarouselProps {
  bestsellers: Bestseller[];
}

const BestsellerCarousel: React.FC<BestsellerCarouselProps> = ({ bestsellers }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prevIndex) => (prevIndex === bestsellers.length - 1 ? 0 : prevIndex + 1)),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [current, bestsellers.length, resetTimeout]);

  const nextSlide = () => {
    setCurrent(current === bestsellers.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? bestsellers.length - 1 : current - 1);
  };

  return (
    <div className="w-full relative pb-16">
      <div className="w-full h-[550px] md:h-[600px] relative flex items-center justify-center">
        {bestsellers.map((item, index) => {
          const offset = index - current;
          const isVisible = Math.abs(offset) <= 2;

          let translateX = '0%';
          if (offset !== 0) {
            translateX = `${offset * 35}%`;
          }

          const scale = index === current ? 'scale(1)' : 'scale(0.8)';
          const opacity = index === current ? 'opacity-100' : 'opacity-60';
          const zIndex = bestsellers.length - Math.abs(offset);

          return (
            <div
              key={item.id}
              className={`absolute transition-all duration-500 ease-out ${opacity}`}
              style={{
                transform: `translateX(${translateX}) ${scale}`,
                zIndex: zIndex,
                visibility: isVisible ? 'visible' : 'hidden',
              }}
            >
              <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[525px] group">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-3xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 p-6 text-[#F3E9D2] w-full">
                  <h3 className="font-display text-4xl">{item.name}</h3>
                  <div className={`transition-all duration-300 overflow-hidden ${index === current ? 'max-h-40' : 'max-h-0'}`}>
                    <p className="mt-2 text-sm opacity-90">{item.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-2xl font-bold font-sans text-[#F3E9D2]">{item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={prevSlide} aria-label="Previous bestseller" className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm">
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} aria-label="Next bestseller" className="absolute top-1/2 -translate-y-1/2 right-0 md:right-8 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm">
        <ArrowRightIcon className="w-6 h-6" />
      </button>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {bestsellers.map((_, i) => (
          <div key={i} onClick={() => setCurrent(i)} className={`cursor-pointer w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-[#F3E9D2] scale-125' : 'bg-[#F3E9D2]/50'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerCarousel;