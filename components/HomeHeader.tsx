
import React, { useState, useEffect } from 'react';
import { FacebookMessengerIcon, InstagramIcon } from './icons';

interface HomeHeaderProps {
  showMenu: () => void;
  showBlog: () => void;
  showHome: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ showMenu, showBlog, showHome }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D323F] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <button onClick={showHome} aria-label="Go to top of page" className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dy80ftu9k/image/upload/f_auto,q_auto/v1755516557/POSH-LOUNGE-Logo_ibdfyp.png" 
              alt="Posh Lounge Rooftop Logo" 
              className="h-20 sm:h-24 transition-all duration-300 [filter:drop-shadow(0_4px_6px_rgba(0,0,0,0.4))]"
            />
        </button>
        <nav className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={showMenu}
            aria-label="View Menu"
            className="font-sans text-xs sm:text-sm uppercase tracking-widest text-[#F7E6C9] hover:text-white transition-opacity font-semibold px-2"
          >
            Menu
          </button>
           <button 
            onClick={showBlog}
            aria-label="View Blog"
            className="font-sans text-xs sm:text-sm uppercase tracking-widest text-[#F7E6C9] hover:text-white transition-opacity font-semibold px-2"
          >
            Blog
          </button>
          <a
            href="https://m.me/poshloungerooftopbd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Facebook"
            className="bg-[#E1B168] text-[#0D323F] font-bold py-2 px-2 sm:px-3 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-xs flex items-center gap-1.5"
          >
            <FacebookMessengerIcon className="w-4 h-4" />
            <span className="hidden sm:inline md:hidden">Facebook</span>
            <span className="hidden md:inline">Order on Facebook</span>
          </a>
          <a
            href="https://ig.me/m/poshloungerooftop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Instagram"
            className="bg-[#E1B168] text-[#0D323F] font-bold py-2 px-2 sm:px-3 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-xs flex items-center gap-1.5"
          >
            <InstagramIcon className="w-4 h-4" />
            <span className="hidden sm:inline md:hidden">Instagram</span>
            <span className="hidden md:inline">Order on Instagram</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
