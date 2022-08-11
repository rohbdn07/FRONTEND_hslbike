import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import JourneyPage from '../pages/JourneyPage'
import StationPage from '../pages/StationPage'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/journeylist' element={<JourneyPage />} />
        <Route path='/' element={<Navigate replace to='/journeylist' />} />
        <Route path='/stationlist' element={<StationPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes
