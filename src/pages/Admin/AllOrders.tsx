// src/pages/admin/AllOrders.tsx
import React from 'react';
import OrderManagement from '../../components/admin/OrderManagement';

const allOrders = [
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
];

const AllOrders: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Tổng Đơn Hàng</h1>
      <OrderManagement status="Tổng đơn" orders={allOrders} />
    </div>
  );
};

export default AllOrders;