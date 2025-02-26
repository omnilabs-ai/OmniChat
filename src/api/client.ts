import axios from 'axios';

const test_api_key = "test-sk1o83e"; // TODO: Replace with the actual API key

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/v1', //'https://omni-router.vercel.app/v1', // Set your base API URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${test_api_key}`, // TODO: Test Authorization
  },
}); 

export default apiClient;