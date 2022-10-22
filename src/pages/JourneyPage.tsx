import React from 'react'

import Header from '../components/headers/Header'
import DataTableList from '../components/table/DataTable'
import { useApiFetchByType } from '../hooks/useApiFetchByType'

/**
 * @description this component display journey list of data
 * @returns JSX Element
 */
const JourneyPage = () => {
  // this custom hook calls an api and return required states
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [journeyData, _, error, selectedMonth, setSelectedMonth] = useApiFetchByType('journeyList')
  return (
    <>
      <div className='DataTable'>
        <Header
          header={'Journey List'}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <DataTableList data={journeyData} />
        {error ? error : null}
      </div>
    </>
  )
}

export default React.memo(JourneyPage)
