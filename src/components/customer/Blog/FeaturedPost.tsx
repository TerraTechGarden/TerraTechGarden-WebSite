
import React from 'react';
import BlogCard from './BlogCard';

interface FeaturedPostProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
  } | null;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ blog }) => {
  if (!blog) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Bài Viết Nổi Bật</h2>
      <BlogCard id={blog.id} title={blog.title} excerpt={blog.excerpt} image={blog.image} date={blog.date} isFeatured />
    </section>
  );
};

export default FeaturedPost;