// src/pages/admin/StaffManagement.tsx
import React from 'react';
import RoleManagement from '../../components/admin/RoleManagement';

const staff = [
  { id: 'STF001', name: 'Pham Thi D', status: 'Hoạt động', createdAt: '05/01/2024' },
  { id: 'STF002', name: 'Hoang Van E', status: 'Hoạt động', createdAt: '12/02/2024' },
  { id: 'STF003', name: 'Nguyen Thi F', status: 'Tạm khóa', createdAt: '18/03/2024' },
];

const StaffManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Quản Lý Nhân Viên</h1>
      <RoleManagement role="Staff" users={staff} />
    </div>
  );
};

export default StaffManagement;