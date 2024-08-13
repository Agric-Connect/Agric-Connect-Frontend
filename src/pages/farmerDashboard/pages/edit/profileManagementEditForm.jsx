import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        setCertifications(files.map(file => ({
            name: file.name,
            image: URL.createObjectURL(file)
        })));
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
            certifications
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
                                <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-400">No Cover Photo</span>
                            )}
                        </div>
                        <input type="file" accept="image/*" onChange={handleCoverPhotoChange} className="mt-4" />
                    </div>
                </div>

                {/* Profile Picture */}
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Profile Picture</label>
                    <div className="flex items-center space-x-4">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {profilePic ? (
                                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-400">No Image</span>
                            )}
                        </div>
                        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
                    </div>
                </div>

                {/* Profile Fields */}
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Contact</label>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Date of Birth</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Sex</label>
                    <input
                        type="text"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Bio</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="4"
                    />
                </div>

                {/* Certifications */}
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">Upload Certifications</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleCertificationsChange}
                        className="w-full p-2 border rounded"
                    />
                    {certifications.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <img src={cert.image} alt={cert.name} className="w-16 h-16 object-cover rounded border" />
                                    <p className="text-sm">{cert.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Save and Cancel Buttons */}
                <div className="flex space-x-4">
                    <button
                        onClick={handleSave}
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => onSave(profile)} // Pass current profile if canceling
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileManagementEditForm;
