import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Projects API
export const getProjects = () => apiClient.get('/projects');

// Blogs API
export const getBlogs = () => apiClient.get('/blogs');

// Certificates API
export const getCerts = () => apiClient.get('/certs');

// Contact API
export const submitContact = (data) => apiClient.post('/contact', data);

// Health check
export const checkHealth = () => apiClient.get('/health');
