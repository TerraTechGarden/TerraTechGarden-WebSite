// src/components/TerrariumCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TerrariumCardProps {
  id: string;
  name: string;
  description: string;
  type: string;
  price: number;
  rating: number;
  purchases: number;
  image: string;
}

const TerrariumCard: React.FC<TerrariumCardProps> = ({
  id,
  name,
  description,
  type,
  price,
  rating,
  purchases,
  image,
}) => {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/terrarium/${id}`);
  };

  const handleAddToCart = () => {
    const cartItem = { id, name, price, image, quantity: 1, selected: false };
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = storedCart.findIndex((item: any) => item.id === id);
    if (existingItemIndex > -1) {
      storedCart[existingItemIndex].quantity += 1;
    } else {
      storedCart.push(cartItem);
    }
    localStorage.setItem('cartItems', JSON.stringify(storedCart));
    alert(`${name} đã được thêm vào giỏ hàng!`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <p className="text-gray-600 text-sm mt-1">Loại bể: {type}</p>
      <p className="text-gray-800 font-semibold mt-1">{price.toLocaleString('vi-VN')} VND</p>
      <div className="flex items-center mt-1">
        <span className="mr-2">Đánh giá:</span>
        {renderStars(rating)}
      </div>
      <p className="text-gray-600 text-sm mt-1">Số lượt mua: {purchases}</p>
      <div className="flex space-x-2 mt-4">
        <button
          className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ
        </button>
        <button
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleViewDetail}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default TerrariumCard;