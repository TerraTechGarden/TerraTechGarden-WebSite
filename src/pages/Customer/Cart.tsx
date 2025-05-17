// src/pages/User/Cart.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import forestImg from '../../assets/image/1.jpg';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selected: boolean;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Khởi tạo giỏ hàng từ localStorage hoặc thêm sản phẩm mặc định khi mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    if (storedCart.length > 0) {
      setCartItems(storedCart);
    } else {
      const defaultItem = [
        {
          id: '1',
          name: 'Forest Terrarium',
          price: 1475000,
          image: forestImg,
          quantity: 1,
          selected: false,
        },
      ];
      setCartItems(defaultItem);
      localStorage.setItem('cartItems', JSON.stringify(defaultItem));
    }
  }, []); // Sử dụng mảng rỗng để chạy một lần khi mount

  // Đồng bộ cartItems với localStorage mỗi khi thay đổi
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cartItems');
      toast.info('Giỏ hàng của bạn đã trống!', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }, [cartItems]);

  // Tăng số lượng
  const increaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.success('Đã tăng số lượng sản phẩm!', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Giảm số lượng
  const decreaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    toast.success('Đã giảm số lượng sản phẩm!', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Xóa sản phẩm
  const removeItem = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error(`Đã xóa ${item?.name} khỏi giỏ hàng!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Chọn/xóa sản phẩm
  const toggleSelect = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Xóa các sản phẩm đã chọn
  const removeSelected = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    setCartItems(cartItems.filter((item) => !item.selected));
    toast.error(`Đã xóa ${selectedItems.length} sản phẩm đã chọn!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Tính tổng giá của các sản phẩm đã chọn
  const totalPrice = cartItems
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Chuyển đến trang thanh toán
  const handleCheckout = () => {
    if (cartItems.some((item) => item.selected)) {
      navigate('/checkout');
      toast.success('Chuyển đến trang thanh toán!', {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.warn('Vui lòng chọn ít nhất một sản phẩm để thanh toán!', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Giỏ Hàng</h1>
        {cartItems.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
            <p className="text-gray-600 mb-4">Giỏ hàng của bạn hiện đang trống.</p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={() => navigate('/shop')}
            >
              Tiếp Tục Mua Sắm
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            {/* Tiêu đề cột */}
            <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700">
              <div className="col-span-1 text-center">
                <input
                  type="checkbox"
                  checked={cartItems.every((item) => item.selected)}
                  onChange={() => {
                    setCartItems(
                      cartItems.map((item) => ({ ...item, selected: !cartItems.every((i) => i.selected) }))
                    );
                  }}
                  className="accent-orange-500"
                />
              </div>
              <div className="col-span-4">Sản Phẩm</div>
              <div className="col-span-2 text-center">Đơn Giá</div>
              <div className="col-span-2 text-center">Số Lượng</div>
              <div className="col-span-2 text-center">Tổng</div>
              <div className="col-span-1 text-center">Hành Động</div>
            </div>

            {/* Danh sách sản phẩm */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-200 items-center"
              >
                {/* Checkbox */}
                <div className="col-span-1 flex justify-center sm:justify-start">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelect(item.id)}
                    className="accent-orange-500"
                  />
                </div>

                {/* Hình ảnh và tên sản phẩm */}
                <div className="col-span-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-gray-200"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-800">{item.name}</h3>
                  </div>
                </div>

                {/* Đơn giá */}
                <div className="col-span-2 text-center text-gray-700 text-sm sm:text-base">
                  {item.price.toLocaleString('vi-VN')} VND
                </div>

                {/* Số lượng */}
                <div className="col-span-2 flex justify-center items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition duration-200"
                  >
                    -
                  </button>
                  <span className="text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition duration-200"
                  >
                    +
                  </button>
                </div>

                {/* Tổng */}
                <div className="col-span-2 text-center text-orange-600 font-medium text-sm sm:text-base">
                  {(item.price * item.quantity).toLocaleString('vi-VN')} VND
                </div>

                {/* Nút xóa */}
                <div className="col-span-1 flex justify-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600 font-medium text-sm sm:text-base"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}

            {/* Tổng giá và nút thanh toán */}
            <div className="p-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 bg-gray-50">
              <button
                onClick={removeSelected}
                className="text-red-500 hover:text-red-600 font-medium mb-4 sm:mb-0"
                disabled={!cartItems.some((item) => item.selected)}
              >
                Xóa đã chọn
              </button>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <p className="text-lg font-semibold text-gray-800">
                  Tổng: <span className="text-orange-600">{totalPrice.toLocaleString('vi-VN')} VND</span>
                </p>
                <button
                  onClick={handleCheckout}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;