import axios from 'axios';
import { toast } from 'react-toastify';

// Base URL Configuration
const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://agriconnect-api-h5m6.onrender.com/api/v1/users';

export const apiClient = axios.create({
    baseURL: baseUrl,
    // withCredentials: true, // Uncomment if your API requires credentials (e.g., cookies)
});

// Function to get user details from local storage
export const getDetails = () => {
    const user = {};
    user.token = localStorage.getItem('accessToken');
    user.firstName = localStorage.getItem('firstName');
    user.lastName = localStorage.getItem('lastName');
    user.userName = localStorage.getItem('userName');
    return user;
};

// Function to clear user details from local storage
export const clearDetails = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userName');
};

// Interceptor to add token to authorization header for every request
apiClient.interceptors.request.use(
    (config) => {
        const { token } = getDetails();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor to handle response errors
apiClient.interceptors.response.use(
    (response) => {
        // Return response unchanged
        return response;
    },
    (error) => {
        // Handle 401 Unauthorized error
        if (error.response.status === 401) {
            clearDetails();
            window.location.replace('/login');
        }
        // Handle 404 Not Found error
        if (error.response.status === 404) {
            toast.error('Not found');
        }
        // Return error for further handling
        return Promise.reject(error);
    }
);
