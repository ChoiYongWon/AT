import axios from "axios";

export const atAxios = axios.create({
    baseURL: process.env.NODE_ENV=='development' ? 'http://localhost:3000/api' : 'https://www.a-spot-thur.app/api',
});

export type ATError = {
  httpStatus: number
  status: string
  message: string
  data?: any
}

// 에러 전처리 (직렬화)
atAxios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    const ERROR_CODE = error.response.status
    const errorTemplate: ATError = {
      httpStatus: ERROR_CODE,
      status: '',
      message: '',
      ...error?.response?.data
    }
    return Promise.reject(errorTemplate);
});