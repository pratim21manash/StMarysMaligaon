import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const adminApi = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important: sends cookies automatically
  headers: {
    "Content-Type": "application/json",
  },
});

// DO NOT add Authorization header - cookies handle authentication
adminApi.interceptors.request.use((config) => {
  console.log("API Request:", config.method?.toUpperCase(), config.url);
  return config;
});

adminApi.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.status, error.response?.data);

    if (
      error.response?.status === 401 &&
      !window.location.pathname.includes("/admin/login")
    ) {
      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  },
);

export default adminApi;
