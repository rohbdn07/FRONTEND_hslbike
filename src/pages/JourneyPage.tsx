import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/headers/Header'
import DataTableList from '../components/table/DataTable'
import axiosServices from '../services/axios'

/**
 * @description this component display journey list of data
 * @returns JSX Element
 */
const JourneyPage = () => {
  const [data, setData] = React.useState([])
  const [dataNotFound, setDataNotFound] = React.useState<null>(null)

  // call axios services to fetch data
  const callApi = async (id: string, value: string) => {
    try {
      const response = await axiosServices.getAllJourneyList(value as string)
      const data = await response.data
      if (data.success === true) {
        setData(data)
        setDataNotFound(null)
      } else if (data.success === false) {
        setDataNotFound(data.message)
      }
    } catch (error) {
      console.log('Error while fetching..', error)
    }
  }

  return (
    <>
      <div className='DataTable'>
        <Header header={'Journey List'} fetchAPIFn={callApi} />
        {dataNotFound !== null ? (
          <Box sx={{ fontSize: '20px', color: 'white', marginTop: '20px' }}>{dataNotFound}</Box>
        ) : (
          <DataTableList data={data} />
        )}
      </div>
    </>
  )
}

export default JourneyPage
