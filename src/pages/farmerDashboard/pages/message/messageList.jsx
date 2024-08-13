// MessageList.js
import React from 'react';

const MessageList = ({ conversations, onSelectConversation }) => {
  return (
    <ul className="space-y-4">
      {conversations.map((conversation) => (
        <li
          key={conversation.id}
          onClick={() => onSelectConversation(conversation)}
          className="flex items-center p-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
        >
          <img src={conversation.avatar} alt={conversation.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-gray-800 font-medium">{conversation.name}</p>
            <p className="text-gray-500 text-sm">Last message</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
