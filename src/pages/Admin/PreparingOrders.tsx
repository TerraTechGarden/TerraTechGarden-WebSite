// src/pages/admin/PreparingOrders.tsx
import React from 'react';
import OrderManagement from '../../components/admin/OrderManagement';

const preparingOrders = [
  {
    id: 'DH001',
    customer: 'Nguyen Van A',
    status: 'Đang chuẩn bị hàng',
    total: 1500000,
    createdAt: '15/05/2025',
    packingStaff: ['Staff 1', 'Staff 2'],
    shipper: undefined,
    deliveryUnit: undefined,
    isHCM: true,
  },
  {
    id: 'DH005',
    customer: 'Hoang Van E',
    status: 'Đang chuẩn bị hàng',
    total: 1200000,
    createdAt: '15/05/2025',
    packingStaff: ['Staff 3'],
    shipper: undefined,
    deliveryUnit: undefined,
    isHCM: false,
  },
];

const PreparingOrders: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Đơn Hàng Đang Chuẩn Bị</h1>
      <OrderManagement status="Đang chuẩn bị hàng" orders={preparingOrders} />
    </div>
  );
};

export default PreparingOrders;