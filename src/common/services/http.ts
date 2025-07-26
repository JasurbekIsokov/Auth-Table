import axios from 'axios';

import config from '@/config';

import storage from './storage';

const pureHttp = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'ru',
    'Content-Type': 'application/json'
  }
});

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'ru',
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(axiosConfig => {
  const accessToken = storage.local.get(config.api.accessTokenKey) || '';

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axiosConfig;
});

export default { pureRequest: pureHttp, request: http };
