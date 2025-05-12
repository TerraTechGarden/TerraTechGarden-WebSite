import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  
  const onFinish = (values: any) => {
    console.log('Đăng nhập với:', values);
    
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Đăng Nhập</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <Form
            name="login_form"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
            >
              <Input placeholder="Nhập email của bạn" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-blue-500">
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Bạn chưa có tài khoản?{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate('/register')}
              >
                Đăng ký ngay
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;