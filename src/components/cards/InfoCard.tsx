import { Box, Paper } from '@mui/material'
import React from 'react'

type InfoCardProps = {
  text: string
  value: number | undefined
}

/**
 *@description this component display information
 * @param card type of props
 * @returns JSX Element
 */
const InfoCard = (card: InfoCardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 160,
          padding: '10px',
          backgroundColor: '#ffffff',
          color: 'black',
          textAlign: 'center',
        },
      }}
    >
      <Paper elevation={6}>
        <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{card.text}</p>
        <p style={{ fontSize: '30px', color: '#0a0908' }}>{card.value}</p>
      </Paper>
    </Box>
  )
}

export default InfoCard
