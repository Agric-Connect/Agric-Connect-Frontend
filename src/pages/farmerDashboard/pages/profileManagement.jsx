import React, { useState } from 'react';

const ProfileManagement = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [location, setLocation] = useState('');
    const [documents, setDocuments] = useState([]);
    const [feedback, setFeedback] = useState('');

    const handleProfilePicChange = (e) => {
        setProfilePic(URL.createObjectURL(e.target.files[0]));
    };

    const handleSave = () => {
        // Logic to save profile changes
        setFeedback('Profile updated successfully!');
    };

    const handleCancel = () => {
        // Logic to cancel changes
        setFeedback('Profile update canceled.');
    };

    const handleDocumentUpload = (e) => {
        setDocuments([...documents, ...e.target.files]);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Profile Management</h1>

            {/* Profile Picture Section */}
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

            {/* Personal Information Section */}
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
                <label className="block text-lg font-medium mb-2">Contact Details</label>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone Number or Email"
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* Document Upload Section */}
            <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Upload Documents</label>
                <input
                    type="file"
                    multiple
                    onChange={handleDocumentUpload}
                    className="w-full p-2 border rounded"
                />
                {documents.length > 0 && (
                    <ul className="mt-2">
                        {documents.map((doc, index) => (
                            <li key={index} className="text-sm text-gray-600">{doc.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex space-x-4">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save
                </button>
                <button
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Cancel
                </button>
            </div>

            {/* Feedback */}
            {feedback && <p className="mt-4 text-green-600">{feedback}</p>}
        </div>
    );
};

export default ProfileManagement;
