// src/components/TerrariumCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast

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

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = () => {
    const cartItem = { id, name, price, image, quantity: 1, selected: false };
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = storedCart.findIndex((item: any) => item.id === id);
    if (existingItemIndex > -1) {
      storedCart[existingItemIndex].quantity += 1;
      toast.success(`${name} đã được tăng số lượng trong giỏ hàng!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      storedCart.push(cartItem);
      toast.success(`${name} đã được thêm vào giỏ hàng!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
    localStorage.setItem('cartItems', JSON.stringify(storedCart));
  };

  // Hàm thêm/xóa sản phẩm vào danh sách yêu thích
  const handleAddToWishlist = () => {
    const wishlistItem = { id, name, price, image };
    const storedWishlist = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
    const existingItemIndex = storedWishlist.findIndex((item: any) => item.id === id);

    if (existingItemIndex > -1) {
      storedWishlist.splice(existingItemIndex, 1); // Xóa nếu đã tồn tại
      toast.info(`${name} đã được xóa khỏi danh sách yêu thích!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      storedWishlist.push(wishlistItem); // Thêm nếu chưa tồn tại
      toast.success(`${name} đã được thêm vào danh sách yêu thích!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
    localStorage.setItem('wishlistItems', JSON.stringify(storedWishlist));
  };

  // Hàm xem chi tiết sản phẩm
  const handleViewDetail = () => {
    navigate(`/terrarium/${id}`);
    
  };

  // Hàm render sao cho đánh giá
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

  // Kiểm tra xem sản phẩm có trong wishlist không để thay đổi màu nút
  const isInWishlist = JSON.parse(localStorage.getItem('wishlistItems') || '[]').some((item: any) => item.id === id);

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow relative">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      {/* Nút trái tim với ô vuông, cách lề 16px */}
      <button
        className={`absolute top-4 right-4 w-8 h-8 ${
          isInWishlist ? 'bg-pink-500 text-white' : 'bg-white text-gray-400 border border-gray-300'
        } rounded flex items-center justify-center hover:bg-pink-500 hover:text-white transition duration-200`}
        onClick={handleAddToWishlist}
      >
        ❤️
      </button>
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
          className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ
        </button>
        <button
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={handleViewDetail}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default TerrariumCard;