import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  isFeatured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, image, date, isFeatured = false }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 border border-gray-200 ${
        isFeatured ? '' : 'hover:shadow-xl transition-shadow duration-300'
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full ${isFeatured ? 'h-48' : 'h-32'} object-cover rounded-lg mb-4`}
      />
      <h3 className={`text-${isFeatured ? 'xl' : 'lg'} font-semibold mb-2`}>{title}</h3>
      <p className="text-gray-600 mb-2">{excerpt}</p>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <button
        onClick={handleViewDetails}
        className={`bg-blue-500 text-white px-${isFeatured ? '4' : '3'} py-${isFeatured ? '2' : '1'} rounded text-${
          isFeatured ? 'base' : 'sm'
        } hover:bg-blue-600 transition-colors`}
      >
        Đọc thêm
      </button>
    </div>
  );
};

export default BlogCard;