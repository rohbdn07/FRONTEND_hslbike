import React from 'react'
import './App.css'
import MenuBar from './components/navbar/Menubar'
import DataTableList from './components/table/DataTable'

function App() {
  return (
    <>
      <div className='App'>
        <div className='MenuBar'>
          <MenuBar />
        </div>
        <div className='DataTable'>
          <DataTableList />
        </div>
      </div>
    </>
  )
}

export default App
