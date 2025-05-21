import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartOutlined } from '@ant-design/icons';

const favorites = [
  { id: 1, name: 'Terrarium mini cây xanh', price: 513500, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Kệ gỗ đa năng', price: 750000, image: 'https://via.placeholder.com/150' },
];

const Favorites: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Yêu thích</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price.toLocaleString()} VND</p>
            <button className="mt-2 text-red-500 hover:text-red-700 flex items-center">
              <HeartOutlined className="mr-2" /> Xóa
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

export default Favorites;