// src/components/customer/Profile/ReviewSection.tsx
import React from 'react';
import { Rate } from 'antd';

interface Review {
  review: string;
  rating: number;
}

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Đánh Giá Của Tôi</h2>
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <Rate disabled value={review.rating} />
              <p className="mt-2 text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Bạn chưa có đánh giá nào.</p>
      )}
    </div>
  );
};

export default ReviewSection;