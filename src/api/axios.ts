import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 6000
});