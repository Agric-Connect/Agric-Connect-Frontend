// ChatWindow.js
import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start space-x-3">
          <div className={`p-3 rounded-lg ${message.sender === 'You' ? 'bg-blue-100 text-blue-900' : 'bg-gray-200 text-gray-800'}`}>
            <p className="text-sm">{message.text}</p>
            <p className="text-xs text-gray-500">{message.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
