import React from 'react';
import forestImg from '../../assets/image/1.jpg';
import desertImg from '../../assets/image/2.jpg';
import tropicalImg from '../../assets/image/3.jpg';
import succulentImg from '../../assets/image/4.jpg';
import BlogHeader from '../../components/customer/Blog/BlogHeader';
import FeaturedPost from '../../components/customer/Blog/FeaturedPost';
import LatestPosts from '../../components/customer/Blog/LatestPosts';
import Categories from '../../components/customer/Blog/Categories';

const blogs = [
  {
    id: '1',
    title: 'Hướng Dẫn Chăm Sóc Terrarium Cho Người Mới Bắt Đầu',
    excerpt: 'Tìm hiểu các bước cơ bản để chăm sóc terrarium của bạn, từ ánh sáng, tưới nước đến cách chọn cây phù hợp.',
    image: forestImg,
    content: 'Terrarium là một hệ sinh thái thu nhỏ, rất phù hợp để trang trí không gian sống...',
    date: '20/04/2025',
    category: 'Hướng Dẫn',
    featured: true,
  },
  {
    id: '2',
    title: 'Top 5 Loại Cây Phù Hợp Với Terrarium Sa Mạc',
    excerpt: 'Khám phá 5 loại cây lý tưởng để tạo nên một terrarium sa mạc độc đáo và dễ chăm sóc.',
    image: desertImg,
    content: 'Terrarium sa mạc là một lựa chọn tuyệt vời nếu bạn yêu thích phong cách tối giản...',
    date: '18/04/2025',
    category: 'Sa Mạc',
    featured: false,
  },
  {
    id: '3',
    title: 'Lợi Ích Của Terrarium Đối Với Sức Khỏe Tinh Thần',
    excerpt: 'Terrarium không chỉ làm đẹp không gian mà còn giúp giảm căng thẳng và cải thiện tâm trạng.',
    image: tropicalImg,
    content: 'Terrarium không chỉ là một món đồ trang trí mà còn mang lại nhiều lợi ích...',
    date: '15/04/2025',
    category: 'Sức Khỏe',
    featured: false,
  },
  {
    id: '4',
    title: 'Cách Tự Làm Terrarium Tại Nhà',
    excerpt: 'Hướng dẫn chi tiết để bạn tự tay tạo một terrarium xinh xắn tại nhà với chi phí thấp.',
    image: succulentImg,
    content: 'Tự làm terrarium là một trải nghiệm thú vị và tiết kiệm...',
    date: '12/04/2025',
    category: 'DIY',
    featured: false,
  },
];

const Blog: React.FC = () => {
  

  const featuredBlog = blogs.find((blog) => blog.featured);
  const latestBlogs = blogs.filter((blog) => !blog.featured);
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <BlogHeader title="Blog TerraTech" description="Khám phá những bài viết hữu ích về terrarium, từ cách chăm sóc đến lợi ích sức khỏe và mẹo DIY." />
        <FeaturedPost blog={featuredBlog || null} />
        <LatestPosts blogs={latestBlogs} />
        <Categories categories={categories} />
      </div>
    </div>
  );
};

export default Blog;