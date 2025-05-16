// src/pages/admin/CanceledOrders.tsx
import React from 'react';
import OrderManagement from '../../components/admin/OrderManagement';

const canceledOrders = [
  {
    id: 'DH004',
    customer: 'Pham Thi D',
    status: 'Đã hủy',
    total: 900000,
    createdAt: '12/05/2025',
    packingStaff: ['Staff 1'],
    shipper: undefined,
    deliveryUnit: undefined,
    isHCM: false,
  },
  {
    id: 'DH008',
    customer: 'Le Thi H',
    status: 'Đã hủy',
    total: 1100000,
    createdAt: '11/05/2025',
    packingStaff: [],
    shipper: undefined,
    deliveryUnit: undefined,
    isHCM: true,
  },
];

const CanceledOrders: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Đơn Hàng Đã Hủy</h1>
      <OrderManagement status="Đã hủy" orders={canceledOrders} />
    </div>
  );
};

export default CanceledOrders;