import React, { useState } from 'react';
import ProfileManagementForm from './forms/profileManagementForm';
import ProfileManagementEditForm from './edit/profileManagementEditForm';
import { Edit3 } from 'lucide-react';
import { motion } from 'framer-motion';
import dummyProfilePic from '../../../assets/images/dummyProfilePic.jpg';
import dummyCoverPhoto from '../../../assets/images/dummyCoverPhoto.jpg';
import certification1 from "../../../assets/images/certification1.jpg";
import certification2 from "../../../assets/images/certification2.jpg";

const ProfileManagement = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        coverPhoto: dummyCoverPhoto,
        profilePic: dummyProfilePic,
        name: 'John Doe',
        contact: '123-456-7890',
        location: 'Springfield',
        dob: '1980-01-01',
        sex: 'Male',
        bio: 'Experienced farmer specializing in organic produce.',
        certifications: [
            { name: 'Organic Certification', image: certification1 },
            { name: 'Good Agricultural Practices', image: certification2 }
        ]
    });

    const handleAddProfile = (newProfile) => {
        setProfile(newProfile);
    };

    const handleEditClick = () => setIsEditing(true);
    const handleSaveProfile = (updatedProfile) => {
        setProfile(updatedProfile);
        setIsEditing(false);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile Management</h1>

            {profile ? (
                isEditing ? (
                    <ProfileManagementEditForm profile={profile} onSave={handleSaveProfile} />
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        {/* Cover Photo */}
                        <div className="relative">
                            <img
                                src={profile.coverPhoto}
                                alt="Cover"
                                className="w-full h-48 object-cover"
                            />
                            {/* Profile Picture */}
                            <div className="absolute bottom-0 left-6 transform translate-y-1/2">
                                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                                    <img
                                        src={profile.profilePic}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* Edit Profile Button */}
                            <button
                                onClick={handleEditClick}
                                className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition"
                            >
                                <Edit3 className="inline w-5 h-5 mr-2" />
                                Edit Profile
                            </button>
                        </div>

                        {/* Basic Info */}
                        <div className="mt-16 p-6">
                            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                            <p className="text-gray-600">{profile.contact}</p>
                            <p className="text-gray-600">{profile.location}</p>
                            <p className="text-gray-600">Date of Birth: {profile.dob}</p>
                            <p className="text-gray-600">Sex: {profile.sex}</p>
                            <p className="text-gray-600 mt-4">{profile.bio}</p>

                            {/* Certifications Section */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h3>
                                <div className="flex flex-wrap gap-6">
                                    {profile.certifications.map((cert, index) => (
                                        <div key={index} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-16 h-16 object-cover rounded-lg border border-gray-300"
                                            />
                                            <p className="text-gray-700">{cert.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
            ) : (
                <ProfileManagementForm onSave={handleAddProfile} />
            )}
        </div>
    );
};

export default ProfileManagement;
