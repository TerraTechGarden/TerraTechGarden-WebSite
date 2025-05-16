// src/components/FloatingChat.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FloatingChat: React.FC = () => {
  const location = useLocation();
  const [activeChat, setActiveChat] = useState<string | null>(null);

  // Ẩn FloatingChat trên trang Checkout
  if (location.pathname === '/checkout') {
    return null;
  }

  // Đóng/mở khung chat
  const toggleChat = (chatType: string) => {
    if (activeChat === chatType) {
      setActiveChat(null); // Đóng nếu đã mở
    } else {
      setActiveChat(chatType); // Mở khung chat mới
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Nút Chat */}
      <div className="flex flex-col items-end space-y-3">
        {/* Nút Chat với CSKH */}
        <div className="relative group">
          <button
            onClick={() => toggleChat('support')}
            className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-2a2 2 0 012-2h10a2 2 0 012 2v2h-4m-6 0h6"
              />
            </svg>
          </button>
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Chat với CSKH
          </span>
        </div>

        {/* Nút Chat với AI - Thông tin Terrarium */}
        <div className="relative group">
          <button
            onClick={() => toggleChat('info')}
            className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Hỏi thông tin Terrarium
          </span>
        </div>

        {/* Nút Chat với AI - Tạo layout Terrarium */}
        <div className="relative group">
          <button
            onClick={() => toggleChat('layout')}
            className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Tạo layout Terrarium
          </span>
        </div>

        {/* Nút Chat với AI - Phân tích hình ảnh */}
        <div className="relative group">
          <button
            onClick={() => toggleChat('analysis')}
            className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4-4m0 0l4 4m-4-4V4m4 12l4-4m-4 4V4"
              />
            </svg>
          </button>
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Phân tích bể Terrarium
          </span>
        </div>
      </div>

      {/* Khung Chat */}
      {activeChat && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-gray-100 p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {activeChat === 'support' && 'Chat với CSKH'}
              {activeChat === 'info' && 'Hỏi thông tin Terrarium'}
              {activeChat === 'layout' && 'Tạo layout Terrarium'}
              {activeChat === 'analysis' && 'Phân tích bể Terrarium'}
            </h3>
            <button onClick={() => setActiveChat(null)} className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {activeChat === 'support' && (
              <p className="text-gray-600">
                Chào bạn! Tôi là nhân viên CSKH của TerraTech. Bạn cần hỗ trợ gì hôm nay?
              </p>
            )}
            {activeChat === 'info' && (
              <p className="text-gray-600">
                Chào bạn! Tôi là AI Terrarium Info. Bạn muốn biết thông tin gì về Terrarium?
              </p>
            )}
            {activeChat === 'layout' && (
              <p className="text-gray-600">
                Chào bạn! Tôi là AI Layout Creator. Hãy mô tả ý tưởng Terrarium bạn muốn tạo nhé!
              </p>
            )}
            {activeChat === 'analysis' && (
              <div>
                <p className="text-gray-600 mb-2">
                  Chào bạn! Tôi là AI Terrarium Analyzer. Vui lòng tải lên hình ảnh bể Terrarium của bạn.
                </p>
                <input type="file" accept="image/*" className="w-full p-2 border rounded-lg" />
              </div>
            )}
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;