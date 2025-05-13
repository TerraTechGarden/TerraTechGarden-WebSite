import React from 'react';
import { Form, Input, Button, Checkbox, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Register: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Đăng ký với:', values);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Đăng Ký</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
          <Form
            name="register_form"
            onFinish={onFinish}
            layout="vertical"
          >
            {/* Tên tài khoản */}
            <Form.Item
              label="Tên tài khoản"
              name="username"
              rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản!' }]}
            >
              <Input placeholder="Nhập tên tài khoản" />
            </Form.Item>

            {/* Họ và Tên */}
            <Form.Item
              label="Họ và Tên"
              name="name"
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>

            {/* Số điện thoại */}
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                { pattern: /^[0-9]{10}$/, message: 'Số điện thoại không hợp lệ!' },
              ]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' },
              ]}
            >
              <Input placeholder="Nhập email của bạn" />
            </Form.Item>

            {/* Mật khẩu */}
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu!' },
                { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>

            {/* Xác nhận mật khẩu */}
            <Form.Item
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Xác nhận mật khẩu" />
            </Form.Item>

            {/* Giới tính */}
            <Form.Item
              label="Giới tính"
              name="gender"
            >
              <Select placeholder="Chọn giới tính">
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
                <Option value="other">Khác</Option>
              </Select>
            </Form.Item>

            {/* Năm sinh */}
            <Form.Item
              label="Năm sinh"
              name="birthYear"
            >
              <DatePicker picker="year" placeholder="Chọn năm sinh" />
            </Form.Item>
            {/* Checkbox chấp nhận chính sách */}
            <Form.Item
              name="acceptTerms"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Bạn phải đồng ý với các chính sách!')),
                },
              ]}
            >
              <Checkbox>
                Tôi đồng ý với các <a href="/terms">chính sách</a> của website
              </Checkbox>
            </Form.Item>

            {/* Nút Đăng Ký */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-blue-500">
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Bạn đã có tài khoản?{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate('/login')}
              >
                Đăng nhập ngay
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;