import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? "https://api-production-740f.up.railway.app" : "http://localhost:3000";
console.log(baseURL);
export const httpClient = axios.create({
  baseURL,
});