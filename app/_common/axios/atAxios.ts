import axios from "axios";

export const atAxios = axios.create({
    baseURL: process.env.NODE_ENV=='development' ? 'http://localhost:3000/api' : 'https://www.a-spot-thur.app/api',
});