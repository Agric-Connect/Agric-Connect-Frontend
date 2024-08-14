import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ onSendMessage, placeholder, icon }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
      />
      <button
        onClick={handleSend}
        className=" p-2 text-white rounded-r-lg flex items-center justify-center"
      >
        {icon}
      </button>
    </div>
  );
};

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default MessageInput;
