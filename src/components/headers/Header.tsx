import styled from '@emotion/styled'
import { Autocomplete, Box, Paper, TextField } from '@mui/material'
import React from 'react'

const Container = styled(Paper)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  //   backgroundColor: '#003049',
  width: '100%',
  padding: '10px',
  textAlign: 'center',
  color: '#212529',
  height: 'auto',
  fontSize: '30px',
}))

/**
 * @description this component display station information
 * @returns JSX Element
 */
const Header = () => {
  return (
    <Box sx={{ display: 'block', textAlign: 'center' }}>
      <Container>
        <p>Station Information</p>
        <Box sx={{ backgroundColor: 'white', marginLeft: '10px' }}>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={['may', 'june', 'july']}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label='Month' />}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
