import React from 'react';

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
    <div className="flex-shrink-0 w-[300px] md:w-[350px] mx-4 bg-[#0E7490] rounded-3xl shadow-2xl overflow-hidden group">
        <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover" />
        <div className="p-6 text-left text-[#F3E9D2]">
            <h3 className="font-display text-3xl h-16">{item.name}</h3>
            <p className="mt-2 text-sm opacity-90 font-light h-20">{item.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold font-sans text-[#F3E9D2]">{item.price}</span>
            </div>
        </div>
    </div>
);


const BestsellerCarousel: React.FC<BestsellerCarouselProps> = ({ bestsellers }) => {
  const extendedBestsellers = [...bestsellers, ...bestsellers];

  return (
    <div className="w-full overflow-x-hidden relative py-8">
      <div className="flex animate-marquee-bestsellers">
        {extendedBestsellers.map((item, index) => (
          <BestsellerCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestsellerCarousel;