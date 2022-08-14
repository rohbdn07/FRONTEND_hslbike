import React from 'react'
import DataTableStationList from '../components/table/DataTableStation'
import axiosServices from '../services/axios'

interface IStationInfo {
  id: string
  station_id: number
  kaupunki: string
  address: string
  name: string
  operaattor: string
  kapasiteet: number
}

interface IStationLists {
  success: boolean
  message: string
  data: IStationInfo
}

// fetch all list of stations, passed it into another component and display on the screen
const StationPage = (): JSX.Element => {
  const [data, setData] = React.useState<IStationLists>()

  React.useEffect(() => {
    const callApi = async () => {
      const response = await axiosServices.getAllStationList()
      setData(response.data)
    }
    callApi()
  }, [])

  return (
    <>
      <div className='DataTable'>
        <DataTableStationList data={data} />
      </div>
    </>
  )
}

export default StationPage
