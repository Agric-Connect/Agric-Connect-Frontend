import React from 'react';
import PropTypes from 'prop-types';

const ChatWindow = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id} className="mb-4">
          <p className="text-gray-800 font-medium">{message.sender}</p>
          <p className="text-gray-600">{message.text}</p>
          <p className="text-gray-500 text-xs">{message.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;
