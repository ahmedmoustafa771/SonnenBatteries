import axios from 'axios';

// Create an Axios instance with the base URL
export const apiClient = axios.create({
  baseURL: 'production_url', // TODO: Replace with your actual production URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add any interceptors or global configurations here if needed
