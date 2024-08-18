import { apiClient } from "./config";

export const apiRegister = (payload) => {
  return apiClient.post("/auth/signup", payload);
};

export const apiLogin = (payload) => {
  return apiClient.post("/auth/login", payload);
};

export const apiCheckUsernameExists = async(username) => {
  return apiClient.get(`/auth/${username}`); 
};

export const apiLogout = () => {
  clearDetails();
};
