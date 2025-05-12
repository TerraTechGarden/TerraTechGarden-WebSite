import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import forestImg from '../../assets/image/1.jpg';
import desertImg from '../../assets/image/2.jpg';
import tropicalImg from '../../assets/image/3.jpg';
import succulentImg from '../../assets/image/4.jpg';
import mossyImg from '../../assets/image/5.jpg';
import fairyImg from '../../assets/image/6.jpg';
import TerrariumDetail from '../../components/TerrariumDetail';
import TerrariumReviews from '../../components/TerrariumReviews'; 

const terrariums = [
  {
    id: '1',
    name: 'Forest Terrarium',
    description: 'Hệ sinh thái rừng thu nhỏ với cây xanh tươi mát.',
    type: 'Cạn',
    price: 1475000, // 59 USD * 25,000 VND
    rating: 4.5,
    purchases: 120,
    image: forestImg,
  },
  {
    id: '2',
    name: 'Desert Oasis Terrarium',
    description: 'Bể sa mạc với xương rồng và cát trắng tinh tế.',
    type: 'Cạn',
    price: 1975000, // 79 USD * 25,000 VND
    rating: 4.0,
    purchases: 85,
    image: desertImg,
  },
  {
    id: '3',
    name: 'Tropical Paradise Terrarium',
    description: 'Không gian nhiệt đới với cây cối rực rỡ.',
    type: 'Bán Cạn',
    price: 2475000, // 99 USD * 25,000 VND
    rating: 4.8,
    purchases: 150,
    image: tropicalImg,
  },
  {
    id: '4',
    name: 'Succulent Garden Terrarium',
    description: 'Vườn cây mọng nước dễ chăm sóc.',
    type: 'Cạn',
    price: 1225000, // 49 USD * 25,000 VND
    rating: 4.2,
    purchases: 90,
    image: succulentImg,
  },
  {
    id: '5',
    name: 'Mossy World Terrarium',
    description: 'Thế giới rêu xanh mát, đầy thư giãn.',
    type: 'Bán Cạn',
    price: 1725000, // 69 USD * 25,000 VND
    rating: 4.3,
    purchases: 110,
    image: mossyImg,
  },
  {
    id: '6',
    name: 'Fairy Garden Terrarium',
    description: 'Vườn cổ tích với ánh sáng lung linh.',
    type: 'Cạn',
    price: 2225000, // 89 USD * 25,000 VND
    rating: 4.7,
    purchases: 130,
    image: fairyImg,
  },
];

const reviews = [
  {
    id: 'r1',
    fullName: 'Nguyen Van A',
    avatar: 'https://i.pravatar.cc/100?img=1',
    productImage: forestImg,
    rating: 4.5,
    comment: 'Sản phẩm rất đẹp, cây phát triển tốt sau 1 tháng!',
    date: '2025-04-20',
  },
  {
    id: 'r2',
    fullName: 'Tran Thi B',
    avatar: 'https://i.pravatar.cc/100?img=2',
    productImage: desertImg,
    rating: 4.0,
    comment: 'Thiết kế độc đáo, nhưng cần hướng dẫn chăm sóc chi tiết hơn.',
    date: '2025-04-15',
  },
  {
    id: 'r3',
    fullName: 'Le Van C',
    avatar: 'https://i.pravatar.cc/100?img=3',
    productImage: tropicalImg,
    rating: 5.0,
    comment: 'Tuyệt vời, ánh sáng và cây rất hài hòa!',
    date: '2025-04-10',
  },
];

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const terrarium = terrariums.find((item) => item.id === id);

  if (!terrarium) {
    return (
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center">Không tìm thấy Terrarium</h2>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate('/')}
        >
          Quay lại Trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <button
        className="mb-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        onClick={() => navigate(-1)}
      >
        Quay lại
      </button>
      <TerrariumDetail
        id={terrarium.id}
        name={terrarium.name}
        description={terrarium.description}
        type={terrarium.type}
        price={terrarium.price}
        rating={terrarium.rating}
        purchases={terrarium.purchases}
        image={terrarium.image}
      />
      <TerrariumReviews reviews={reviews.filter((review) => review.productImage === terrarium.image)} /> {/* Cập nhật component */}
    </div>
  );
};

export default Detail;