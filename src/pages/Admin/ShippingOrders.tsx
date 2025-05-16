// src/pages/admin/ShippingOrders.tsx
import React from 'react';
import OrderManagement from '../../components/admin/OrderManagement';

const shippingOrders = [
  {
    id: 'DH002',
    customer: 'Tran Thi B',
    status: 'Đang vận chuyển',
    total: 2200000,
    createdAt: '14/05/2025',
    packingStaff: ['Staff 3'],
    shipper: 'Shipper 1',
    deliveryUnit: undefined,
    isHCM: true,
  },
  {
    id: 'DH006',
    customer: 'Nguyen Thi F',
    status: 'Đang vận chuyển',
    total: 1700000,
    createdAt: '14/05/2025',
    packingStaff: ['Staff 2'],
    shipper: undefined,
    deliveryUnit: 'Giao Hàng Tiết Kiệm',
    isHCM: false,
  },
];

const ShippingOrders: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Đơn Hàng Đang Vận Chuyển</h1>
      <OrderManagement status="Đang vận chuyển" orders={shippingOrders} />
    </div>
  );
};

export default ShippingOrders;