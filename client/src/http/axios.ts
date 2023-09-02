import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? "https://api-production-740f.up.railway.app" : "localhost:3000";
export const httpClient = axios.create({
  baseURL,
});
