import React, { useState } from 'react';
import { FaRegPaperPlane, FaBell } from 'react-icons/fa';
import { hero4, hero5 } from '../../../assets';
import MessageList from '../pages/message/messageList';
import ChatWindow from '../pages/message/chatWindow';
import MessageInput from '../pages/message/messageInput';
import Notifications from '../pages/message/notifications';

// Dummy data
const dummyConversations = [
  {
    id: '1',
    name: 'John Doe',
    avatar: hero4,
    messages: [
      { id: 'm1', text: 'Hello, how are you?', sender: 'John Doe', timestamp: '2024-08-12 10:00 AM' },
      { id: 'm2', text: 'I’m good, thanks!', sender: 'You', timestamp: '2024-08-12 10:05 AM' },
    ]
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: hero5,
    messages: [
      { id: 'm1', text: 'Do you have any fresh tomatoes?', sender: 'Jane Smith', timestamp: '2024-08-11 03:00 PM' },
      { id: 'm2', text: 'Yes, I have some available.', sender: 'You', timestamp: '2024-08-11 03:15 PM' },
    ]
  }
];

const dummyNotifications = [
  { id: '1', text: 'New offer from John Doe', timestamp: '2024-08-12 10:00 AM' },
  { id: '2', text: 'Jane Smith sent you a message', timestamp: '2024-08-11 03:00 PM' }
];

const BuyerMessages = () => {
  const [conversations, setConversations] = useState(dummyConversations);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [notifications, setNotifications] = useState(dummyNotifications);

  const handleSendMessage = (message) => {
    if (selectedConversation && message.trim()) {
      const newMessage = {
        id: `m${Date.now()}`,
        text: message,
        sender: 'You',
        timestamp: new Date().toLocaleString(),
      };

      const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === selectedConversation.id) {
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          };
        }
        return conversation;
      });

      setConversations(updatedConversations);

      // Optionally update the selected conversation's messages in state as well
      setSelectedConversation({
        ...selectedConversation,
        messages: [...selectedConversation.messages, newMessage],
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-1/4 bg-white p-4 border-r border-gray-200 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Conversations</h2>
        <MessageList 
          conversations={conversations} 
          onSelectConversation={setSelectedConversation} 
          className="space-y-4"
        />
      </div>

      <div className="flex-1 flex flex-col bg-gray-100">
        {selectedConversation ? (
          <>
            <div className="flex-1 p-4 border-b border-gray-200 overflow-y-auto">
              <ChatWindow 
                messages={selectedConversation.messages} 
                className="space-y-2"
              />
            </div>
            <div className="p-4 bg-white flex items-center border-t border-gray-200">
              <MessageInput 
                onSendMessage={handleSendMessage} 
                placeholder="Type a message..." 
                icon={<FaRegPaperPlane className="h-6 w-6 text-primary hover:text-green-900 transition duration-200" />} 
                className="flex-1"
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a conversation to start chatting</p>
          </div>
        )}
      </div>

      <div className="w-1/4 bg-white p-4 border-l border-gray-200 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Notifications</h2>
        <Notifications 
          notifications={notifications} 
          icon={<FaBell className="text-yellow-500" />} 
          className="space-y-4"
        />
      </div>
    </div>
  );
};

export default BuyerMessages;
