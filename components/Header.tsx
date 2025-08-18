
import React from 'react';
import { FacebookMessengerIcon, InstagramIcon } from './icons';

interface HeaderProps {
  showHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ showHome }) => {
  return (
    <header className="py-4 text-center border-b-2 border-[#F7E6C9] border-opacity-30 bg-[#0D323F] sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
         <button 
            onClick={showHome} 
            aria-label="Posh Lounge Home"
          >
           <img 
              src="https://res.cloudinary.com/dy80ftu9k/image/upload/f_auto,q_auto/v1755516557/POSH-LOUNGE-Logo_ibdfyp.png" 
              alt="Posh Lounge Rooftop Logo" 
              className="h-24 [filter:drop-shadow(0_4px_6px_rgba(0,0,0,0.4))]"
            />
         </button>
         <div className="flex items-center gap-2">
            <a
                href="https://m.me/poshloungerooftopbd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on Facebook"
                className="bg-[#E1B168] text-[#0D323F] font-bold py-2 px-3 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-xs flex items-center gap-1.5"
            >
                <FacebookMessengerIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
                href="https://ig.me/m/poshloungerooftop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on Instagram"
                className="bg-[#E1B168] text-[#0D323F] font-bold py-2 px-3 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-xs flex items-center gap-1.5"
            >
                <InstagramIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Instagram</span>
            </a>
         </div>
      </div>
    </header>
  );
};

export default Header;
