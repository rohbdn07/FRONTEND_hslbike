import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import JourneyPage from '../pages/JourneyPage'
import StationByIdPage from '../pages/StationByIdPage'
import StationPage from '../pages/StationPage'

/**
 *
 * @returns various routes to display pages
 */
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/journeylist' />} />
        <Route path='/journeylist' element={<JourneyPage />} />
        <Route path='/stationlist' element={<StationPage />} />
        <Route path='/stationlist/:id' element={<StationByIdPage />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>Opps! this route doesnot exist. There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes
