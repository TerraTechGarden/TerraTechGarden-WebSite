// components/admin/AdminSidebar.tsx
import { useNavigate } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-blue-50 p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 text-blue-600">
          <span>🏠</span>
          <span>Tổng quan</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>👤</span>
          <span>Quản lý tài khoản</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>💰</span>
          <span>Quản lý doanh thu</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>⚙️</span>
          <span>Cài đặt hệ thống</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>📊</span>
          <span>Báo cáo & Thống kê</span>
        </li>
        <li className="mt-6">
          <button
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            onClick={() => navigate('/')}
          >
            Trở về
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;