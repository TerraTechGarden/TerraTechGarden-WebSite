// components/admin/RevenueChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'T1', revenue: 1200, users: 800 },
  { name: 'T2', revenue: 1800, users: 600 },
  { name: 'T3', revenue: 1500, users: 900 },
  { name: 'T4', revenue: 2000, users: 1200 },
  { name: 'T5', revenue: 2200, users: 1100 },
  { name: 'T6', revenue: 1900, users: 1000 },
];

const RevenueChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Biểu đồ doanh thu</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#3b82f6" name="Doanh thu" />
          <Bar dataKey="users" fill="#10b981" name="Người dùng" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;