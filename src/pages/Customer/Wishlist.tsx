import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StarOutlined } from '@ant-design/icons';

const wishlist = [
  { id: 1, name: 'Chậu cây mini', price: 150000, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Đèn LED trang trí', price: 300000, image: 'https://via.placeholder.com/100' },
];

const Wishlist: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      <div className="space-y-4">
        {wishlist.map((item) => (
          <div key={item.id} className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.price.toLocaleString()} VND</p>
            </div>
            <button className="text-red-500 hover:text-red-700 flex items-center">
              <StarOutlined className="mr-2" /> Xóa
            </button>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate('/customer-dashboard')}
      >
        Quay lại
      </button>
    </div>
  );
};

export default Wishlist;