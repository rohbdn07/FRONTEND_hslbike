export interface IStationDataById {
  success: boolean
  message: string
  data: StationInfo
}

export interface IJourneyListData {
  success: boolean
  message: string
  data: JourneyListData[]
}

export type JourneyListData = {
  hslData: {
    departure_station_name: string
    distance_km: number
    duration_min: number
    id: string
    return_station_name: string
  }
}

export type StationInfo = {
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
