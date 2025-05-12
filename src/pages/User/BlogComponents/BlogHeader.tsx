
import React from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, description }) => {
  return (
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    </section>
  );
};

export default BlogHeader;