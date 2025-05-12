
const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-600">Tổng doanh thu</h3>
        <p className="text-2xl font-bold">2.5 TỶ VND</p>
        <p className="text-green-500">+15.3%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-600">Nguồn lực động</h3>
        <p className="text-2xl font-bold">1,245</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-600">Tổng giao dịch</h3>
        <p className="text-2xl font-bold">12,434</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-600">Tỷ lệ chuyển đổi</h3>
        <p className="text-2xl font-bold">24.5%</p>
        <p className="text-green-500">+12.3%</p>
      </div>
    </div>
  );
};

export default QuickStats;