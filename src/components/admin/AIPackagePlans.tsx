// components/admin/AIPackagePlans.tsx
const AIPackagePlans: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold">Gói Cơ bản</h3>
        <p className="text-2xl font-bold">299,000 VND</p>
        <ul className="mt-2 space-y-1 text-gray-600">
          <li>- Tối đa 100 lượt sử dụng</li>
          <li>- Hỗ trợ cơ bản</li>
          <li>- Tài liệu hướng dẫn</li>
        </ul>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Chỉnh sửa
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold">Gói Nâng cao</h3>
        <p className="text-2xl font-bold">599,000 VND</p>
        <ul className="mt-2 space-y-1 text-gray-600">
          <li>- Không giới hạn lượt sử dụng</li>
          <li>- Hỗ trợ 24/7</li>
          <li>- Tài liệu nâng cao</li>
        </ul>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Chỉnh sửa
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold">Gói Doanh nghiệp</h3>
        <p className="text-2xl font-bold">1,299,000 VND</p>
        <ul className="mt-2 space-y-1 text-gray-600">
          <li>- API tùy chỉnh</li>
          <li>- Hỗ trợ ưu tiên</li>
          <li>- Hỗ trợ đa tài khoản</li>
        </ul>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Chỉnh sửa
        </button>
      </div>
    </div>
  );
};

export default AIPackagePlans;