// components/admin/EmployeeList.tsx
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const employees = [
  { name: 'Nguyễn Văn A', role: 'Quản lý', status: 'Hoạt động', createdAt: '15/01/2024' },
  { name: 'Trần Thị B', role: 'Nhân viên', status: 'Hoạt động', createdAt: '20/01/2024' },
  { name: 'Lê Văn C', role: 'Quản lý', status: 'Tạm khóa', createdAt: '10/01/2024' },
  { name: 'Phạm Thị D', role: 'Nhân viên', status: 'Hoạt động', createdAt: '05/01/2024' },
];

const EmployeeList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Quản lý nhân viên</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          + Thêm nhân viên
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Tên nhân viên</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
            <th>Ngày tạo</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{employee.name}</td>
              <td>{employee.role}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded ${
                    employee.status === 'Hoạt động' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {employee.status}
                </span>
              </td>
              <td>{employee.createdAt}</td>
              <td>
                <EditOutlined className="mr-2 text-blue-500 cursor-pointer" />
                <DeleteOutlined className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;