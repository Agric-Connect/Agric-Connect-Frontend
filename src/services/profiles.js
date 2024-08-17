import apiClient from './apiClient';

// Farmers' Profiles

export const getFarmerProfiles = () => {
    return apiClient.get('/farmers/profiles');
};

export const createFarmerProfile = (profileData) => {
    return apiClient.post('/farmers/profiles', profileData);
};

export const updateFarmerProfile = (id, profileData) => {
    return apiClient.patch(`/farmers/profiles/${id}`, profileData);
};

export const deleteFarmerProfile = (id) => {
    return apiClient.delete(`/farmers/profiles/${id}`);
};

// Buyers' Profiles

export const getBuyerProfiles = () => {
    return apiClient.get('/buyers/profiles');
};

export const createBuyerProfile = (profileData) => {
    return apiClient.post('/buyers/profiles', profileData);
};

export const updateBuyerProfile = (id, profileData) => {
    return apiClient.patch(`/buyers/profiles/${id}`, profileData);
};
