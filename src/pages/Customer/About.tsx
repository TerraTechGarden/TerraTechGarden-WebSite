import React from 'react';
import { useNavigate } from 'react-router-dom';
import forestImg from '../../assets/image/1.jpg'; // Sử dụng hình ảnh mẫu

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề chính */}
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
          Giới Thiệu Về TerraTech
        </h1>

        {/* Sứ Mệnh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Sứ Mệnh Của Chúng Tôi</h2>
            <p className="text-gray-600 leading-relaxed">
              Tại TerraTech, chúng tôi cam kết mang thiên nhiên gần gũi hơn đến cuộc sống hàng ngày của bạn thông qua các Terrarium độc đáo và bền vững. Với sự kết hợp giữa nghệ thuật thiết kế và công nghệ AI tiên tiến, chúng tôi không chỉ cung cấp những sản phẩm chất lượng cao mà còn hỗ trợ bạn chăm sóc và cá nhân hóa không gian xanh của riêng mình. Mục tiêu của chúng tôi là tạo ra một thế giới xanh hơn, nơi mỗi Terrarium là một tác phẩm nghệ thuật sống động.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={forestImg}
              alt="Sứ mệnh TerraTech"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Liên Hệ */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-gray-600 mb-2">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ qua các kênh sau:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><span className="font-medium">Email:</span> <a href="mailto:support@terratech.com" className="text-blue-500 hover:underline">support@terratech.com</a></li>
            <li><span className="font-medium">Điện thoại:</span> <a href="tel:+84123456789" className="text-blue-500 hover:underline">+84 123 456 789</a></li>
            <li><span className="font-medium">Địa chỉ:</span> 123 Đường Xanh, Quận 1, TP. Hồ Chí Minh, Việt Nam</li>
          </ul>
          <button
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
            onClick={() => navigate('/contact')} // Thêm route giả lập
          >
            Gửi Tin Nhắn
          </button>
        </div>

        {/* Đội Ngũ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={forestImg}
              alt="Đội ngũ TerraTech"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Đội Ngũ Của Chúng Tôi</h2>
            <p className="text-gray-600 leading-relaxed">
              Đội ngũ TerraTech tự hào quy tụ các chuyên gia trong lĩnh vực thực vật học, thiết kế nội thất và công nghệ AI. Với hơn 10 năm kinh nghiệm, chúng tôi không ngừng đổi mới để mang đến những giải pháp chăm sóc Terrarium tối ưu. Mỗi thành viên đều đam mê tạo ra những không gian xanh hoàn hảo, giúp bạn tận hưởng vẻ đẹp tự nhiên trong cuộc sống hiện đại.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;