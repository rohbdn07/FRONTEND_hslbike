import styled from '@emotion/styled'
import { Autocomplete, Box, TextField } from '@mui/material'
import React from 'react'

type HeaderProps = {
  selectedMonth: string
  header: string
  setSelectedMonth: (val: string) => void
}

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // backgroundColor: '#003049',
  width: '100%',
  padding: '10px',
  textAlign: 'center',
  color: '#212529',
  height: 'auto',
  fontSize: '30px',
}))

const options = ['may', 'june', 'july']

/**
 * @description this component display station information
 * @returns JSX Element
 */
const Header: React.FC<HeaderProps> = ({ header, selectedMonth, setSelectedMonth }) => {
  return (
    <Box sx={{ display: 'block', textAlign: 'center' }}>
      <Container>
        <p>{header}</p>
        <Box sx={{ backgroundColor: 'white', marginLeft: '10px' }}>
          <Autocomplete
            value={selectedMonth}
            onChange={(_, newValue: string | null) => {
              setSelectedMonth(newValue as string)
            }}
            id='controllable-states-demo'
            options={options}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label='Month' />}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
