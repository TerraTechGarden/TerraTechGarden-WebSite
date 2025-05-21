import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageOutlined, SendOutlined } from '@ant-design/icons';

const initialMessages = [
  { id: 1, sender: 'Staff', text: 'Xin chào! Tôi có thể giúp gì cho bạn?', timestamp: '21-05-2025 11:00' },
  { id: 2, sender: 'You', text: 'Tôi muốn hỏi về đơn hàng #123.', timestamp: '21-05-2025 11:02' },
];

const ChatWithStaff: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'You',
          text: newMessage,
          timestamp: new Date().toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' }),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Trò chuyện với Staff</h1>
      <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'You' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  message.sender === 'You' ? 'bg-green-100' : 'bg-gray-100'
                }`}
              >
                <p className="text-sm font-semibold">{message.sender}</p>
                <p>{message.text}</p>
                <p className="text-xs text-gray-500">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-600 text-white p-2 rounded-r-md hover:bg-green-700"
          >
            <SendOutlined />
          </button>
        </div>
      </div>
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate('/customer-dashboard')}
      >
        Quay lại
      </button>
    </div>
  );
};

export default ChatWithStaff;