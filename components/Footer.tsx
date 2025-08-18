
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14424C] text-[#F7E6C9] py-10 mt-12 border-t-2 border-[#F7E6C9] border-opacity-30">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="https://res.cloudinary.com/dy80ftu9k/image/upload/f_auto,q_auto/v1755516557/POSH-LOUNGE-Logo_ibdfyp.png" 
          alt="Posh Lounge Rooftop Logo" 
          className="h-32 mx-auto mb-6 [filter:drop-shadow(0_4px_6px_rgba(0,0,0,0.4))]" 
        />
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left font-sans text-opacity-90">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F7E6C9] border-b border-[#F7E6C9] border-opacity-30 pb-2">Location</h3>
            <p className="flex items-start">
              <svg className="w-5 h-5 mr-3 mt-1 text-[#F7E6C9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Safura Tower (Beside Pallabi Metro Station), House 45, Level-9 Road 7, Mirpur-12, Dhaka</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F7E6C9] border-b border-[#F7E6C9] border-opacity-30 pb-2">Contact</h3>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-[#F7E6C9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+880 1600 775 177 (Hotline)</span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-[#F7E6C9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+880 1715 961 073 (Support)</span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-[#F7E6C9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:poshloungebd@gmail.com" className="hover:text-white">poshloungebd@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F7E6C9] border-opacity-30">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Posh Lounge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
