import { apiClient } from "./config";

export const apiRegister = (payload) => {
  return apiClient.post("/auth/signup", payload);
};

export const apiLogin = (payload) => {
  return apiClient.post("/auth/login", payload);
};


export const apiLogout = () => {
  clearDetails();
};
