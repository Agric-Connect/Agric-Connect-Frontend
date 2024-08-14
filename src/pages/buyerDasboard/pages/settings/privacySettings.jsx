import React from 'react';

const PrivacySettings = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <span className="ml-2 text-gray-700">Make my profile public</span>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <span className="ml-2 text-gray-700">Allow others to contact me</span>
      </div>
      <button className="mt-6 p-2 bg-primary text-white rounded-lg">Save Privacy Settings</button>
    </div>
  );
};

export default PrivacySettings;
