// src/pages/User/Cart.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    }
  }, [cartItems]);

  // Tăng số lượng
  const increaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Giảm số lượng
  const decreaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Xóa sản phẩm
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
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
    setCartItems(cartItems.filter((item) => !item.selected));
  };

  // Tính tổng giá của các sản phẩm đã chọn
  const totalPrice = cartItems
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Chuyển đến trang thanh toán
  const handleCheckout = () => {
    if (cartItems.some((item) => item.selected)) {
      navigate('/checkout');
    } else {
      alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Giỏ Hàng</h1>
        {cartItems.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-gray-600 mb-6">Giỏ hàng của bạn hiện đang trống.</p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              onClick={() => navigate('/shop')}
            >
              Tiếp Tục Mua Sắm
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white p-6 rounded-lg shadow">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 p-4 border-b"
                >
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelect(item.id)}
                    className="mr-4"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price.toLocaleString('vi-VN')} VND</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </div>
              ))}
              <div className="mt-6 text-right">
                {cartItems.some((item) => item.selected) && (
                  <p className="text-xl font-bold">
                    Tổng: {totalPrice.toLocaleString('vi-VN')} VND
                  </p>
                )}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={removeSelected}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  disabled={!cartItems.some((item) => item.selected)}
                >
                  Xóa đã chọn
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;