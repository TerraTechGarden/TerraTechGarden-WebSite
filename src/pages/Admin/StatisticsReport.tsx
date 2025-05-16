// src/pages/admin/StatisticsReport.tsx
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// Dữ liệu mẫu
const totalOrders = 1200;
const canceledRate = 15; // 15%
const successRate = 75; // 75%
const websiteVisitors = 5000;
const interactions = 3200;
const reviewsCount = 450;

// Cập nhật imageUrl để sử dụng đường dẫn từ public/static/
const topSellingProduct = {
  name: 'Sản phẩm A',
  imageUrl: '/static/1.jpg', // Đường dẫn trực tiếp từ public/static/
  description: 'Sản phẩm phổ biến với thiết kế hiện đại và chất lượng cao.',
  quantity: 300,
};

const topRatedProduct = {
  name: 'Sản phẩm B',
  imageUrl: '/static/2.jpg', 
  description: 'Sản phẩm được đánh giá cao nhờ độ bền và hiệu suất vượt trội.',
  rating: 4.8,
};

const topRevenueProduct = {
  name: 'Sản phẩm C',
  imageUrl: '/static/3.jpg',
  description: 'Sản phẩm cao cấp mang lại doanh thu lớn cho hệ thống.',
  revenue: 150000000,
};

const topLikedProduct = {
  name: 'Sản phẩm D',
  imageUrl: '/static/4.jpg', 
  description: 'Sản phẩm được yêu thích nhờ thiết kế độc đáo và giá cả hợp lý.',
  likes: 1200,
};

const memberRegistrations = [
  { month: 'Tháng 1', count: 50 },
  { month: 'Tháng 2', count: 60 },
  { month: 'Tháng 3', count: 70 },
  { month: 'Tháng 4', count: 80 },
  { month: 'Tháng 5', count: 90 },
];

// Dữ liệu cho biểu đồ tỷ lệ đơn
const orderRateData = {
  labels: ['Tỷ lệ hủy đơn', 'Tỷ lệ đơn thành công', 'Tỷ lệ khác'],
  datasets: [
    {
      data: [canceledRate, successRate, 100 - canceledRate - successRate],
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(201, 203, 207, 0.6)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(201, 203, 207, 1)'],
      borderWidth: 1,
    },
  ],
};

// Dữ liệu cho biểu đồ đăng ký thành viên
const memberRegData = {
  labels: memberRegistrations.map((item) => item.month),
  datasets: [
    {
      label: 'Số lượng đăng ký',
      data: memberRegistrations.map((item) => item.count),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const StatisticsReport: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Báo Cáo & Thống Kê</h1>

      {/* Tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700">Tổng số đơn</h2>
          <p className="text-2xl font-bold text-blue-600">{totalOrders.toLocaleString('vi-VN')}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700">Tỷ lệ hủy đơn</h2>
          <p className="text-2xl font-bold text-red-600">{canceledRate}%</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700">Tỷ lệ đơn thành công</h2>
          <p className="text-2xl font-bold text-green-600">{successRate}%</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700">Số người truy cập</h2>
          <p className="text-2xl font-bold text-blue-600">{websiteVisitors.toLocaleString('vi-VN')}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700">Số lượng tương tác</h2>
          <p className="text-2xl font-bold text-blue-600">{interactions.toLocaleString('vi-VN')}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700">Số lượt đánh giá</h2>
          <p className="text-2xl font-bold text-blue-600">{reviewsCount.toLocaleString('vi-VN')}</p>
        </div>
      </div>

      {/* Sản phẩm nổi bật */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Sản phẩm bán chạy nhất', product: topSellingProduct, value: topSellingProduct.quantity + ' đơn' },
          { title: 'Sản phẩm được đánh giá cao nhất', product: topRatedProduct, value: topRatedProduct.rating + '/5' },
          { title: 'Sản phẩm mang lại nhiều doanh thu nhất', product: topRevenueProduct, value: topRevenueProduct.revenue.toLocaleString('vi-VN') + ' VND' },
          { title: 'Sản phẩm được yêu thích nhất', product: topLikedProduct, value: topLikedProduct.likes + ' lượt thích' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h2>
            <div className="flex items-center space-x-4">
              <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <p className="text-lg font-bold text-blue-600">{item.product.name}</p>
                <p className="text-sm text-gray-600">{item.product.description}</p>
                <p className="text-md font-medium text-gray-800 mt-2">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Biểu đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Tỷ lệ đơn hàng</h2>
          <Pie
            data={orderRateData}
            options={{
              responsive: true,
              plugins: { legend: { position: 'top' }, title: { display: true, text: 'Tỷ lệ đơn hàng' } },
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Số lượng đăng ký thành viên theo tháng</h2>
          <Bar
            data={memberRegData}
            options={{
              responsive: true,
              plugins: { legend: { position: 'top' }, title: { display: true, text: 'Đăng ký thành viên' } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsReport;