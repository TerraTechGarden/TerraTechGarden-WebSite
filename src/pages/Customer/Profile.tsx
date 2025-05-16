import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Rate } from 'antd';



const userProfile = {
  name: 'Nguyễn Văn A',
  phone: '+84 123 456 789',
  email: 'nguyenvana@gmail.com',
  avatar: 'https://via.placeholder.com/150', 
  backgroundImage: 'https://via.placeholder.com/1200x300', 
  reviews: [
    { review: 'Tôi rất thích Terrarium này, dễ chăm sóc và đẹp mắt!', rating: 5 },
    { review: 'Dịch vụ hỗ trợ khách hàng tuyệt vời, giao hàng nhanh.', rating: 4 },
  ],
  addresses: [
    '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
    '456 Đường Nguyễn Huệ, Quận 3, TP. Hồ Chí Minh',
  ],
};

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        
        <div className="relative bg-gray-200 rounded-lg shadow mb-8">
        
          <div
            className="h-48 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${userProfile.backgroundImage})` }}
          />
          <div className="p-6">
            
            <div className="flex items-center mb-4">
              <div className="relative -mt-16">
                <img
                  src={userProfile.avatar}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full border-4 border-white"
                />
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                <p className="text-gray-600">{userProfile.email}</p>
                <p className="text-gray-600">{userProfile.phone}</p>
              </div>
              <div className="ml-auto">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate('/edit-profile')}
                >
                  Chỉnh sửa hồ sơ
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Đánh Giá Của Tôi</h2>
          {userProfile.reviews.length > 0 ? (
            <Row gutter={[16, 16]}>
              {userProfile.reviews.map((review, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card>
                    <Rate disabled defaultValue={review.rating} />
                    <p className="mt-2">{review.review}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p className="text-gray-600">Bạn chưa có đánh giá nào.</p>
          )}
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-4">Địa Chỉ Đã Lưu</h2>
          {userProfile.addresses.length > 0 ? (
            <div className="space-y-4">
              {userProfile.addresses.map((address, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">{address}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Bạn chưa có địa chỉ nào.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;