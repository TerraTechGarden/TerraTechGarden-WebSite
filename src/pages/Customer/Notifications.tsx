import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BellOutlined } from '@ant-design/icons';

const notifications = [
  { id: 1, message: 'Đơn hàng #123 đã được giao thành công!', timestamp: '20-05-2025 10:30', read: false },
  { id: 2, message: 'Khuyến mãi đặc biệt: Giảm 20% cho đơn hàng tiếp theo!', timestamp: '19-05-2025 15:45', read: false },
  { id: 3, message: 'Đánh giá sản phẩm của bạn đã được duyệt.', timestamp: '18-05-2025 09:00', read: true },
];

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Thông báo</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-center p-4 rounded-lg shadow-md ${
              notification.read ? 'bg-gray-100' : 'bg-white'
            }`}
          >
            <BellOutlined className="text-2xl text-green-600 mr-4" />
            <div className="flex-1">
              <p className="text-lg">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.timestamp}</p>
            </div>
            {!notification.read && (
              <button className="text-blue-500 hover:text-blue-700">
                Đánh dấu đã đọc
              </button>
            )}
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

export default Notifications;