import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { ShoppingCartOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useState, useRef } from 'react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); 
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsDropdownVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 300);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md py-4 font-roboto">
      <div className="container mx-auto flex justify-between items-center relative">
        <div 
          className="text-2xl font-bold text-green-600 cursor-pointer" 
          onClick={() => handleNavigate('/')}
        >
          TerraTech
        </div>
        <div className="flex space-x-6">
          <Button 
            type="link" 
            onClick={() => handleNavigate('/')} 
            className={`text-black font-bold nav-button ${isActive('/') ? 'active' : ''} !text-black hover:!text-black`}
          >
            Trang Chủ
          </Button>
          <Button 
            type="link" 
            onClick={() => handleNavigate('/shop')} 
            className={`text-black font-bold nav-button ${isActive('/shop') ? 'active' : ''} !text-black hover:!text-black`}
          >
            Cửa Hàng
          </Button>
          <Button 
            type="link" 
            onClick={() => handleNavigate('/membership')} 
            className={`text-black font-bold nav-button ${isActive('/membership') ? 'active' : ''} !text-black hover:!text-black`}
          >
            Thành Viên
          </Button>
          <Button 
            type="link" 
            onClick={() => handleNavigate('/blog')} 
            className={`text-black font-bold nav-button ${isActive('/blog') ? 'active' : ''} !text-black hover:!text-black`}
          >
            Blog
          </Button>
          <Button 
            type="link" 
            onClick={() => handleNavigate('/about')} 
            className={`text-black font-bold nav-button ${isActive('/about') ? 'active' : ''} !text-black hover:!text-black`}
          >
            Giới Thiệu
          </Button>
        </div>
        <div className="flex space-x-4 relative">
          <Button 
            icon={<SearchOutlined />} 
            className="text-black font-bold !text-black hover:!text-black" 
          />
          <Button 
            icon={<ShoppingCartOutlined />} 
            onClick={() => handleNavigate('/cart')} 
            className={`text-black font-bold nav-button ${isActive('/cart') ? 'active' : ''} !text-black hover:!text-black`}
          />
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button 
              icon={<UserOutlined />} 
              className="text-black font-bold !text-black hover:!text-black" 
            />
            {isDropdownVisible && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                    onClick={() => handleNavigate('/admin/dashboard')}
                  >
                    Bảng Điều Khiển Quản Trị
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          .font-roboto {
            font-family: 'Roboto', sans-serif;
          }
          .ant-btn-link {
            color: black !important;
          }
          .ant-btn-link:hover {
            color: black !important;
          }
          .nav-button {
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .active {
            background-color: #90EE90 !important;
            color: white !important;
            text-decoration: none !important;
          }
          .active:hover {
            color: white !important;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;