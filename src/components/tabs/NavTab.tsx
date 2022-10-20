import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

// active styles for Nav tab button
const activeStyle = {
  backgroundColor: '#003049',
  textDecoration: 'none',
}

/**
 * @description this component handles click event on nav bar tabs
 * @returns JSX Elements
 */
export default function NavTabs() {
  return (
    <>
      <Typography
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          right: '0',
        }}
      >
        <NavLink to='/journeylist' style={({ isActive }) => (isActive ? activeStyle : {})}>
          <Button
            sx={{
              color: 'white',
              display: 'block',
              letterSpacing: '.1rem',
            }}
          >
            Journey
          </Button>
        </NavLink>
        <NavLink to='/stationlist' style={({ isActive }) => (isActive ? activeStyle : {})}>
          <Button
            sx={{
              color: 'white',
              display: 'block',
            }}
          >
            Station
          </Button>
        </NavLink>
      </Typography>
    </>
  )
}
