import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function NavTabs() {
  const [isJourneyTabClicked, setIsJourneyTabClicked] = React.useState(false)
  const [isStationTabClicked, setIsStationTabClicked] = React.useState(false)

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetElement = e.currentTarget.value
    if (targetElement === 'journey') {
      setIsJourneyTabClicked(true)
      setIsStationTabClicked(false)
    } else if (targetElement === 'station') {
      setIsStationTabClicked(true)
      setIsJourneyTabClicked(false)
    } else {
      setIsJourneyTabClicked(false)
      setIsStationTabClicked(false)
    }
  }

  return (
    <>
      <Typography
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          right: '0',
        }}
      >
        <Link to='/journeylist' style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              display: 'block',
              letterSpacing: '.1rem',
              backgroundColor: isJourneyTabClicked ? 'green' : 'none',
            }}
            onClick={(e) => onClickButton(e)}
            value={'journey'}
          >
            Journey
          </Button>
        </Link>
        <Link to='/stationlist' style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              display: 'block',
              backgroundColor: isStationTabClicked ? 'green' : 'none',
            }}
            onClick={(e) => onClickButton(e)}
            value={'station'}
          >
            Station
          </Button>
        </Link>
      </Typography>
    </>
  )
}
