import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';

const reviews = [
  { id: 1, review: 'Tôi rất thích Terrarium này, dễ chăm sóc và đẹp mắt!', rating: 5, date: '18-05-2025' },
  { id: 2, review: 'Dịch vụ hỗ trợ khách hàng tuyệt vời, giao hàng nhanh.', rating: 4, date: '17-05-2025' },
];

const MyReviews: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Đánh giá của tôi</h1>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, index) => (
                <StarFilled key={index} className="text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-gray-500">{review.date}</span>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate('/customer-dashboard')}
      >
        Quay lại
      </button>
    </div>
  );
};

export default MyReviews;