import apiClient from '../apiClient';

// Fetch farmland information
export const fetchFarmlandInformation = () => {
    return apiClient.get('/farmland/information');
};

// Create or update farmland information
export const createOrUpdateFarmlandInformation = (farmlandData) => {
    return apiClient.post('/farmland/information', farmlandData);
};
