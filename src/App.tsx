import React from 'react'
import './App.css'
import MenuBar from './components/navbar/Menubar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <div className='MenuBar'>
            <MenuBar />
          </div>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
