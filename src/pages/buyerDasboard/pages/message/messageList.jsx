import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ conversations, onSelectConversation }) => {
  return (
    <div>
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => onSelectConversation(conversation)}
          className="cursor-pointer p-4 flex items-center hover:bg-gray-100 rounded-lg transition duration-200"
        >
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-800 font-medium">{conversation.name}</p>
            <p className="text-gray-600 text-sm">{conversation.messages[0].text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  conversations: PropTypes.array.isRequired,
  onSelectConversation: PropTypes.func.isRequired,
};

export default MessageList;
