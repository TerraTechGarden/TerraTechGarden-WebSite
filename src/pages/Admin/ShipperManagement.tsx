// src/pages/admin/ShipperManagement.tsx
import React from 'react';
import RoleManagement from '../../components/admin/RoleManagement';

const shippers = [
  { id: 'SHP001', name: 'Nguyen Van I', status: 'Hoạt động', createdAt: '10/01/2024' },
  { id: 'SHP002', name: 'Pham Van J', status: 'Hoạt động', createdAt: '15/02/2024' },
  { id: 'SHP003', name: 'Le Thi K', status: 'Tạm khóa', createdAt: '20/03/2024' },
];

const ShipperManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Quản Lý Shipper</h1>
      <RoleManagement role="Shipper" users={shippers} />
    </div>
  );
};

export default ShipperManagement;