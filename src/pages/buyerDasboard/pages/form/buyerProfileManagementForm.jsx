import React, { useState } from 'react';

const BuyerProfileManagementForm = ({ profileData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(profileData || {
    profilePicture: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    preferences: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Manage Profile</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Profile Picture</label>
        <input
          type="file"
          name="profilePicture"
          className="border p-2 w-full"
          onChange={(e) => handleChange(e)}
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Preferences</label>
        <textarea
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleSave}
          className="bg-primary text-white p-2 rounded-lg"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white p-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyerProfileManagementForm;
