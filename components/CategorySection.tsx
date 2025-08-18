
import React from 'react';
import type { MenuCategory } from '../types';
import MenuItemCard from './MenuItemCard';

interface CategorySectionProps {
  category: MenuCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <section className="mb-12 scroll-mt-28" aria-labelledby={`${category.category}-heading`}>
      <h2 id={`${category.category}-heading`} className="font-display text-4xl sm:text-5xl text-[#F7E6C9] mb-6 border-b-2 border-[#F7E6C9] border-opacity-30 pb-3">{category.category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.items.map((item, index) => (
          <MenuItemCard key={`${category.category}-${item.name}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;