import apiClient from '../apiClient';

// Fetch all listings
export const fetchListings = () => {
    return apiClient.get('/listings');
};

// Fetch a specific listing by ID
export const fetchListingById = (id) => {
    return apiClient.get(`/listings/${id}`);
};

// Create a new listing
export const createListing = (listingData) => {
    return apiClient.post('/listings', listingData);
};

// Update an existing listing by ID
export const updateListing = (id, listingData) => {
    return apiClient.patch(`/listings/${id}`, listingData);
};

// Delete a listing by ID
export const deleteListing = (id) => {
    return apiClient.delete(`/listings/${id}`);
};

// Fetch all saved listings
export const fetchSavedListings = () => {
    return apiClient.get('/savedlistings');
};

// Save a listing by ID
export const saveListing = (id) => {
    return apiClient.post(`/savedlistings/${id}`);
};

// Remove a saved listing by ID
export const removeSavedListing = (id) => {
    return apiClient.delete(`/savedlistings/${id}`);
};
