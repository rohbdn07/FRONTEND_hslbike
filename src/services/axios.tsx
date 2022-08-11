import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
/**
 * @axiosFetchAuthAPI baseurl to connect frontend to backend.
 * @baseurl "http://localhost:5050"
 */

const axiosFetchStationInfoByIdAPI: AxiosInstance & AxiosRequestConfig = axios.create({
  // baseURL: 'http://localhost:5050',
  baseURL: process.env.REACT_APP_HOST || 'http://localhost:5050',
  headers: {
    'Content-Type': 'application/json',
  },
})

// call an api endpoint and return response
const getStationInfoById = async (id: string) => {
  const response = await axiosFetchStationInfoByIdAPI.get(`/api/hslcitybike/stationsinfo/${id}/may`)
  return response
}

export default {
  axiosFetchStationInfoByIdAPI,
  getStationInfoById,
}
