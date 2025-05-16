import React from 'react';

const membershipPlans = [
  {
    title: 'Gói Cơ bản',
    price: '299,000 VND',
    features: [
      'Tối đa 100 lượt sử dụng AI',
      'Hỗ trợ cơ bản qua chat',
      'Tài liệu chăm sóc Terrarium',
    ],
  },
  {
    title: 'Gói Nâng cao',
    price: '599,000 VND',
    features: [
      'Không giới hạn lượt sử dụng AI',
      'Hỗ trợ 24/7 qua chat',
      'Gợi ý layout Terrarium nâng cao',
    ],
  },
  {
    title: 'Gói Doanh nghiệp',
    price: '1,299,000 VND',
    features: [
      'Tích hợp API tùy chỉnh',
      'Hỗ trợ ưu tiên qua email',
      'Hỗ trợ đa tài khoản',
    ],
  },
];

const Membership: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Tham Gia Thành Viên</h1>
        <p className="text-center text-gray-600 mb-12">
          Mở khóa các tính năng AI độc quyền để chăm sóc và thiết kế Terrarium của bạn!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipPlans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold text-green-600 mb-4">{plan.price}</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
                Đăng Ký Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;