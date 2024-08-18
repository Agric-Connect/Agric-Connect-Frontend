import React, { useState, useEffect } from "react";
import ProfileManagementForm from "./forms/profileManagementForm";
import ProfileManagementEditForm from "./edit/profileManagementEditForm";
import { motion } from "framer-motion";
import Pageloader from "../../../components/pageLoader";
import {
  apiGetFarmerProfiles,
  apiCreateFarmerProfile,
  apiDeleteFarmerProfile,
  apiUpdateFarmerProfile,
} from "../../../services/profiles";

const ProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiGetFarmerProfiles();
        // Assuming the response contains an array and you need to select one profile
        setProfile(response.data[0]); // Adjust based on actual API response structure
      } catch (error) {
        console.error("Error fetching profile:", error.response || error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAddProfile = async (newProfile) => {
    setIsLoading(true);
    try {
      const response = await apiCreateFarmerProfile(newProfile);
      setProfile(response.data);
    } catch (error) {
      console.error("Error creating profile:", error.response || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProfile = async (updatedProfile) => {
    setIsLoading(true);
    try {
      await apiUpdateFarmerProfile(profile.id, updatedProfile);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error.response || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProfile = async () => {
    setIsLoading(true);
    try {
      await apiDeleteFarmerProfile(profile.id);
      setProfile(null);
    } catch (error) {
      console.error("Error deleting profile:", error.response || error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      {isLoading && <Pageloader />}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {profile ? (
            isEditing ? (
              <ProfileManagementEditForm
                profile={profile}
                onSave={handleSaveProfile}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Display profile details */}
                <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
                <div className="mb-6">
                  <img src={profile.coverPhoto} alt="Cover Photo" className="w-full h-48 object-cover mb-4" />
                  <img src={profile.profilePic} alt="Profile Picture" className="w-24 h-24 rounded-full mb-4" />
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Contact:</strong> {profile.contact}</p>
                  <p><strong>Location:</strong> {profile.location}</p>
                  <p><strong>Date of Birth:</strong> {profile.dob}</p>
                  <p><strong>Sex:</strong> {profile.sex}</p>
                  <p><strong>Bio:</strong> {profile.bio}</p>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleDeleteProfile}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                >
                  Delete Profile
                </button>
              </div>
            )
          ) : (
            <ProfileManagementForm onSave={handleAddProfile} />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ProfileManagement;
