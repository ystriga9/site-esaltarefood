import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

export const getSalesData = async () => {
  const response = await client.get('/sales');
  return response.data;
};

export const getStockData = async () => {
  const response = await client.get('/stock');
  return response.data;
};

export default client;
