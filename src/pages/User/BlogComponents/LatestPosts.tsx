import React from 'react';
import BlogCard from './BlogCard';

interface LatestPostsProps {
  blogs: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
  }[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ blogs }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Bài Viết Mới Nhất</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} image={blog.image} date={blog.date} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;