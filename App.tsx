import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HomeHeader from './components/HomeHeader';
import Footer from './components/Footer';
import CategoryNav from './components/CategoryNav';
import CategorySection from './components/CategorySection';
import BestsellerCarousel from './components/BestsellerCarousel';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import { ArrowUpRightIcon, TikTokIcon, InstagramIcon, MapPinIcon, FacebookMessengerIcon } from './components/icons';
import { MENU_DATA } from './constants';
import { BLOG_DATA } from './blogData';
import type { MenuCategory, BlogPost as BlogPostType } from './types';

const bestsellers = [
  {
    id: 1,
    name: 'Thai Pizza',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/v1755443000/x8urstieksbrrh9crhwf.jpg',
    description: 'A unique fusion of Thai flavors on a classic pizza base, a must-try for adventurers.',
    price: 'From 799 BDT'
  },
  {
    id: 2,
    name: 'Premium Sizzling Platter',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/v1755442999/mxzrpq4fs7wple8hfvcl.jpg',
    description: 'Your choice of steak served on a sizzling platter with sauteed vegetables and special sauce.',
    price: '590 BDT'
  },
  {
    id: 3,
    name: 'Chili Crab Crunch',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/v1755442995/zlcmvesoyfjo6tquxsrr.jpg',
    description: 'Crispy golden bites filled with succulent crab meat, tossed in our signature sweet and spicy chili sauce.',
    price: 'From 299 BDT'
  },
  {
    id: 4,
    name: 'Tom Yum Rice Bowl',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/v1755443002/jepp1moabzttsem0snnt.jpg',
    description: "All the iconic flavors of Tom Yum soup in a hearty and satisfying rice bowl.",
    price: '480 BDT'
  },
  {
    id: 5,
    name: 'Yaki Tempura Roll',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/v1755443003/uap7e4aju0uexk7utp4u.jpg',
    description: "A savory fusion roll featuring crispy tempura shrimp, creamy cheese and cucumber.",
    price: 'From 299 BDT'
  },
];

// Marquee Component
const MarqueeContent = ({ className }: { className: string }) => {
    const items = Array(10).fill(0); 
    const words = ['Delicious', 'Tasty', 'Yummy'];
    return (
        <>
            {items.map((_, i) => (
                 <div key={i} className={`flex items-center space-x-6 mx-6 flex-shrink-0 ${className}`}>
                    <span className="font-display text-4xl italic">{words[i % words.length]}</span>
                    <div className="w-20 h-20 bg-[#E2B740] rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-black">100%</span>
                    </div>
                    <ArrowUpRightIcon className="w-8 h-8" />
                </div>
            ))}
        </>
    );
}

const Marquee = () => {
    return (
        <section className="py-12 bg-[#F3E9D2] overflow-x-hidden">
            <div className="space-y-4 font-sans">
                <div className="transform -rotate-3 scale-110 whitespace-nowrap overflow-hidden">
                    <div className="bg-[#C88A4A] py-4">
                        <div className="animate-marquee flex min-w-full">
                           <div className="flex flex-shrink-0"> <MarqueeContent className="text-white" /></div>
                           <div className="flex flex-shrink-0" aria-hidden="true"> <MarqueeContent className="text-white" /></div>
                        </div>
                    </div>
                </div>
                 <div className="transform -rotate-3 scale-110 whitespace-nowrap overflow-hidden">
                    <div className="bg-white py-4">
                        <div className="animate-marquee2 flex min-w-full">
                            <div className="flex flex-shrink-0"> <MarqueeContent className="text-black" /></div>
                            <div className="flex flex-shrink-0" aria-hidden="true"> <MarqueeContent className="text-black" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// New Home Page Component
const Home: React.FC<{ showMenu: () => void; showBlog: () => void; showHome: () => void; }> = ({ showMenu, showBlog, showHome }) => {
  return (
    <div className="bg-[#F3E9D2] min-h-screen">
      <HomeHeader showMenu={showMenu} showBlog={showBlog} showHome={showHome} />
      <main>
        <section 
            className="h-screen bg-cover bg-center flex flex-col justify-end items-start text-left text-[#F3E9D2] p-8 md:p-16" 
            style={{backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.4) 40%, transparent 70%), url('https://res.cloudinary.com/dy80ftu9k/image/upload/v1755443220/Heo_Secion_image_pzcktp.png')"}}>
            <div className="max-w-5xl">
                <p className="font-sans text-base md:text-lg tracking-[0.3em] text-white/80 uppercase">Posh Lounge Rooftop</p>
                <h1 className="font-display text-7xl md:text-[120px] lg:text-[140px] leading-none tracking-tight text-white mt-4">
                    WHERE THE SKY<br/>
                    MEETS THE SOUL
                </h1>
                <p className="font-sans text-lg md:text-xl mt-6 text-white/90 max-w-2xl">
                    Dhaka's premier rooftop destination for elevated dining and panoramic city views.
                </p>
                <button
                    onClick={showMenu}
                    aria-label="Explore Our Menu"
                    className="mt-10 bg-[#0891B2] text-[#F3E9D2] font-bold py-4 px-10 rounded-sm uppercase tracking-widest font-sans hover:bg-[#0E7490] transition-all duration-300 text-lg group flex items-center gap-3 transform hover:scale-105"
                >
                    Explore Menu
                    <ArrowUpRightIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </button>
            </div>
        </section>
        
        <Marquee />

        <section className="py-32 bg-cover bg-center flex items-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1502602898657-3e91760c0337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"}}>
          <div className="container mx-auto px-4 text-[#F3E9D2]">
             <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                   <h2 className="font-display text-6xl md:text-7xl">CRAFTED FOR REAL FLAVOR</h2>
                   <p className="font-sans mt-4 text-sm uppercase tracking-widest opacity-80">From kitchen to table, each step is done with love, tradition, and true flavor.</p>
                </div>
                <div className="space-y-4 text-center md:text-right">
                    <p className="font-display text-3xl md:text-4xl">SERVED WITH SOUL</p>
                    <p className="font-display text-3xl md:text-4xl">HANDMADE WITH CARE</p>
                </div>
             </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-[#0891B2] text-center overflow-hidden">
          <div className="container mx-auto">
            <h2 className="font-display text-6xl text-[#F3E9D2] mb-4">OUR BESTSELLERS</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-[#F3E9D2]/80 mb-12">Handpicked favorites loved by our guests.</p>
            <BestsellerCarousel bestsellers={bestsellers} />
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={showMenu}
                  aria-label="View Full Menu"
                  className="bg-transparent border-2 border-[#F3E9D2] text-[#F3E9D2] font-bold py-3 px-8 rounded-sm uppercase tracking-widest font-sans hover:bg-[#F3E9D2] hover:text-[#0891B2] transition-colors duration-300 text-base"
                >
                  View Full Menu
                </button>
                <a
                    href="https://m.me/poshloungerooftopbd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order on Facebook"
                    className="bg-[#F3E9D2] text-[#0891B2] font-bold py-3 px-6 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                    >
                    <FacebookMessengerIcon className="w-5 h-5" />
                    Order on Facebook
                </a>
                <a
                    href="https://ig.me/m/poshloungerooftop"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order on Instagram"
                    className="bg-[#F3E9D2] text-[#0891B2] font-bold py-3 px-6 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                    >
                    <InstagramIcon className="w-5 h-5" />
                    Order on Instagram
                </a>
            </div>
          </div>
        </section>
        
        <section className="bg-[#1a1a1a] text-[#F3E9D2] py-20 px-4 font-sans">
            <div className="container mx-auto text-center">
                <h2 className="font-display text-6xl md:text-7xl">CONTACT & LOCATION</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-opacity-80">We look forward to welcoming you. For reservations, please call us. Walk-ins are always welcome.</p>
                <div className="grid md:grid-cols-3 gap-12 text-left mt-16 max-w-6xl mx-auto">
                    <div>
                        <h3 className="font-display text-2xl tracking-widest border-b border-opacity-30 border-[#F3E9D2] pb-2">ADDRESS</h3>
                        <p className="mt-4 opacity-80">Safura Tower (Beside Pallabi Metro Station.)<br/>House 45, Level-9 Road 7, Mirpur-12, Dhaka</p>
                    </div>
                    <div>
                        <h3 className="font-display text-2xl tracking-widest border-b border-opacity-30 border-[#F3E9D2] pb-2">CONTACT</h3>
                        <p className="mt-4 opacity-80">Hotline: +880 1600 775 177<br/>Support: +880 1715 961 073<br/>poshloungebd@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="font-display text-2xl tracking-widest border-b border-opacity-30 border-[#F3E9D2] pb-2">HOURS</h3>
                        <p className="mt-4 opacity-80">Saturday - Thursday: 12 PM - 11 PM<br/>Friday: 2 PM - 11 PM<br/>@poshloungerooftopbd</p>
                    </div>
                </div>
                <div className="mt-16">
                     <h3 className="font-display text-2xl tracking-widest">REVIEW US ON GOOGLE</h3>
                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.google.com/search?q=pomo+rosso+dhaka" alt="QR Code for Google Review" className="mt-4 mx-auto bg-white p-2 rounded-md"/>
                </div>
                <div className="mt-16 pt-8 border-t border-[#F3E9D2] border-opacity-30">
                    <div className="flex justify-center items-center space-x-8">
                        <a href="https://www.tiktok.com/@poshloungerooftop?fbclid=IwY2xjawMO1DxleHRuA2FlbQIxMABicmlkETFBMXcyMW11VEp2UDF2VENoAR7Jng43ItsY5-RhdJYobZLe1iYZBCiAHHfo0Wz5TvWZwvIy8Acjb7UosvyEDg_aem_D0nkgoUqBWftp_XqpIVF0Q" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className="text-[#F3E9D2] hover:text-white transition-all duration-300 transform hover:scale-110">
                            <TikTokIcon className="w-7 h-7" />
                        </a>
                        <a href="https://www.instagram.com/poshloungerooftop?fbclid=IwY2xjawMO1DpleHRuA2FlbQIxMABicmlkETFBMXcyMW11VEp2VENoAR5PJNhR6iXw8pOhwMCX8aTZGgAn3GxaI260C7eKv63rK_KlATJNRIl5tchZ1w_aem_CRmAp6fBynL-y8-mO7arFg" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-[#F3E9D2] hover:text-white transition-all duration-300 transform hover:scale-110">
                            <InstagramIcon className="w-7 h-7" />
                        </a>
                        <a href="https://www.google.com/maps/place/Posh+Lounge+Rooftop/@23.801437,90.3431201,13z/data=!4m6!3m5!1s0x3755c14a6030e9ad:0x96efaace5e97d90e!8m2!3d23.8272437!4d90.3644606!16s%2Fg%2F11l6jcr3xr?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps" className="text-[#F3E9D2] hover:text-white transition-all duration-300 transform hover:scale-110">
                            <MapPinIcon className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="bg-[#0891B2] text-[#F3E9D2] py-20 px-4 text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-6xl">FROM OUR JOURNAL</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-opacity-80">Stories from the rooftop, culinary insights, and more.</p>
            <button
                onClick={showBlog}
                aria-label="Read The Blog"
                className="mt-10 bg-[#F3E9D2] text-[#0891B2] font-bold py-4 px-10 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-all duration-300 text-lg group flex items-center gap-3 transform hover:scale-105"
            >
                Read The Blog
                <ArrowUpRightIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </div>
        </section>

        <section className="h-[40vh] bg-cover bg-center flex flex-col justify-end items-start text-[#F3E9D2] p-8 md:p-12 relative" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dukaroz3u/image/upload/v1755442997/panr3hkcccjv6ljojlmb.jpg')"}}>
             <div className="container mx-auto">
                <h2 className="font-display text-7xl md:text-8xl">THANK YOU!</h2>
             </div>
             <div className="absolute bottom-4 right-4 text-xs tracking-widest">
                <p>© {new Date().getFullYear()} made by Contentguy. All rights reserved.</p>
             </div>
        </section>
      </main>
    </div>
  );
};

// Menu Page Component
const Menu: React.FC<{ showHome: () => void }> = ({ showHome }) => {
  const [activeCategory, setActiveCategory] = useState<string>(MENU_DATA[0]?.category || '');
  const categoryRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const currentRefs = categoryRefs.current;
    currentRefs.forEach((ref) => { if (ref) observer.observe(ref); });

    return () => {
      currentRefs.forEach((ref) => { if (ref) observer.unobserve(ref); });
    };
  }, []);

  return (
    <div className="bg-[#0891B2] text-[#F3E9D2] min-h-screen font-sans">
      <Header showHome={showHome} />
      <main className="container mx-auto px-4 py-8" role="main">
        <div className="flex flex-col lg:flex-row gap-8">
          <CategoryNav
            categories={MENU_DATA.map((cat: MenuCategory) => cat.category)}
            activeCategory={activeCategory}
          />
          <div className="flex-1 lg:pl-4">
            {MENU_DATA.map((category: MenuCategory) => (
              <div
                key={category.category}
                id={category.category}
                ref={(el) => { if (el) categoryRefs.current.set(category.category, el); }}
              >
                <CategorySection category={category} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


const App: React.FC = () => {
  type Page = 
    | { name: 'home' }
    | { name: 'menu' }
    | { name: 'blog' }
    | { name: 'blog-post', slug: string };

  const [page, setPage] = useState<Page>({ name: 'home' });

  const navigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo(0,0);
  }

  const showHome = () => navigate({ name: 'home' });
  const showMenu = () => navigate({ name: 'menu' });
  const showBlog = () => navigate({ name: 'blog' });
  const showBlogPost = (slug: string) => navigate({ name: 'blog-post', slug });

  if (page.name === 'home') {
    return <Home showMenu={showMenu} showBlog={showBlog} showHome={showHome}/>;
  }
  
  if (page.name === 'menu') {
    return <Menu showHome={showHome} />;
  }

  if (page.name === 'blog') {
    return <BlogList showHome={showHome} showBlogPost={showBlogPost} posts={BLOG_DATA} />;
  }

  if (page.name === 'blog-post') {
    const post = BLOG_DATA.find(p => p.slug === page.slug);
    if (post) {
      return <BlogPost showHome={showHome} showBlog={showBlog} post={post} />;
    }
    // Fallback to blog list if post not found
    return <BlogList showHome={showHome} showBlogPost={showBlogPost} posts={BLOG_DATA} />;
  }

  return <Home showMenu={showMenu} showBlog={showBlog} showHome={showHome} />;
};

export default App;
