import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { checkUserRole } from '../../../utils/auth'; 
import forestImg from '../../../assets/image/1.jpg'; 

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const role = checkUserRole();

  const handleMembershipClick = () => {
    if (role === 'guest') {
      alert('Please log in to join Membership.');
      navigate('/login');
    } else {
      navigate('/membership');
    }
  };

  return (
    <div
      className="h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${forestImg})` }}

    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Xây Dựng Terrarium Của Riêng Bạn</h1>
        <div className="space-x-4">
          <Button type="primary" size="large" onClick={() => navigate('/shop')}>
            Mua Ngay
          </Button>
          <Button type="default" size="large" className="bg-yellow-500 text-white border-none" onClick={handleMembershipClick}>
            Tham Gia Thành Viên
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;