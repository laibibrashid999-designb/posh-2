
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
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/f_auto,q_auto/v1755443000/x8urstieksbrrh9crhwf.jpg',
    description: 'A unique fusion of Thai flavors on a classic pizza base, a must-try for adventurers.',
    price: 'From 799 BDT'
  },
  {
    id: 2,
    name: 'Premium Sizzling Platter',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/f_auto,q_auto/v1755442999/mxzrpq4fs7wple8hfvcl.jpg',
    description: 'Your choice of steak served on a sizzling platter with sauteed vegetables and special sauce.',
    price: '590 BDT'
  },
  {
    id: 3,
    name: 'Chili Crab Crunch',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/f_auto,q_auto/v1755442995/zlcmvesoyfjo6tquxsrr.jpg',
    description: 'Crispy golden bites filled with succulent crab meat, tossed in our signature sweet and spicy chili sauce.',
    price: 'From 299 BDT'
  },
  {
    id: 4,
    name: 'Tom Yum Rice Bowl',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/f_auto,q_auto/v1755443002/jepp1moabzttsem0snnt.jpg',
    description: "All the iconic flavors of Tom Yum soup in a hearty and satisfying rice bowl.",
    price: '480 BDT'
  },
  {
    id: 5,
    name: 'Yaki Tempura Roll',
    imageUrl: 'https://res.cloudinary.com/dukaroz3u/image/upload/f_auto,q_auto/v1755443003/uap7e4aju0uexk7utp4u.jpg',
    description: "A savory fusion roll featuring crispy tempura shrimp, creamy cheese and cucumber.",
    price: 'From 299 BDT'
  },
];

// New Home Page Component
const Home: React.FC<{ showMenu: () => void; showBlog: () => void; showHome: () => void; }> = ({ showMenu, showBlog, showHome }) => {
  
  const Ticker = () => {
    const words = ['YUMMY', 'DELICIOUS', 'TASTY', 'FRESH', 'SAVORY', 'HEAVENLY'];
    
    const MarqueeUnit: React.FC<{ text: string; circleBg: string; textColor: string; circleTextColor: string; }> = ({ text, circleBg, textColor, circleTextColor }) => (
      <div className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6 flex-shrink-0">
          <div className={`rounded-full w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center font-sans text-base sm:text-xl font-bold`} style={{backgroundColor: circleBg, color: circleTextColor}}>
              100%
          </div>
          <ArrowUpRightIcon className="w-6 h-6 sm:w-8 sm:h-8" style={{color: textColor}}/>
          <span className="font-display text-2xl sm:text-4xl tracking-wider font-bold" style={{color: textColor}}>{text}</span>
      </div>
    );
  
    const MarqueeContent: React.FC<{ circleBg: string; textColor: string; circleTextColor: string; }> = ({ circleBg, textColor, circleTextColor }) => (
        <>
          {words.map((word, i) => (
              <MarqueeUnit key={i} text={word} circleBg={circleBg} textColor={textColor} circleTextColor={circleTextColor} />
          ))}
        </>
    );
  
    return (
      <section className="py-8 font-sans transform -rotate-2 mt-4 sm:mt-8 -mx-4 sm:-mx-8 md:-mx-16 overflow-hidden">
          <div className="bg-[#A97142] py-4">
              <div className="flex whitespace-nowrap">
                  <div className="flex animate-marquee">
                      <MarqueeContent circleBg="#E1B168" textColor="#F7E6C9" circleTextColor="#0D323F" />
                  </div>
                  <div className="flex animate-marquee" aria-hidden="true">
                      <MarqueeContent circleBg="#E1B168" textColor="#F7E6C9" circleTextColor="#0D323F" />
                  </div>
              </div>
          </div>
          <div className="bg-[#F7E6C9] py-4">
               <div className="flex whitespace-nowrap">
                  <div className="flex animate-marquee2">
                      <MarqueeContent circleBg="#E1B168" textColor="#0D323F" circleTextColor="#0D323F" />
                  </div>
                  <div className="flex animate-marquee2" aria-hidden="true">
                      <MarqueeContent circleBg="#E1B168" textColor="#0D323F" circleTextColor="#0D323F" />
                  </div>
              </div>
          </div>
      </section>
    );
  };

  return (
    <div className="bg-[#0D323F] min-h-screen overflow-x-hidden">
      <HomeHeader showMenu={showMenu} showBlog={showBlog} showHome={showHome} />
      <main>
        <section 
            className="min-h-[700px] h-[90vh] bg-cover bg-center flex flex-col justify-end items-start text-left text-[#F7E6C9] p-6 sm:p-8 md:p-16" 
            style={{backgroundImage: "linear-gradient(to top, rgba(13,50,63,1) 15%, rgba(13,50,63,0.6) 40%, transparent 70%), url('https://res.cloudinary.com/dy80ftu9k/image/upload/f_auto,q_auto/v1755443220/Heo_Secion_image_pzcktp.png')"}}>
            <div className="max-w-5xl">
                <h1 className="font-display text-5xl sm:text-7xl md:text-[120px] lg:text-[140px] leading-none tracking-tight text-white mt-4">
                    WHERE THE SKY<br/>
                    MEETS THE SOUL
                </h1>
                <p className="font-sans text-sm sm:text-lg md:text-xl mt-4 text-white/90 max-w-2xl">
                    Dhaka's premier rooftop destination for elevated dining and panoramic city views.
                </p>
                <button
                    onClick={showMenu}
                    aria-label="Explore Our Menu"
                    className="mt-8 bg-[#E1B168] text-[#0D323F] font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-all duration-300 text-base sm:text-lg group flex items-center gap-3 transform hover:scale-105"
                >
                    Explore Menu
                    <ArrowUpRightIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </button>
            </div>
        </section>

        <div style={{ background: 'linear-gradient(to bottom, #0D323F, #14424C)' }}>
          <Ticker />

          <section className="py-20 px-4 text-[#F7E6C9]">
            <div className="container mx-auto text-center max-w-4xl">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white">Posh Lounge Rooftop – Where Flavors Meet the Sky</h2>
              <p className="font-sans text-lg mt-6 opacity-90 leading-relaxed">
                Welcome to Dhaka’s most beautiful rooftop restaurant, where every bite comes with a view. Nestled atop Safura Tower (just beside Pallabi Metro Station), Posh Lounge Rooftop blends Thai & Continental cuisine, signature coffee & desserts, and a vibrant ambiance that makes every visit unforgettable.
              </p>

              <div className="grid md:grid-cols-2 gap-12 text-left mt-16 font-sans">
                <div>
                  <h3 className="font-display text-3xl mb-4 text-white">Our Specialties</h3>
                  <ul className="space-y-2 opacity-90">
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Thai Delights</li>
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Continental Classics</li>
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Signature Coffee & Desserts</li>
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Fusion Wonders</li>
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>…and many more!</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-4 text-white">Why Dine With Us?</h3>
                  <ul className="space-y-2 opacity-90">
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Elegant rooftop view of Dhaka city lights.</li>
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Perfect for romantic dinners, family gatherings, and party nights.</li>
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Live ambiance with décor that turns moments into memories.</li>
                    <li className="flex items-start"><span className="mr-3 mt-1 text-[#E1B168]">◆</span>Loved by thousands – ⭐ 3,600+ happy reviews, 100% recommended.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-[#F7E6C9]/20">
                <h3 className="font-display text-4xl text-white">Celebrate With Us</h3>
                <p className="opacity-90 mt-2 text-lg">Birthdays • Anniversaries • Friendships • Corporate Parties</p>
                <p className="opacity-90 mt-4 max-w-2xl mx-auto">Let us set the stage for your unforgettable moments with exclusive décor, music, and service.</p>
                <a href="tel:+8801715961073" className="mt-6 inline-block bg-[#E1B168] text-[#0D323F] font-bold py-3 px-8 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  Book Now: +8801715-961073
                </a>
              </div>
              
               <div className="mt-16 text-center">
                  <h3 className="font-display text-3xl text-white">Find Us</h3>
                  <p className="mt-2 opacity-90">Safura Tower, House 45, Level-9, Road-7, Mirpur-12, Dhaka-1216<br/>(Just beside Pallabi Metro Station)</p>
                  <p className="mt-4 font-bold text-lg text-[#E1B168]">We’re Open Now – Dine-in • Takeaway • Delivery</p>
              </div>
            </div>
          </section>
        </div>

        <section className="py-20 bg-cover bg-center flex items-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1502602898657-3e91760c0337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"}}>
          <div className="container mx-auto px-4 text-[#F7E6C9]">
             <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                   <h2 className="font-display text-4xl sm:text-5xl md:text-7xl">CRAFTED FOR REAL FLAVOR</h2>
                   <p className="font-sans mt-4 text-sm uppercase tracking-widest opacity-80">From kitchen to table, each step is done with love, tradition, and true flavor.</p>
                </div>
                <div className="space-y-4 text-center md:text-right">
                    <p className="font-display text-3xl md:text-4xl">SERVED WITH SOUL</p>
                    <p className="font-display text-3xl md:text-4xl">HANDMADE WITH CARE</p>
                </div>
             </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-[#14424C] text-center overflow-hidden">
          <div className="container mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl text-[#F7E6C9] mb-4">OUR BESTSELLERS</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-[#F7E6C9]/80 mb-12">Handpicked favorites loved by our guests.</p>
            <BestsellerCarousel bestsellers={bestsellers} />
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={showMenu}
                  aria-label="View Full Menu"
                  className="bg-transparent border-2 border-[#F7E6C9] text-[#F7E6C9] font-bold py-3 px-6 text-sm sm:text-base sm:px-8 rounded-sm uppercase tracking-widest font-sans hover:bg-[#F7E6C9] hover:text-[#14424C] transition-colors duration-300"
                >
                  View Full Menu
                </button>
                <a
                    href="https://m.me/poshloungerooftopbd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order on Facebook"
                    className="bg-[#F7E6C9] text-[#14424C] font-bold py-3 px-6 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                    >
                    <FacebookMessengerIcon className="w-5 h-5" />
                    Order on Facebook
                </a>
                <a
                    href="https://ig.me/m/poshloungerooftop"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order on Instagram"
                    className="bg-[#F7E6C9] text-[#14424C] font-bold py-3 px-6 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                    >
                    <InstagramIcon className="w-5 h-5" />
                    Order on Instagram
                </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-[#0D323F] text-center text-[#F7E6C9]">
            <div className="container mx-auto max-w-3xl">
                <h2 className="font-display text-4xl sm:text-5xl">Make Every Evening Magical</h2>
                <p className="mt-4 text-lg opacity-90 leading-relaxed">
                    Whether it’s a cozy coffee date, a candlelight dinner under the stars, or just good food with great company – Posh Lounge Rooftop is your spot in the sky.
                </p>
            </div>
        </section>

        <section className="bg-[#4a2e2a] text-[#F7E6C9] py-12 px-4 text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl">FROM OUR JOURNAL</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-opacity-80">Stories from the rooftop, culinary insights, and more.</p>
            <button
                onClick={showBlog}
                aria-label="Read The Blog"
                className="mt-10 bg-[#E1B168] text-[#0D323F] font-bold py-4 px-10 rounded-sm uppercase tracking-widest font-sans hover:bg-opacity-90 transition-all duration-300 text-lg group flex items-center gap-3 transform hover:scale-105 mx-auto"
            >
                Read The Blog
                <ArrowUpRightIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </div>
        </section>

        <section className="bg-[#0D323F] text-[#F7E6C9] py-20 px-4 font-sans">
            <div className="container mx-auto text-center">
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl">CONTACT & LOCATION</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-opacity-80">We look forward to welcoming you. For reservations, please call us. Walk-ins are always welcome.</p>
                <div className="grid md:grid-cols-3 gap-12 text-left mt-16 max-w-6xl mx-auto">
                    <div>
                        <h3 className="font-display text-2xl tracking-widest border-b border-opacity-30 border-[#F7E6C9] pb-2">ADDRESS</h3>
                        <p className="mt-4 opacity-80">Safura Tower (Beside Pallabi Metro Station.)<br/>House 45, Level-9 Road 7, Mirpur-12, Dhaka</p>
                    </div>
                    <div>
                        <h3 className="font-display text-2xl tracking-widest border-b border-opacity-30 border-[#F7E6C9] pb-2">CONTACT</h3>
                        <p className="mt-4 opacity-80">Hotline: +880 1600 775 177<br/>Support: +880 1715 961 073<br/>poshloungebd@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="font-display text-2xl tracking-widest border-b border-opacity-30 border-[#F7E6C9] pb-2">HOURS</h3>
                        <p className="mt-4 opacity-80">Saturday - Thursday: 12 PM - 11 PM<br/>Friday: 2 PM - 11 PM</p>
                    </div>
                </div>
                <p className="mt-12 text-lg opacity-90">Follow us on Facebook & Instagram: @poshloungerooftop</p>
                <div className="mt-8">
                     <h3 className="font-display text-2xl tracking-widest">REVIEW US ON GOOGLE</h3>
                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.google.com/search?q=Posh+Lounge+Rooftop+Dhaka" alt="QR Code for Google Review" className="mt-4 mx-auto bg-white p-2 rounded-md"/>
                </div>
                <div className="mt-16 pt-8 border-t border-[#F7E6C9] border-opacity-30">
                    <div className="flex justify-center items-center space-x-8">
                        <a href="https://www.tiktok.com/@poshloungerooftop?fbclid=IwY2xjawMO1DxleHRuA2FlbQIxMABicmlkETFBMXcyMW11VEp2UDF2VENoAR7Jng43ItsY5-RhdJYobZLe1iYZBCiAHHfo0Wz5TvWZwvIy8Acjb7UosvyEDg_aem_D0nkgoUqBWftp_XqpIVF0Q" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className="text-[#F7E6C9] hover:text-white transition-all duration-300 transform hover:scale-110">
                            <TikTokIcon className="w-7 h-7" />
                        </a>
                        <a href="https://www.instagram.com/poshloungerooftop?fbclid=IwY2xjawMO1DpleHRuA2FlbQIxMABicmlkETFBMXcyMW11VEp2VENoAR5PJNhR6iXw8pOhwMCX8aTZGgAn3GxaI260C7eKv63rK_KlATJNRIl5tchZ1w_aem_CRmAp6fBynL-y8-mO7arFg" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-[#F7E6C9] hover:text-white transition-all duration-300 transform hover:scale-110">
                            <InstagramIcon className="w-7 h-7" />
                        </a>
                        <a href="https://www.google.com/maps/place/Posh+Lounge+Rooftop/@23.801437,90.3431201,13z/data=!4m6!3m5!1s0x3755c14a6030e9ad:0x96efaace5e97d90e!8m2!3d23.8272437!4d90.3644606!16s%2Fg%2F11l6jcr3xr?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps" className="text-[#F7E6C9] hover:text-white transition-all duration-300 transform hover:scale-110">
                            <MapPinIcon className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="h-[40vh] bg-cover bg-center flex flex-col justify-end items-start text-[#F7E6C9] p-8 md:p-12 relative" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dukaroz3u/image/upload/f_auto,q_auto/v1755442997/panr3hkcccjv6ljojlmb.jpg')"}}>
             <div className="container mx-auto">
                <h2 className="font-display text-5xl sm:text-6xl md:text-8xl">THANK YOU!</h2>
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
    <div className="bg-[#0D323F] text-[#F7E6C9] min-h-screen font-sans">
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