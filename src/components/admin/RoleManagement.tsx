// src/components/admin/RoleManagement.tsx
import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';

interface User {
  id: string; // Thêm ID
  name: string;
  status: string;
  createdAt: string;
}

interface RoleManagementProps {
  role: string;
  users: User[];
}

const RoleManagement: React.FC<RoleManagementProps> = ({ role, users }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Lọc danh sách người dùng theo tên
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Quản Lý {role}</h2>
        <div className="flex space-x-3 items-center">
          {/* Thanh tìm kiếm */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg py-1 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchOutlined className="absolute left-3 top-2 text-gray-500" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            + Thêm {role}
          </button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">ID</th> {/* Cột ID */}
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Ngày tạo</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-4 text-center text-gray-500">
                Không có {role.toLowerCase()} nào.
              </td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2">{user.id}</td> {/* Hiển thị ID */}
                <td>{user.name}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded ${
                      user.status === 'Hoạt động' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{user.createdAt}</td>
                <td>
                  <EditOutlined className="mr-2 text-blue-500 cursor-pointer hover:text-blue-700" />
                  <DeleteOutlined className="text-red-500 cursor-pointer hover:text-red-700" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;