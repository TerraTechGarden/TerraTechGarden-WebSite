// src/pages/ShiftManagement.tsx
import React, { useState, useEffect } from 'react';
import { PlusCircleOutlined, UserOutlined, IdcardOutlined, TruckOutlined } from '@ant-design/icons';

const ShiftManagement: React.FC = () => {
  const [onlineUsers, setOnlineUsers] = useState<{
    staff: string[];
    manager: string[];
    shipper: string[];
  }>({
    staff: ['Staff 1', 'Staff 2'],
    manager: ['Manager 1'],
    shipper: ['Shipper 1', 'Shipper 2', 'Shipper 3'],
  });
  const [lastUpdated, setLastUpdated] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers((prev) => ({
        staff: prev.staff.filter(() => Math.random() > 0.2),
        manager: prev.manager.filter(() => Math.random() > 0.2),
        shipper: prev.shipper.filter(() => Math.random() > 0.2),
      }));
      setLastUpdated(new Date().toLocaleTimeString());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderRoleCard = (
    role: string,
    users: string[],
    icon: React.ReactNode,
    emptyMessage: string
  ) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon}
          <h2 className="text-lg font-semibold text-gray-800">{role}</h2>
        </div>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {users.length} Online
        </span>
      </div>
      {users.length === 0 ? (
        <p className="text-red-500 italic">{emptyMessage}</p>
      ) : (
        <ul className="space-y-3">
          {users.map((user, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-700">{user}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Quản Lý Ca Làm</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          <PlusCircleOutlined className="text-lg" />
          <span>Thêm Ca Làm</span>
        </button>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>Cập nhật lần cuối: {lastUpdated}</p>
        <p>Trạng thái tự động cập nhật mỗi 5 giây</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderRoleCard(
          'Staff Online',
          onlineUsers.staff,
          <UserOutlined className="text-2xl text-blue-600" />,
          'Không có Staff online'
        )}
        {renderRoleCard(
          'Manager Online',
          onlineUsers.manager,
          <IdcardOutlined className="text-2xl text-purple-600" />,
          'Không có Manager online'
        )}
        {renderRoleCard(
          'Shipper Online',
          onlineUsers.shipper,
          <TruckOutlined className="text-2xl text-green-600" />,
          'Không có Shipper online'
        )}
      </div>
    </div>
  );
};

export default ShiftManagement;