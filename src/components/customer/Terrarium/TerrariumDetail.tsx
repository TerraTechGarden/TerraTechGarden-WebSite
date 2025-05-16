// src/components/TerrariumDetail.tsx
import React from 'react';
// import { useNavigate } from 'react-router-dom';

interface TerrariumDetailProps {
  id: string;
  name: string;
  description: string;
  type: string;
  price: number;
  rating: number;
  purchases: number;
  image: string;
}

const TerrariumDetail: React.FC<TerrariumDetailProps> = ({
  id,
  name,
  description,
  type,
  price,
  rating,
  purchases,
  image,
}) => {
//   const navigate = useNavigate();

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
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={image} alt={name} className="w-full h-96 object-cover rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <p className="text-gray-600 text-xl mb-2">{price.toLocaleString('vi-VN')} VND</p>
          <p className="text-gray-700 mb-2">Loại: {type}</p>
          <p className="text-gray-700 mb-2">Mô tả: {description}</p>
          <div className="flex items-center mb-2">
            <span className="mr-2">Đánh giá:</span>
            {renderStars(rating)}
          </div>
          <p className="text-gray-700 mb-4">Số lượt mua: {purchases}</p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerrariumDetail;