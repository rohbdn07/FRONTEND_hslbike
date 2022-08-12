import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
/**
 * @axiosFetchAuthAPI baseurl to connect frontend to backend.
 * @baseurl "http://localhost:5050"
 */

const axiosFetchAPI: AxiosInstance & AxiosRequestConfig = axios.create({
  // baseURL: 'http://localhost:5050',
  baseURL: process.env.REACT_APP_HOST || 'http://localhost:5050',
  headers: {
    'Content-Type': 'application/json',
  },
})

// call an api endpoint and return response
const getStationInfoById = async (id: string, value: string) => {
  const response = await axiosFetchAPI.get(`/api/hslcitybike/stationsinfo/${id}/${value}`)
  return response
}

// call an api endpoint and return response
const getAllStationList = async () => {
  const response = await axiosFetchAPI.get('/api/hslcitybike/stationslists')
  return response
}

// call an api endpoint and return response
const getAllJourneyList = async (value: string) => {
  const response = await axiosFetchAPI.get(`/api/hslcitybike/journeylist/month/${value}`)
  return response
}

export default {
  axiosFetchAPI,
  getStationInfoById,
  getAllStationList,
  getAllJourneyList,
}
