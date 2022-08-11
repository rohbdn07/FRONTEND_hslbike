import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

/**
 * @description this component is the main entry point to various routes
 * @returns JSX Elements with browser router
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <div className='MenuBar'>
            <NavBar />
          </div>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
