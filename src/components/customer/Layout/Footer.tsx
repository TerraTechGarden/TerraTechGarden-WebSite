import { Button, Input } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>Phone: +84 123 456 789</p>
          <p>Email: support@terratech.com</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FacebookOutlined className="text-2xl" />
            <TwitterOutlined className="text-2xl" />
            <InstagramOutlined className="text-2xl" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe for the latest tips & offers!</p>
          <div className="flex">
            <Input placeholder="Enter your email" className="mr-2" />
            <Button type="primary" className="bg-yellow-500">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2025 TerraTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;