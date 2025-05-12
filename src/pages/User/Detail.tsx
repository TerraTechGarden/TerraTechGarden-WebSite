// pages/Detail.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import forestImg from '../../assets/image/1.jpg';
import desertImg from '../../assets/image/2.jpg';
import tropicalImg from '../../assets/image/3.jpg';
import succulentImg from '../../assets/image/4.jpg';
import mossyImg from '../../assets/image/5.jpg';
import fairyImg from '../../assets/image/6.jpg';

const terrariums = [
  { id: '1', name: 'Forest Terrarium', price: 59, image: forestImg, description: 'A lush, green terrarium with vibrant forest plants.' },
  { id: '2', name: 'Desert Oasis Terrarium', price: 79, image: desertImg, description: 'A serene desert-themed terrarium with cacti and sand.' },
  { id: '3', name: 'Tropical Paradise Terrarium', price: 99, image: tropicalImg, description: 'A tropical terrarium with colorful plants and a waterfall.' },
  { id: '4', name: 'Succulent Garden Terrarium', price: 49, image: succulentImg, description: 'A low-maintenance terrarium with various succulents.' },
  { id: '5', name: 'Mossy World Terrarium', price: 69, image: mossyImg, description: 'A moss-filled terrarium with a mystical vibe.' },
  { id: '6', name: 'Fairy Garden Terrarium', price: 89, image: fairyImg, description: 'A magical terrarium with fairy lights and tiny figurines.' },
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
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={terrarium.image} alt={terrarium.name} className="w-full h-96 object-cover rounded-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">{terrarium.name}</h2>
            <p className="text-gray-600 text-xl mb-4">${terrarium.price}</p>
            <p className="text-gray-700 mb-4">{terrarium.description}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;