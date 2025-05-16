// src/pages/admin/RevenueReport.tsx
import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Dữ liệu mẫu doanh thu
const dailyRevenue = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2025, 4, 16 - i).toLocaleDateString('vi-VN'),
  revenue: Math.floor(Math.random() * 5000000) + 2000000, // Doanh thu ngẫu nhiên từ 2M đến 7M
}));

const monthlyRevenue = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2025, 11 - i, 1).toLocaleString('vi-VN', { month: 'short', year: 'numeric' }),
  revenue: Math.floor(Math.random() * 50000000) + 30000000, // Doanh thu ngẫu nhiên từ 30M đến 80M
}));

const quarterlyRevenue = [
  { quarter: 'Q1 2025', revenue: 150000000 },
  { quarter: 'Q2 2025', revenue: 180000000 },
  { quarter: 'Q3 2025', revenue: 120000000 },
  { quarter: 'Q4 2024', revenue: 140000000 },
];

const customerTypeRevenue = {
  Customer: 250000000,
  Staff: 50000000,
  Manager: 30000000,
  Shipper: 20000000,
};

const RevenueReport: React.FC = () => {
  const [filter, setFilter] = useState<string>('daily');

  // Dữ liệu cho biểu đồ đường (theo ngày)
  const dailyChartData = {
    labels: dailyRevenue.map((item) => item.date),
    datasets: [
      {
        label: 'Doanh thu (VND)',
        data: dailyRevenue.map((item) => item.revenue),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Dữ liệu cho biểu đồ cột (theo tháng)
  const monthlyChartData = {
    labels: monthlyRevenue.map((item) => item.month),
    datasets: [
      {
        label: 'Doanh thu (VND)',
        data: monthlyRevenue.map((item) => item.revenue),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ cột (theo quý)
  const quarterlyChartData = {
    labels: quarterlyRevenue.map((item) => item.quarter),
    datasets: [
      {
        label: 'Doanh thu (VND)',
        data: quarterlyRevenue.map((item) => item.revenue),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  

  // Tính tổng doanh thu
  const totalRevenue = Object.values(customerTypeRevenue).reduce((sum, val) => sum + val, 0);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Báo Cáo Doanh Thu</h1>

      {/* Tổng quan doanh thu */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Tổng Quan Doanh Thu</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Tổng doanh thu (tính đến {new Date().toLocaleDateString('vi-VN')})</p>
            <p className="text-2xl font-bold text-blue-600">{totalRevenue.toLocaleString('vi-VN')} VND</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setFilter('daily')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              Theo ngày
            </button>
            <button
              onClick={() => setFilter('monthly')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              Theo tháng
            </button>
            <button
              onClick={() => setFilter('quarterly')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'quarterly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              Theo quý
            </button>
          </div>
        </div>
      </div>

      {/* Biểu đồ doanh thu */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Biểu đồ theo ngày */}
        {filter === 'daily' && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Doanh Thu Theo Ngày (30 ngày gần nhất)</h2>
            <Line
              data={dailyChartData}
              options={{
                responsive: true,
                plugins: { legend: { position: 'top' }, title: { display: true, text: 'Doanh Thu Theo Ngày' } },
              }}
            />
          </div>
        )}

        {/* Biểu đồ theo tháng */}
        {filter === 'monthly' && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Doanh Thu Theo Tháng (12 tháng gần nhất)</h2>
            <Bar
              data={monthlyChartData}
              options={{
                responsive: true,
                plugins: { legend: { position: 'top' }, title: { display: true, text: 'Doanh Thu Theo Tháng' } },
              }}
            />
          </div>
        )}

        {/* Biểu đồ theo quý */}
        {filter === 'quarterly' && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Doanh Thu Theo Quý (4 quý gần nhất)</h2>
            <Bar
              data={quarterlyChartData}
              options={{
                responsive: true,
                plugins: { legend: { position: 'top' }, title: { display: true, text: 'Doanh Thu Theo Quý' } },
              }}
            />
          </div>
        )}

        {/* Biểu đồ phân bổ theo loại khách hàng */}
        
      </div>
    </div>
  );
};

export default RevenueReport;