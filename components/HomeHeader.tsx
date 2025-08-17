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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a] shadow-lg py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <button onClick={showHome} aria-label="Go to top of page">
            <img 
              src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1755443891/sds_qx7msz.png" 
              alt="Posh Lounge Rooftop Logo" 
              className="h-14 transition-all duration-300"
            />
        </button>
        <nav className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={showMenu}
            aria-label="View Menu"
            className="font-sans text-sm uppercase tracking-widest text-[#F3E9D2] hover:text-white transition-opacity font-semibold px-2"
          >
            Menu
          </button>
           <button 
            onClick={showBlog}
            aria-label="View Blog"
            className="font-sans text-sm uppercase tracking-widest text-[#F3E9D2] hover:text-white transition-opacity font-semibold px-2"
          >
            Blog
          </button>
          <a
            href="https://m.me/poshloungerooftopbd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Facebook"
            className="bg-[#0891B2] text-[#F3E9D2] font-bold py-2 px-3 rounded-sm uppercase tracking-widest font-sans hover:bg-[#0E7490] transition-colors duration-300 text-xs flex items-center gap-1.5"
          >
            <FacebookMessengerIcon className="w-4 h-4" />
            <span className="hidden md:inline">Order on Facebook</span>
            <span className="md:hidden">Facebook</span>
          </a>
          <a
            href="https://ig.me/m/poshloungerooftop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Instagram"
            className="bg-[#0891B2] text-[#F3E9D2] font-bold py-2 px-3 rounded-sm uppercase tracking-widest font-sans hover:bg-[#0E7490] transition-colors duration-300 text-xs flex items-center gap-1.5"
          >
            <InstagramIcon className="w-4 h-4" />
            <span className="hidden md:inline">Order on Instagram</span>
            <span className="md:hidden">Instagram</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
