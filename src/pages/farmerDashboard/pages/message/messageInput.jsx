// MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, placeholder, icon }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex w-full items-center bg-gray-50 p-2 rounded-lg shadow-inner">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
      />
      <button
        onClick={handleSendMessage}
        className="ml-3 p-2 rounded-full text-primary"
      >
        {icon}
      </button>
    </div>
  );
};

export default MessageInput;
