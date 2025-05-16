// src/pages/admin/ManagerManagement.tsx
import React from 'react';
import RoleManagement from '../../components/admin/RoleManagement';

const managers = [
  { id: 'MGR001', name: 'Le Van G', status: 'Hoạt động', createdAt: '22/01/2024' },
  { id: 'MGR002', name: 'Tran Van H', status: 'Tạm khóa', createdAt: '25/02/2024' },
];

const ManagerManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Quản Lý Quản Lý</h1>
      <RoleManagement role="Manager" users={managers} />
    </div>
  );
};

export default ManagerManagement;