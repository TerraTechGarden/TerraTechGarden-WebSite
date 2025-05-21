import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileTextOutlined } from '@ant-design/icons';

const layouts = [
  { id: 1, title: 'Layout Terrarium 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Layout Terrarium 2', image: 'https://via.placeholder.com/150' },
];

const SavedLayouts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Layout đã lưu</h1>
      <div className="space-y-4">
        {layouts.map((layout) => (
          <div key={layout.id} className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <img src={layout.image} alt={layout.title} className="w-24 h-24 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{layout.title}</h3>
            </div>
            <button className="text-red-500 hover:text-red-700 flex items-center">
              <FileTextOutlined className="mr-2" /> Xóa
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

export default SavedLayouts;