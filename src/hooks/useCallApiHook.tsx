import React from 'react'
import axiosServices from '../services/axios'

interface IStationDataById {
  success: boolean
  message: string
  data: StationInfo
}

interface IJourneyListData {
  success: boolean
  message: string
  data: JourneyListData
}

type JourneyListData = {
  hslData: {
    departure_station_name: string
    distance_km: number
    duration_min: number
    id: string
    return_station_name: string
  }
}

type StationInfo = {
  month: string
  stationName: string
  stationId: number
  address: string
  kaupunki: string
  capacity: number
  totalJourney: number
  totalJourneyStarting: number
  totalJourneyEnding: number
  avgDistanceStarting_KM: number
  avgDistanceEnding_KM: number
}

type ActionType = 'journeyList' | 'stationById'
type DataType = IStationDataById | IJourneyListData

// custom hook to call Api and store data into local state
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCallApiHook = (type: ActionType, id?: string): any => {
  const [data, setData] = React.useState<DataType>()
  const [dataNotFound, setDataNotFound] = React.useState<null>(null)
  const [selectedMonth, setSelectedMonth] = React.useState<string>('may')

  // use of useEffect()
  React.useEffect(() => {
    callApi()
  }, [selectedMonth, type])

  // call axios services to fetch data
  const callApi = async () => {
    let response
    try {
      switch (type) {
        case 'stationById':
          response = await axiosServices.getStationInfoById(id as string, selectedMonth)
          break
        case 'journeyList':
          response = await axiosServices.getAllJourneyList(selectedMonth)
      }
      const data = response?.data
      if (data?.success) {
        setData(data)
        setDataNotFound(null)
      } else if (!data.success) {
        setDataNotFound(data.message)
      }
    } catch (error) {
      console.log('Error while fetching..', error)
    }
  }

  return [data, dataNotFound, selectedMonth, setSelectedMonth]
}
