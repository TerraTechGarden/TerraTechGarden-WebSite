// src/components/TerrariumReviews.tsx
import React from 'react';

interface Review {
  id: string;
  fullName: string;
  avatar: string;
  productImage: string;
  rating: number;
  comment: string;
  date: string;
}

interface TerrariumReviewsProps {
  reviews: Review[];
}

const TerrariumReviews: React.FC<TerrariumReviewsProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Đánh Giá Terrarium</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-600">Chưa có đánh giá nào.</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-4 rounded-lg shadow flex">
              <img
                src={review.avatar}
                alt={review.fullName}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="flex items-center mb-2">
                  <span className="font-semibold mr-2">{review.fullName}</span>
                  {renderStars(review.rating)}
                </div>
                <img
                  src={review.productImage}
                  alt="Hình ảnh đánh giá"
                  className="w-32 h-32 object-cover rounded mb-2"
                />
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-gray-500 text-sm mt-2">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TerrariumReviews;