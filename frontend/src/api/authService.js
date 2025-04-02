import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Update if needed

// User Signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Server error" };
  }
};

// User Login
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token); // Store token in localStorage
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Server error" };
  }
};

// Logout User
export const logout = () => {
  localStorage.removeItem("token");
};

// Check Auth Status
export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};