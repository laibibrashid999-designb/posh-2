import React from 'react';
import type { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-[#0E7490] rounded-lg p-5 flex flex-col h-full transition-all duration-300">
      <div className="flex-grow">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-semibold text-[#F3E9D2]">{item.name}</h3>
          <p className="text-lg font-bold text-[#F3E9D2] flex-shrink-0 whitespace-nowrap">{item.price}</p>
        </div>
        {item.quantity && <p className="text-xs text-[#f3e9d2] opacity-70 mt-1 uppercase tracking-wider">{item.quantity}</p>}
        {item.description && <p className="text-sm text-[#f3e9d2] opacity-90 mt-3 font-light">{item.description}</p>}
      </div>
    </div>
  );
};

export default MenuItemCard;