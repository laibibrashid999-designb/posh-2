import React from 'react';
import type { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const CardContent = () => (
    <>
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-semibold text-[#F7E6C9]">{item.name}</h3>
        <p className="text-lg font-bold text-[#F7E6C9] flex-shrink-0 whitespace-nowrap">{item.price}</p>
      </div>
      {item.quantity && <p className="text-xs text-[#F7E6C9] opacity-70 mt-1 uppercase tracking-wider">{item.quantity}</p>}
      {item.description && <p className="text-sm text-[#F7E6C9] opacity-90 mt-3 font-light">{item.description}</p>}
    </>
  );

  if (item.imageUrl) {
    return (
      <div className="bg-[#14424C] rounded-lg flex flex-col h-full transition-all duration-300 overflow-hidden">
        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow">
            <CardContent />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#14424C] rounded-lg p-5 flex flex-col h-full transition-all duration-300">
      <div className="flex-grow">
        <CardContent />
      </div>
    </div>
  );
};

export default MenuItemCard;