import React, { useState } from "react";
import { motion } from "framer-motion";

const ProfileManagementEditForm = ({ profile, onSave }) => {
  const [coverPhoto, setCoverPhoto] = useState(profile.coverPhoto);
  const [profilePic, setProfilePic] = useState(profile.profilePic);
  const [name, setName] = useState(profile.name);
  const [contact, setContact] = useState(profile.contact);
  const [location, setLocation] = useState(profile.location);
  const [dob, setDob] = useState(profile.dob);
  const [sex, setSex] = useState(profile.sex);
  const [bio, setBio] = useState(profile.bio);
  const [certifications, setCertifications] = useState(profile.certifications);

  const handleCoverPhotoChange = (e) => {
    setCoverPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleCertificationsChange = (e) => {
    const files = Array.from(e.target.files);
    setCertifications(
      files.map((file) => ({
        name: file.name,
        image: URL.createObjectURL(file),
      }))
    );
  };

  const handleSave = () => {
    onSave({
      coverPhoto,
      profilePic,
      name,
      contact,
      location,
      dob,
      sex,
      bio,
      certifications,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

        {/* Cover Photo */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Cover Photo</label>
          <div className="flex flex-col items-center">
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
              {coverPhoto ? (
                <img
                  src={coverPhoto}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">No Cover Photo</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
              className="mt-4"
            />
          </div>
        </div>

        {/* Profile Picture */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Profile Picture
          </label>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
        </div>

        {/* Profile Fields */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Contact</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Sex</label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
          ></textarea>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Certifications
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleCertificationsChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className="mt-4 flex flex-wrap gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="w-32 h-32 overflow-hidden rounded-lg">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
                <p className="text-center text-sm mt-1">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileManagementEditForm;
