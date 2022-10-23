import { Box, Paper } from '@mui/material'
import React from 'react'

type StationInfo = {
  id: number
  name: string
  address: string
  city: string
  capacity: number
}

/**
 *
 * @param card station info props
 * @returns JSX Elements
 */
const StationCard = (card: StationInfo) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            width: '100%',
            height: '100%',
            // backgroundColor: '#003049',
            color: 'black',
            textAlign: 'start',
            padding: '20px',
            wordSpacing: '10px',
          },
        }}
      >
        <Paper elevation={24}>
          <h2>Station</h2>
          <p>Id: {card.id}</p>
          <p>Name: {card.name}</p>
          <p>Address: {card.address}</p>
          <p>City: {card.city}</p>
          <p>Capacity: {card.capacity}</p>
        </Paper>
      </Box>
    </>
  )
}

export default StationCard
