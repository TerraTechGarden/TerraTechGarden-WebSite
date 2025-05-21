import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';


const initialProfile = {
  name: 'Nguyễn Văn A',
  phone: '+84 123 456 789',
  email: 'nguyenvana@gmail.com',
  addresses: [
    '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
    '456 Đường Nguyễn Huệ, Quận 3, TP. Hồ Chí Minh',
  ],
};

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<string[]>(initialProfile.addresses);
  const [form] = Form.useForm();

 
  const onFinish = (values: any) => {
    console.log('Cập nhật hồ sơ:', { ...values, addresses });
    
    message.success('Cập nhật hồ sơ thành công!');
    navigate('/customer-dashboard');
  };

  
  const addAddress = () => {
    if (addresses.length >= 5) {
      message.warning('Bạn chỉ có thể lưu tối đa 5 địa chỉ!');
      return;
    }
    setAddresses([...addresses, '']);
  };

  
  const removeAddress = (index: number) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };

  
  const updateAddress = (index: number, value: string) => {
    const newAddresses = [...addresses];
    newAddresses[index] = value;
    setAddresses(newAddresses);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Chỉnh Sửa Hồ Sơ</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <Form
            form={form}
            name="edit_profile_form"
            onFinish={onFinish}
            layout="vertical"
            initialValues={initialProfile}
          >
            <Form.Item
              label="Họ và Tên"
              name="name"
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>

            <Form.Item
              label="Số Điện Thoại"
              name="phone"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item label="Avatar">
              <Upload
                name="avatar"
                listType="picture"
                maxCount={1}
                beforeUpload={() => false} 
              >
                <Button icon={<UploadOutlined />}>Tải lên Avatar</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Ảnh Nền">
              <Upload
                name="backgroundImage"
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>Tải lên Ảnh Nền</Button>
              </Upload>
            </Form.Item>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Địa Chỉ Đã Lưu</h2>
                <Button
                  type="dashed"
                  onClick={addAddress}
                  disabled={addresses.length >= 5}
                >
                  Thêm Địa Chỉ
                </Button>
              </div>
              {addresses.map((address, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Input
                    value={address}
                    onChange={(e) => updateAddress(index, e.target.value)}
                    placeholder="Nhập địa chỉ"
                    className="mr-2"
                  />
                  <Button
                    danger
                    onClick={() => removeAddress(index)}
                  >
                    Xóa
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button
                type="primary"
                htmlType="submit"
                className="flex-1 bg-blue-500"
              >
                Lưu
              </Button>
              <Button
                className="flex-1"
                onClick={() => navigate('/customer-dashboard')}
              >
                Hủy
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;