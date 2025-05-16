// components/admin/AdminHeader.tsx
import { SearchOutlined, BellOutlined } from '@ant-design/icons';

const AdminHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-5xl font-bold"></h1>
      <div className="flex space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="border rounded-lg py-1 px-3 focus:outline-none"
          />
          <SearchOutlined className="absolute right-2 top-2 text-gray-500" />
        </div>
        <BellOutlined className="text-xl" />
      </div>
    </div>
  );
};

export default AdminHeader;