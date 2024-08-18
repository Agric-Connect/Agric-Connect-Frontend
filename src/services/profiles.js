import {apiClient} from './config';

// Farmers' Profiles

export const apiGetFarmerProfiles = () => {
    return apiClient.get('/farmers/profiles');
};

export const apiCreateFarmerProfile = (profileData) => {
    return apiClient.post('/farmers/profiles', profileData);
};

export const apiUpdateFarmerProfile = (id, profileData) => {
    return apiClient.patch(`/farmers/profiles/${id}`, profileData);
};

export const apiDeleteFarmerProfile = (id) => {
    return apiClient.delete(`/farmers/profiles/${id}`);
};

// Buyers' Profiles

export const apiGetBuyerProfiles = () => {
    return apiClient.get('/buyers/profiles');
};

export const apiCreateBuyerProfile = (profileData) => {
    return apiClient.post('/buyers/profiles', profileData);
};

export const apiUpdateBuyerProfile = (id, profileData) => {
    return apiClient.patch(`/buyers/profiles/${id}`, profileData);
};
