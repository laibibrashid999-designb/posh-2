import React from 'react';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
    e.preventDefault();
    const element = document.getElementById(category);
    if (element) {
      // The offset is to account for the sticky header
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update the URL hash without causing a page jump
      if (history.pushState) {
        history.pushState(null, '', `#${category}`);
      } else {
        window.location.hash = category;
      }
    }
  };

  return (
    <aside className="lg:w-64 lg:sticky top-28 self-start">
      <h2 className="font-display text-3xl mb-4 text-[#F3E9D2] hidden lg:block">Categories</h2>
      <nav role="navigation" aria-label="Menu Categories">
        {/* Mobile Nav */}
        <div className="lg:hidden pb-3 mb-4">
            <div className="grid grid-cols-3 gap-2">
            {categories.map((category) => (
                <a
                    key={category}
                    href={`#${category}`}
                    onClick={(e) => handleNavClick(e, category)}
                    className={`block text-center px-2 py-2 text-sm font-semibold rounded-sm transition-colors duration-300 ${
                    activeCategory === category
                        ? 'bg-[#F3E9D2] text-[#0891B2]'
                        : 'bg-[#0E7490] text-[#F3E9D2] hover:bg-[#F3E9D2] hover:text-[#0891B2]'
                    }`}
                >
                    {category}
                </a>
            ))}
            </div>
        </div>
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col space-y-2">
            {categories.map((category) => (
                <a
                    key={category}
                    href={`#${category}`}
                    onClick={(e) => handleNavClick(e, category)}
                    className={`block px-4 py-2 rounded-sm transition-colors duration-300 font-semibold text-left ${
                    activeCategory === category
                        ? 'bg-[#F3E9D2] text-[#0891B2]'
                        : 'text-[#F3E9D2] hover:bg-[#f3e9d2] hover:text-[#0891B2]'
                    }`}
                >
                    {category}
                </a>
            ))}
        </div>
      </nav>
    </aside>
  );
};

export default CategoryNav;