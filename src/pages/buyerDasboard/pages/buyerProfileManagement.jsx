import React, { useState } from 'react';
import BuyerProfileManagementForm from './form/buyerProfileManagementForm';
import { hero3 } from '../../../assets';

const BuyerProfileManagement = () => {
  const [profileData, setProfileData] = useState({
    profilePicture: hero3,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '0123456789',
    location: 'Accra, Ghana',
    preferences: 'Prefer organic products',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newData) => {
    setProfileData(newData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {isEditing ? (
        <BuyerProfileManagementForm
          profileData={profileData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-8 transition-transform transform hover:scale-105">
          <div className="mb-6 flex items-center space-x-6">
            <img
              src={profileData.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{profileData.name}</h1>
              <p className="text-gray-500">{profileData.email}</p>
            </div>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Phone:</strong> {profileData.phone}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
            <p><strong>Preferences:</strong> {profileData.preferences}</p>
          </div>
          
          <button
            onClick={() => setIsEditing(true)}
            className="mt-6 w-full bg-primary hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyerProfileManagement;
