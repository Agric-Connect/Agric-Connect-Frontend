import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ notifications, icon }) => {
  return (
    <div>
      {notifications.map((notification) => (
        <div key={notification.id} className="flex items-center p-4 hover:bg-gray-100 rounded-lg transition duration-200">
          <div className="mr-3">
            {icon}
          </div>
          <div>
            <p className="text-gray-800">{notification.text}</p>
            <p className="text-gray-500 text-xs">{notification.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Notifications;
