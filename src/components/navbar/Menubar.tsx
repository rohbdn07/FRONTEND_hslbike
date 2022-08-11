import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from '@mui/material'
import NavTabs from '../tabs/NavTab'

const pages = ['Journey', 'Stations']

const MenuBar = (): JSX.Element => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            position: 'relative',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: 'inherit',
            margin: '10px ',
            padding: '10px',
          }}
        >
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HSL CITY BIKE
          </Typography>
          <NavTabs />
        </Box>
      </Container>
    </AppBar>
  )
}
export default MenuBar
