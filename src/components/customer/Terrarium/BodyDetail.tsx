// src/components/customer/Terrarium/BodyDetail.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import CSS của react-slick
import 'slick-carousel/slick/slick-theme.css'; // Import theme CSS
import forestImg from '../../../assets/image/1.jpg';
import desertImg from '../../../assets/image/2.jpg';
import tropicalImg from '../../../assets/image/3.jpg';
import succulentImg from '../../../assets/image/4.jpg';
import mossyImg from '../../../assets/image/5.jpg';
import fairyImg from '../../../assets/image/6.jpg';

interface BodyDetailProps {
  id: string;
  name: string;
  type: string;
  image: string;
}

const BodyDetail: React.FC<BodyDetailProps> = ({ id, name, type, image }) => {
  const additionalImages = [
    { id: 'img1', src: forestImg, caption: 'Hình ảnh góc 1' },
    { id: 'img2', src: desertImg, caption: 'Hình ảnh góc 2' },
    { id: 'img3', src: tropicalImg, caption: 'Hình ảnh góc 3' },
    { id: 'img4', src: succulentImg, caption: 'Hình ảnh góc 4' },
    { id: 'img5', src: mossyImg, caption: 'Hình ảnh góc 5' },
    { id: 'img6', src: fairyImg, caption: 'Hình ảnh góc 6' },
  ].filter(img => img.src !== image); // Loại bỏ hình ảnh chính

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const specs = [
    { label: 'Loại bể', value: type },
    { label: 'Kích thước', value: '30cm x 20cm x 25cm' },
    { label: 'Vật liệu', value: 'Kính cường lực, đất trồng' },
    { label: 'Cách chăm sóc', value: 'Tưới nước 1 lần/tuần, ánh sáng gián tiếp' },
    { label: 'Khả năng tùy chỉnh', value: 'Có thể thêm cây hoặc phụ kiện' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Chi tiết sản phẩm</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full">
          <h4 className="text-xl font-medium text-gray-700 mb-2">Hình ảnh bổ sung</h4>
          <Slider {...settings}>
            {additionalImages.length > 0 ? (
              additionalImages.map((img) => (
                <div key={img.id} className="p-2">
                  <img
                    src={img.src}
                    alt={`${name} - ${img.caption}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x300'; // Placeholder nếu ảnh lỗi
                    }}
                  />
                  <p className="text-center text-gray-600 mt-2">{img.caption}</p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                Không có hình ảnh bổ sung
              </div>
            )}
          </Slider>
        </div>
        <div className="w-full">
          <h4 className="text-xl font-medium text-gray-700 mb-2">Thông số kỹ thuật</h4>
          <table className="w-full text-left border-collapse">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-600 font-medium">{spec.label}</td>
                  <td className="py-2 px-4 text-gray-800">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BodyDetail;