// src/pages/BlogDetails.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import forestImg from '../../assets/image/1.jpg'; 
import desertImg from '../../assets/image/2.jpg';
import tropicalImg from '../../assets/image/3.jpg';
import succulentImg from '../../assets/image/4.jpg';

const blogs = [
  {
    id: '1',
    title: 'Hướng Dẫn Chăm Sóc Terrarium Cho Người Mới Bắt Đầu',
    image: forestImg,
    date: '20/04/2025',
    category: 'Hướng Dẫn',
    content: {
      intro: 'Terrarium là một hệ sinh thái thu nhỏ, rất phù hợp để trang trí không gian sống. Bài viết này sẽ hướng dẫn bạn những bước cơ bản để chăm sóc terrarium, giúp bạn tự tin bắt đầu hành trình làm vườn trong nhà.',
      body: 'Để chăm sóc terrarium hiệu quả, bạn cần chú ý đến ba yếu tố chính: ánh sáng, độ ẩm và loại cây trồng. Đầu tiên, hãy đảm bảo terrarium nhận được ánh sáng gián tiếp, tránh ánh nắng trực tiếp vì có thể làm cây bị cháy. Thứ hai, tưới nước vừa đủ, chỉ cần giữ đất ẩm nhẹ, không để ngập úng. Cuối cùng, chọn các loại cây nhỏ, chậm phát triển như rêu, dương xỉ hoặc cây không khí. Với sự chăm sóc đúng cách, terrarium của bạn sẽ luôn xanh tươi.',
      conclusion: 'Với những hướng dẫn trên, bạn đã sẵn sàng để chăm sóc terrarium của mình. Hãy bắt đầu với một terrarium nhỏ và dần nâng cao kỹ năng. Chăm sóc terrarium không chỉ là sở thích mà còn là cách để kết nối với thiên nhiên ngay trong không gian sống!',
    },
  },
  {
    id: '2',
    title: 'Top 5 Loại Cây Phù Hợp Với Terrarium Sa Mạc',
    image: desertImg,
    date: '18/04/2025',
    category: 'Sa Mạc',
    content: {
      intro: 'Terrarium sa mạc mang đến một phong cách độc đáo và dễ chăm sóc. Trong bài viết này, chúng ta sẽ khám phá top 5 loại cây lý tưởng để tạo nên một terrarium sa mạc hoàn hảo.',
      body: 'Dưới đây là 5 loại cây phù hợp nhất: 1. Xương rồng (Cactus) - cần ít nước và chịu hạn tốt; 2. Sen đá (Succulent) - đa dạng màu sắc và hình dáng; 3. Cây không khí (Air Plants) - không cần đất, chỉ cần độ ẩm nhẹ; 4. Echeveria - loại sen đá với lá mọng nước đẹp mắt; 5. Haworthia - nhỏ gọn, thích hợp cho terrarium mini. Hãy đảm bảo terrarium có hệ thống thoát nước tốt và nhận đủ ánh sáng.',
      conclusion: 'Với những loại cây này, bạn có thể tạo một terrarium sa mạc ấn tượng. Hãy thử nghiệm và chia sẻ thành quả của bạn với cộng đồng yêu thích terrarium!',
    },
  },
  {
    id: '3',
    title: 'Lợi Ích Của Terrarium Đối Với Sức Khỏe Tinh Thần',
    image: tropicalImg,
    date: '15/04/2025',
    category: 'Sức Khỏe',
    content: {
      intro: 'Terrarium không chỉ là món đồ trang trí mà còn mang lại lợi ích tuyệt vời cho sức khỏe tinh thần. Hãy cùng khám phá trong bài viết này.',
      body: 'Việc chăm sóc cây xanh giúp bạn thư giãn, giảm căng thẳng và cải thiện tâm trạng. Một nghiên cứu cho thấy tiếp xúc với thiên nhiên, dù chỉ qua terrarium nhỏ, có thể giảm huyết áp và tăng cảm giác hạnh phúc. Ngoài ra, việc tạo terrarium là hoạt động sáng tạo, giúp bạn tập trung và quên đi lo lắng hàng ngày.',
      conclusion: 'Terrarium là một cách đơn giản nhưng hiệu quả để cải thiện sức khỏe tinh thần. Hãy đặt một terrarium trên bàn làm việc hoặc phòng khách để tận hưởng lợi ích này!',
    },
  },
  {
    id: '4',
    title: 'Cách Tự Làm Terrarium Tại Nhà',
    image: succulentImg,
    date: '12/04/2025',
    category: 'DIY',
    content: {
      intro: 'Tự làm terrarium tại nhà là một trải nghiệm thú vị và tiết kiệm. Bài viết này sẽ hướng dẫn bạn từng bước để tạo một terrarium xinh xắn.',
      body: 'Bạn cần chuẩn bị một lọ thủy tinh, đất, sỏi, và các loại cây nhỏ. Đầu tiên, lót đáy lọ với sỏi để thoát nước, sau đó thêm một lớp đất. Chọn cây phù hợp và sắp xếp sao cho đẹp mắt, cuối cùng giữ độ ẩm vừa phải. Đừng quên đặt terrarium ở nơi có ánh sáng gián tiếp.',
      conclusion: 'Với những bước đơn giản này, bạn đã có một terrarium tự làm. Hãy sáng tạo và chia sẻ tác phẩm của bạn với bạn bè!',
    },
  },
];

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center">Không tìm thấy bài viết</h2>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate('/blog')}
        >
          Quay lại Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <button
          className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => navigate('/blog')}
        >
          Quay lại
        </button>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-4">Ngày đăng: {blog.date} | Danh mục: {blog.category}</p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Mở bài</h2>
            <p className="text-gray-700 leading-relaxed">{blog.content.intro}</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Thân bài</h2>
            <p className="text-gray-700 leading-relaxed">{blog.content.body}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Kết bài</h2>
            <p className="text-gray-700 leading-relaxed">{blog.content.conclusion}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;