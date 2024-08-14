import React from 'react';

const NotificationSettings = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <span className="ml-2 text-gray-700">Enable Email Notifications</span>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <span className="ml-2 text-gray-700">Enable SMS Notifications</span>
      </div>
      <button className="mt-6 p-2 bg-primary text-white rounded-lg">Save Preferences</button>
    </div>
  );
};

export default NotificationSettings;
