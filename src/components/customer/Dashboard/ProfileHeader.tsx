// src/components/customer/Profile/ProfileHeader.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileHeaderProps {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  backgroundImage: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  phone,
  avatar,
  backgroundImage,
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-200 rounded-lg shadow mb-8">
      <div
        className="h-48 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative -mt-16">
            <img
              src={avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
          <div className="ml-6">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-600">{phone}</p>
          </div>
          <div className="ml-auto">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => navigate('/Customer-dashboard/edit-profile')}
            >
              Chỉnh sửa hồ sơ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;