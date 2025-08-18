import React, { useRef, useEffect, useState, useCallback } from 'react';

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

const BestsellerCard: React.FC<{ item: Bestseller }> = ({ item }) => (
    <div className="flex-shrink-0 w-[300px] md:w-[350px] mx-4 bg-[#0D323F] rounded-3xl shadow-2xl overflow-hidden group select-none">
        <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover pointer-events-none" />
        <div className="p-6 text-left text-[#F7E6C9]">
            <h3 className="font-display text-3xl">{item.name}</h3>
            <p className="mt-2 text-sm opacity-90 font-light">{item.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold font-sans text-[#F7E6C9]">{item.price}</span>
            </div>
        </div>
    </div>
);


const BestsellerCarousel: React.FC<BestsellerCarouselProps> = ({ bestsellers }) => {
  const extendedBestsellers = [...bestsellers, ...bestsellers];
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const animate = useCallback(() => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;
      const maxScroll = sliderRef.current.scrollWidth / 2;

      // Reset scroll to create infinite loop effect
      if (currentScroll >= maxScroll) {
        sliderRef.current.scrollLeft = currentScroll - maxScroll;
      } else {
        sliderRef.current.scrollLeft += 1.5; // Adjust for speed
      }
    }
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  const stopAnimation = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  const startAnimation = () => {
     stopAnimation();
     animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, [animate]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  
  const onMouseUpAndLeave = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Drag speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      className="w-full relative py-8"
      onMouseEnter={stopAnimation}
      onMouseLeave={startAnimation}
    >
      <div 
        ref={sliderRef}
        className={`flex overflow-x-auto no-scrollbar cursor-grab ${isDragging ? 'active cursor-grabbing' : ''}`}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUpAndLeave}
        onMouseUp={onMouseUpAndLeave}
        onMouseMove={onMouseMove}
      >
        {extendedBestsellers.map((item, index) => (
          <BestsellerCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestsellerCarousel;
