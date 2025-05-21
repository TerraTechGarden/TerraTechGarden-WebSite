// src/components/customer/Profile/AddressSection.tsx
import React from 'react';

interface AddressSectionProps {
  addresses: string[];
}

const AddressSection: React.FC<AddressSectionProps> = ({ addresses }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Địa Chỉ Đã Lưu</h2>
      {addresses.length > 0 ? (
        <div className="space-y-4">
          {addresses.map((address, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">{address}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Bạn chưa có địa chỉ nào.</p>
      )}
    </div>
  );
};

export default AddressSection;