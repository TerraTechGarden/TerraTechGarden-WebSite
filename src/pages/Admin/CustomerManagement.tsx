// src/pages/admin/CustomerManagement.tsx
import React from 'react';
import RoleManagement from '../../components/admin/RoleManagement';

const customers = [
  { id: 'CUS001', name: 'Nguyen Van A', status: 'Hoạt động', createdAt: '15/01/2024' },
  { id: 'CUS002', name: 'Tran Thi B', status: 'Tạm khóa', createdAt: '20/01/2024' },
  { id: 'CUS003', name: 'Le Van C', status: 'Hoạt động', createdAt: '10/02/2024' },
];

const CustomerManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Quản Lý Khách Hàng</h1>
      <RoleManagement role="Customer" users={customers} />
    </div>
  );
};

export default CustomerManagement;