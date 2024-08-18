import {apiClient} from "./config"


// Fetch all listings
export const apiFetchListings = () => {
    return apiClient.get('/listings');
};

// Fetch a specific listing by ID
export const apiFetchListingById = (id) => {
    return apiClient.get(`/listings/${id}`);
};

// Create a new listing
export const apiCreateListing = (listingData) => {
    return apiClient.post('/listings', listingData);
};

// Update an existing listing by ID
export const apiUpdateListing = (id, listingData) => {
    return apiClient.patch(`/listings/${id}`, listingData);
};

// Delete a listing by ID
export const apiDeleteListing = (id) => {
    return apiClient.delete(`/listings/${id}`);
};

// Fetch all saved listings
export const apiFetchSavedListings = () => {
    return apiClient.get('/savedlistings');
};

// Save a listing by ID
export const apiSaveListing = (id) => {
    return apiClient.post(`/savedlistings/${id}`);
};

// Remove a saved listing by ID
export const apiRemoveSavedListing = (id) => {
    return apiClient.delete(`/savedlistings/${id}`);
};
