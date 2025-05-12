
import React from 'react';
import TerrariumCard from './TerrariumCard';
import forestImg from '../assets/image/1.jpg';
import desertImg from '../assets/image/2.jpg';
import tropicalImg from '../assets/image/3.jpg';
import succulentImg from '../assets/image/4.jpg';
import mossyImg from '../assets/image/5.jpg';
import fairyImg from '../assets/image/6.jpg';

const terrariums = [
  {
    id: '1',
    name: 'Forest Terrarium',
    description: 'Hệ sinh thái rừng thu nhỏ với cây xanh tươi mát.',
    type: 'Rừng',
    price: 1475000, 
    rating: 4.5,
    purchases: 120,
    image: forestImg,
  },
  {
    id: '2',
    name: 'Desert Oasis Terrarium',
    description: 'Bể sa mạc với xương rồng và cát trắng tinh tế.',
    type: 'Sa Mạc',
    price: 1975000, 
    rating: 4.0,
    purchases: 85,
    image: desertImg,
  },
  {
    id: '3',
    name: 'Tropical Paradise Terrarium',
    description: 'Không gian nhiệt đới với cây cối rực rỡ.',
    type: 'Nhiệt Đới',
    price: 2475000, 
    purchases: 150,
    image: tropicalImg,
  },
  {
    id: '4',
    name: 'Succulent Garden Terrarium',
    description: 'Vườn cây mọng nước dễ chăm sóc.',
    type: 'Mọng Nước',
    price: 1225000,
    rating: 4.2,
    purchases: 90,
    image: succulentImg,
  },
  {
    id: '5',
    name: 'Mossy World Terrarium',
    description: 'Thế giới rêu xanh mát, đầy thư giãn.',
    type: 'Rêu',
    price: 1725000, 
    purchases: 110,
    image: mossyImg,
  },
  {
    id: '6',
    name: 'Fairy Garden Terrarium',
    description: 'Vườn cổ tích với ánh sáng lung linh.',
    type: 'Cổ Tích',
    price: 2225000, 
    rating: 4.7,
    purchases: 130,
    image: fairyImg,
  },
];

const PopularTerrariums: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Terrariums Phổ Biến</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {terrariums.map((terrarium) => (
          <TerrariumCard
            key={terrarium.id}
            id={terrarium.id}
            name={terrarium.name}
            description={terrarium.description}
            type={terrarium.type}
            price={terrarium.price}
            rating={terrarium.rating ?? 0}
            purchases={terrarium.purchases}
            image={terrarium.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularTerrariums;