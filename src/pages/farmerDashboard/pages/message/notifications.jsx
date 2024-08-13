// Notifications.js
import React from 'react';

const Notifications = ({ notifications, icon }) => {
  return (
    <ul className="space-y-4">
      {notifications.map((notification) => (
        <li key={notification.id} className="flex items-center bg-yellow-50 p-3 rounded-lg shadow-sm">
          <span className="mr-3">{icon}</span>
          <div>
            <p className="text-gray-800">{notification.text}</p>
            <p className="text-gray-500 text-sm">{notification.timestamp}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Notifications;
