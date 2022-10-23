import styled from '@emotion/styled'
import { Box, Paper } from '@mui/material'
import React from 'react'

const Container = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  border: '1px solid black',
  width: '100%',
  margin: '5px 0',
  '& > :not(style)': {
    m: 1,
    height: 160,
    padding: '10px',
    backgroundColor: '#ffffff',
    color: 'black',
    textAlign: 'center',
  },
}))

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
    <Container>
      <Paper
        elevation={6}
        sx={{ backgroundColor: '#231942', width: 'inherit', color: 'whitesmoke' }}
      >
        <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{card.text}</p>
        <p style={{ fontSize: '30px', color: 'inherit' }}>{card.value ? card.value : '-'}</p>
      </Paper>
    </Container>
  )
}

export default InfoCard
