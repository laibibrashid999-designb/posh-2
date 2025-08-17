
import React from 'react';

export const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5m0 0h-7m7 0v7" />
    </svg>
);

export const TikTokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.6 5.82h-2.93v6.78a2.72 2.72 0 0 1-2.72 2.72c-1.5 0-2.72-1.22-2.72-2.72s1.22-2.72 2.72-2.72c.1 0 .2 0 .3.02V7.12a5.4 5.4 0 0 0-.3-.02c-3 0-5.43 2.43-5.43 5.43s2.43 5.43 5.43 5.43 5.43-2.43 5.43-5.43V7.54a1.72 1.72 0 0 1 1.72-1.72h1.2v-2.7h-1.2c-1.48 0-2.7 1.2-2.7 2.7z" />
    </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

export const FacebookMessengerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.01,2.0001 C5.9273,2.0001 1,6.3668 1,11.6934 C1,15.176,3.0938,18.1741 6.2738,19.7423 L5.572,22.9994 L9.689,20.8876 C10.435,21.082 11.213,21.1866 12.01,21.1866 C18.0927,21.1866 23.02,16.82 23.02,11.4934 C23.02,6.1668 18.0927,2.0001 12.01,2.0001 Z M7.89,13.886 L10.854,10.922 L16.101,13.886 L13.137,10.922 L7.89,7.958 L10.854,10.922 L7.89,13.886 Z" />
    </svg>
);
