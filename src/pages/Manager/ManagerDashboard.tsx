
import { useNavigate } from 'react-router-dom';
const ManagerDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-blue-50 p-4">
        <h2 className="text-xl font-bold mb-6">Manager Dashboard</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-blue-600">
            <span>🏠</span>
            <span>Tổng quan</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>📊</span>
            <span>Phân tích doanh thu</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>👥</span>
            <span>Quản lý đội nhóm</span>
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
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Bảng Điều Khiển Quản Lý</h1>
        <p>Đây là giao diện riêng biệt cho quản lý</p>
        
      </div>
    </div>
  );
};

export default ManagerDashboard;