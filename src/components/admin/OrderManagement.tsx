// src/components/admin/OrderManagement.tsx
import React from 'react';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';

interface Order {
  id: string;
  customer: string;
  status: string;
  total: number;
  createdAt: string;
  packingStaff: string[]; // Danh sách staff đóng gói
  shipper?: string; // Shipper (nếu nội thành)
  deliveryUnit?: string; // Đơn vị vận chuyển (nếu tỉnh)
  isHCM: boolean; // Đơn nội thành TP.HCM hay tỉnh
}

interface OrderManagementProps {
  status: string;
  orders: Order[];
}

const OrderManagement: React.FC<OrderManagementProps> = ({ status, orders }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Quản Lý Đơn Hàng - {status}</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          + Thêm Đơn Hàng
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Mã Đơn Hàng</th>
            <th>Khách Hàng</th>
            <th>Trạng Thái</th>
            <th>Tổng Tiền</th>
            <th>Đóng Gói</th>
            <th>Vận Chuyển</th>
            <th>Ngày Tạo</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={8} className="py-4 text-center text-gray-500">
                Không có đơn hàng nào ở trạng thái {status.toLowerCase()}.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2">{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded ${
                      order.status === 'Đã hoàn thành'
                        ? 'bg-green-100 text-green-600'
                        : order.status === 'Đã hủy'
                        ? 'bg-red-100 text-red-600'
                        : order.status === 'Đang vận chuyển'
                        ? 'bg-blue-100 text-blue-600'
                        : order.status === 'Đang chuẩn bị hàng'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.total.toLocaleString('vi-VN')} VND</td>
                <td>{order.packingStaff.join(', ')}</td>
                <td>
                  {order.isHCM ? (
                    order.shipper ? (
                      order.shipper
                    ) : (
                      <span className="text-gray-500">Chưa phân công</span>
                    )
                  ) : (
                    order.deliveryUnit || <span className="text-gray-500">Chưa phân công</span>
                  )}
                </td>
                <td>{order.createdAt}</td>
                <td>
                  <EyeOutlined className="mr-2 text-blue-500 cursor-pointer hover:text-blue-700" />
                  <EditOutlined className="text-yellow-500 cursor-pointer hover:text-yellow-700" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;