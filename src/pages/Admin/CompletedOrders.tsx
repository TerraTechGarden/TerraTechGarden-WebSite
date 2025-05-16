// src/pages/admin/CompletedOrders.tsx
import React from 'react';
import OrderManagement from '../../components/admin/OrderManagement';

const completedOrders = [
  {
    id: 'DH003',
    customer: 'Le Van C',
    status: 'Đã hoàn thành',
    total: 1800000,
    createdAt: '13/05/2025',
    packingStaff: ['Staff 2'],
    shipper: undefined,
    deliveryUnit: 'Giao Hàng Nhanh',
    isHCM: false,
  },
  {
    id: 'DH007',
    customer: 'Pham Van G',
    status: 'Đã hoàn thành',
    total: 2000000,
    createdAt: '12/05/2025',
    packingStaff: ['Staff 1'],
    shipper: 'Shipper 2',
    deliveryUnit: undefined,
    isHCM: true,
  },
];

const CompletedOrders: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Đơn Hàng Đã Hoàn Thành</h1>
      <OrderManagement status="Đã hoàn thành" orders={completedOrders} />
    </div>
  );
};

export default CompletedOrders;