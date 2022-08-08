import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
/**
 * @axiosFetchAuthAPI baseurl to connect frontend to backend.
 * @baseurl "http://localhost:5050"
 */

export const axiosFetchAuthAPI: AxiosInstance & AxiosRequestConfig = axios.create({
  // baseURL: "http://localhost:5050",
  baseURL: process.env.REACT_APP_HOST || 'http://localhost:5050',
  headers: {
    'Content-Type': 'application/json',
  },
})
