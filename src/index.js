import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Configure axios defaults
const API_URL = process.env.REACT_APP_API_URL || 'https://e650d764-c4e9-42b9-91b6-5f59c4d0bc8b-00-184uinw57mbzk.worf.replit.dev';
axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = false; // Changed to false for CORS
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000; // 10 second timeout

console.log('🚀 Frontend API URL:', API_URL);
console.log('🚀 Environment:', process.env.NODE_ENV);
console.log('🚀 REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

// Add request interceptor to include auth token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log('📤 Request Config:', config);
    return config;
  },
  (error) => {
    console.error('📤 Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('🚨 Axios Error:', error);
    console.error('🚨 Error Config:', error.config);
    console.error('🚨 Error Response:', error.response);
    
    if (error.response?.status === 401) {
      // Clear auth data on 401 errors
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('userName');
      localStorage.removeItem('userRole');
      
      // Redirect to login if not already there
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  </React.StrictMode>
);
