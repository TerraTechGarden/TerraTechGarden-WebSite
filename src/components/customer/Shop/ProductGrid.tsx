import React from 'react';
import { useState, useEffect } from 'react';
import TerrariumCard from '../Terrarium/TerrariumCard';
import forestImg from '../../../assets/image/1.jpg';
import desertImg from '../../../assets/image/2.jpg';
import tropicalImg from '../../../assets/image/3.jpg';
import succulentImg from '../../../assets/image/4.jpg';
import mossyImg from '../../../assets/image/5.jpg';
import fairyImg from '../../../assets/image/6.jpg';

const products = [
  {
    id: '1',
    name: 'Forest Terrarium',
    description: 'Hệ sinh thái rừng thu nhỏ với cây xanh tươi mát.',
    type: 'Cạn',
    price: 1475000,
    rating: 4.5,
    purchases: 120,
    image: forestImg,
    category: 'Terrarium',
  },
  {
    id: '2',
    name: 'Desert Oasis Terrarium',
    description: 'Bể sa mạc với xương rồng và cát trắng tinh tế.',
    type: 'Cạn',
    price: 1975000,
    rating: 4.0,
    purchases: 85,
    image: desertImg,
    category: 'Terrarium',
  },
  {
    id: '3',
    name: 'Tropical Paradise Terrarium',
    description: 'Không gian nhiệt đới với cây cối rực rỡ.',
    type: 'Bán Cạn',
    price: 2475000,
    rating: 4.8,
    purchases: 150,
    image: tropicalImg,
    category: 'Terrarium',
  },
  {
    id: '4',
    name: 'Succulent Garden Terrarium',
    description: 'Vườn cây mọng nước dễ chăm sóc.',
    type: 'Cạn',
    price: 1225000,
    rating: 4.2,
    purchases: 90,
    image: succulentImg,
    category: 'Terrarium',
  },
  {
    id: '5',
    name: 'Mossy World Terrarium',
    description: 'Thế giới rêu xanh mát, đầy thư giãn.',
    type: 'Bán Cạn',
    price: 1725000,
    rating: 4.3,
    purchases: 110,
    image: mossyImg,
    category: 'Terrarium',
  },
  {
    id: '6',
    name: 'Fairy Garden Terrarium',
    description: 'Vườn cổ tích với ánh sáng lung linh.',
    type: 'Cạn',
    price: 2225000,
    rating: 4.7,
    purchases: 130,
    image: fairyImg,
    category: 'Terrarium',
  },
  {
    id: '7',
    name: 'Tảo Rêu Cao Cấp',
    description: 'Tảo rêu cao cấp để trang trí bể.',
    type: 'Nước',
    price: 375000,
    rating: 4.1,
    purchases: 200,
    image: mossyImg,
    category: 'Phụ kiện',
  },
  {
    id: '8',
    name: 'Kéo Chăm Sóc Cây',
    description: 'Kéo chuyên dụng để chăm sóc cây và bể.',
    type: 'Dụng Cụ',
    price: 625000,
    rating: 4.6,
    purchases: 180,
    image: forestImg,
    category: 'Phụ kiện',
  },
];

interface ProductGridProps {
  searchQuery: string;
  selectedType: string | null;
  sortCriteria: string;
  sortOrder: 'ASC' | 'DESC';
}

const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery, selectedType, sortCriteria, sortOrder }) => {
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedType ? product.type === selectedType : true
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let comparison = 0;
    if (sortCriteria === 'rating') {
      comparison = a.rating - b.rating;
    } else if (sortCriteria === 'purchases') {
      comparison = a.purchases - b.purchases;
    } else if (sortCriteria === 'price') {
      comparison = a.price - b.price;
    }
    return sortOrder === 'ASC' ? comparison : -comparison;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <TerrariumCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          type={product.type}
          price={product.price}
          rating={product.rating}
          purchases={product.purchases}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;