import React from 'react';
import type { BlogPost } from '../types';
import Header from './Header';
import Footer from './Footer';
import { ArrowUpRightIcon } from './icons';

interface BlogListProps {
  posts: BlogPost[];
  showHome: () => void;
  showBlogPost: (slug: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, showHome, showBlogPost }) => {
  return (
    <div className="bg-[#1a1a1a] text-[#F3E9D2] min-h-screen font-sans">
      <Header showHome={showHome} />
      <main className="container mx-auto px-4 py-12" role="main">
        <header className="text-center mb-16">
          <h1 className="font-display text-7xl md:text-8xl text-white">From The Journal</h1>
          <p className="text-lg text-white/80 mt-2">Stories, culinary insights, and news from the Posh Lounge Rooftop.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-[#2a2a2a] rounded-lg overflow-hidden flex flex-col group">
              <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs uppercase tracking-widest text-white/60">{post.date} &bull; {post.author}</p>
                <h2 className="font-display text-3xl mt-2 text-white flex-grow">
                  {post.title}
                </h2>
                <p className="text-white/80 mt-3 font-light flex-grow">{post.summary}</p>
                <button
                  onClick={() => showBlogPost(post.slug)}
                  className="mt-6 self-start flex items-center gap-2 text-[#0891B2] font-bold uppercase tracking-widest text-sm hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ArrowUpRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
