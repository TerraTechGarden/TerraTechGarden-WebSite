import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../../components/customer/Dashboard/OrderItem';
import { SearchOutlined } from '@ant-design/icons';

const orders = [
  {
    name: 'Terrarium mini cây xanh',
    price: 513500,
    image: 'https://via.placeholder.com/100',
    date: '18-06-2025',
    status: 'Hoàn thành',
  },
  {
    name: 'Terrarium mini cây xanh',
    price: 182160,
    image: 'https://via.placeholder.com/100',
    date: '13-06-2025',
    status: 'Hoàn thành',
  },
];

const Orders: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('Tất cả');

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'Tất cả' ||
      order.status === filter ||
      (filter === 'Chờ thanh toán' && order.status === 'Chờ thanh toán') ||
      (filter === 'Đang vận chuyển' && order.status === 'Đang vận chuyển') ||
      (filter === 'Hoàn thành' && order.status === 'Hoàn thành') ||
      (filter === 'Đã hủy' && order.status === 'Đã hủy');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto py-8 px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Đơn Mua</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm đơn hàng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <SearchOutlined className="absolute left-3 top-2 text-gray-400" />
        </div>
      </div>
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2 border-b border-gray-200">
          {['Tất cả', 'Chờ thanh toán', 'Đang vận chuyển', 'Hoàn thành', 'Đã hủy'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-t-md font-medium transition-colors ${
                filter === status
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <OrderItem
              key={index}
              name={order.name}
              price={order.price}
              image={order.image}
              date={order.date}
              status={order.status}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Không có đơn hàng nào.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;