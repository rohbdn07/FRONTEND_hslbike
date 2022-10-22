import { AxiosResponse } from 'axios'
import React, { Dispatch, SetStateAction } from 'react'

import { IJourneyListData, IStationDataById } from '../interfaces/types'
import axiosServices from '../services/axios'

type ActionType = 'journeyList' | 'stationById'

type returnType = [
  IJourneyListData | undefined,
  IStationDataById | undefined,
  string,
  string,
  Dispatch<SetStateAction<string>>,
]

/**
 * @description this custom hook calls Apis and store data into its local state
 * according to parameter(s) passed in.
 * @param type accept only action type such as: ('journeyList' or 'stationById')
 * @param id string
 * @returns [journeyData, stationByIdData, error, selectedMonth, setSelectedMonth]
 */
export const useApiFetchByType = (type: ActionType, id?: string): returnType => {
  const [journeyData, setJourneyData] = React.useState<IJourneyListData | undefined>(undefined)
  const [stationByIdData, setStationByIdData] = React.useState<IStationDataById | undefined>(
    undefined,
  )
  const [error, setError] = React.useState<string>('')
  const [selectedMonth, setSelectedMonth] = React.useState<string>('may')

  // call axios services to fetch data
  const callApi = async () => {
    let responseFromStationDataById: AxiosResponse<IStationDataById>
    let coreData: IStationDataById

    let responseFromJourneyData: AxiosResponse<IJourneyListData>
    let coreJourneyData: IJourneyListData
    try {
      switch (type) {
        case 'stationById':
          responseFromStationDataById = await axiosServices.getStationInfoById(
            id as string,
            selectedMonth,
          )
          coreData = responseFromStationDataById?.data
          if (coreData.success) {
            setStationByIdData(coreData)
          }
          break
        case 'journeyList':
          responseFromJourneyData = await axiosServices.getAllJourneyList(selectedMonth)
          coreJourneyData = responseFromJourneyData?.data
          if (coreJourneyData.success) {
            setJourneyData(coreJourneyData)
          }
          break

        default:
          setError('Something went wrong!!!')
          throw new Error('Action type NOT match')
      }
    } catch (error) {
      console.log('Error while fetching..', error)
    }
  }
  // use of useEffect()
  React.useEffect(() => {
    callApi()
  }, [selectedMonth, type])

  return [journeyData, stationByIdData, error, selectedMonth, setSelectedMonth]
}
