// components/Navbar.tsx
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ShoppingCartOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useState, useRef } from 'react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsDropdownVisible(false); // Ẩn dropdown sau khi chọn
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Xóa timeout nếu còn
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Xóa timeout khi hover lại
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 300); // Độ trễ 300ms để bạn có thời gian nhấp
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-2xl font-bold text-green-600">TerraTech</div>
        <div className="flex space-x-6">
          <Button type="link" onClick={() => handleNavigate('/')}>
            Trang Chủ
          </Button>
          <Button type="link" onClick={() => handleNavigate('/shop')}>
            Cửa Hàng
          </Button>
          <Button type="link" onClick={() => handleNavigate('/membership')}>
            Thành Viên
          </Button>
          <Button type="link" onClick={() => handleNavigate('/blog')}>
            Blog
          </Button>
          <Button type="link" onClick={() => handleNavigate('/about')}>
            Giới Thiệu
          </Button>
        </div>
        <div className="flex space-x-4 relative">
          <Button icon={<SearchOutlined />} />
          <Button icon={<ShoppingCartOutlined />} onClick={() => handleNavigate('/cart')} />
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button icon={<UserOutlined />} />
            {isDropdownVisible && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10"
                onMouseEnter={handleMouseEnter} // Giữ hiển thị khi hover vào dropdown
                onMouseLeave={handleMouseLeave} // Ẩn khi rời khỏi dropdown
              >
                <ul className="py-1">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigate('/profile')}
                  >
                    Hồ Sơ
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigate('/staff-dashboard')}
                  >
                    Bảng Điều Khiển Nhân Viên
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigate('/manager-dashboard')}
                  >
                    Bảng Điều Khiển Quản Lý
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigate('/admin-dashboard')}
                  >
                    Bảng Điều Khiển Quản Trị
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;