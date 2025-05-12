// components/PopularTerrariums.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import forestImg from '../assets/image/1.jpg';
import desertImg from '../assets/image/2.jpg';
import tropicalImg from '../assets/image/3.jpg';
import succulentImg from '../assets/image/4.jpg';
import mossyImg from '../assets/image/5.jpg';
import fairyImg from '../assets/image/6.jpg';

const terrariums = [
  { id: '1', name: 'Forest Terrarium', price: 59, image: forestImg },
  { id: '2', name: 'Desert Oasis Terrarium', price: 79, image: desertImg },
  { id: '3', name: 'Tropical Paradise Terrarium', price: 99, image: tropicalImg },
  { id: '4', name: 'Succulent Garden Terrarium', price: 49, image: succulentImg },
  { id: '5', name: 'Mossy World Terrarium', price: 69, image: mossyImg },
  { id: '6', name: 'Fairy Garden Terrarium', price: 89, image: fairyImg },
];

const PopularTerrariums: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetail = (id: string) => {
    navigate(`/terrarium/${id}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Terrariums Phổ Biến</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {terrariums.map((terrarium) => (
          <div key={terrarium.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img src={terrarium.image} alt={terrarium.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">{terrarium.name}</h3>
            <p className="text-gray-600">${terrarium.price}</p>
            <div className="flex space-x-2 mt-4">
              <button className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Thêm vào giỏ
              </button>
              <button
                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleViewDetail(terrarium.id)}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTerrariums;