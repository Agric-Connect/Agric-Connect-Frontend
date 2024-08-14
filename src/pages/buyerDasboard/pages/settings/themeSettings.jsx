import React from 'react';

const ThemeSettings = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
      <div className="flex items-center mb-4">
        <input type="radio" name="theme" className="form-radio h-5 w-5 text-blue-600" />
        <span className="ml-2 text-gray-700">Light Mode</span>
      </div>
      <div className="flex items-center mb-4">
        <input type="radio" name="theme" className="form-radio h-5 w-5 text-blue-600" />
        <span className="ml-2 text-gray-700">Dark Mode</span>
      </div>
      <button className="mt-6 p-2 bg-primary text-white rounded-lg">Apply Theme</button>
    </div>
  );
};

export default ThemeSettings;
