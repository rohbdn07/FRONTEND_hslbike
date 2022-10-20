import { Box } from '@mui/material'
import React from 'react'

import Header from '../components/headers/Header'
import DataTableList from '../components/table/DataTable'
import { useCallApiHook } from '../hooks/useCallApiHook'

/**
 * @description this component display journey list of data
 * @returns JSX Element
 */
const JourneyPage = () => {
  // this custom hook call an api and return required states
  const [data, dataNotFound, selectedMonth, setSelectedMonth] = useCallApiHook('journeyList')

  return (
    <>
      <div className='DataTable'>
        <Header
          header={'Journey List'}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
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
