
import React from 'react';
import type { BlogPost } from '../types';
import Header from './Header';
import Footer from './Footer';

interface BlogPostProps {
  post: BlogPost;
  showHome: () => void;
  showBlog: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, showHome, showBlog }) => {
  return (
    <div className="bg-[#F3E9D2] text-[#1a1a1a] min-h-screen font-sans">
      <Header showHome={showHome} />
      <main role="main">
        <div className="relative h-[50vh] bg-cover bg-center flex items-end text-white" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 20%, transparent), url('${post.imageUrl}')` }}>
          <div className="container mx-auto px-4 pb-12">
            <button onClick={showBlog} className="text-sm uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity mb-4">
              &larr; Back to Journal
            </button>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl">{post.title}</h1>
            <p className="mt-2 text-white/80">{post.date} &bull; By {post.author}</p>
          </div>
        </div>

        <article className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="prose lg:prose-xl max-w-none text-[#1a1a1a]/90 space-y-6">
            {post.content.map((block, index) => {
              if (block.type === 'heading') {
                return <h2 key={index} className="font-display text-3xl md:text-4xl !mt-12 !mb-4 text-black">{block.text}</h2>;
              }
              return <p key={index} className="text-lg leading-relaxed">{block.text}</p>;
            })}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
