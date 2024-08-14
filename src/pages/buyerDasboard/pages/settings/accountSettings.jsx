import React from 'react';

const AccountSettings = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div>
        <label className="block text-gray-700">Email:</label>
        <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Password:</label>
        <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter new password" />
      </div>
      <button className="mt-6 p-2 bg-primary text-white rounded-lg">Save Changes</button>
    </div>
  );
};

export default AccountSettings;
