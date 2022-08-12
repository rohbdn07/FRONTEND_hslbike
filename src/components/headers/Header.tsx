import styled from '@emotion/styled'
import { Autocomplete, Box, TextField } from '@mui/material'
import React from 'react'

type HeaderProps = {
  id?: string
  header: string
  fetchAPIFn: (id: string, value: string) => void
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

/**
 * @description this component display station information
 * @returns JSX Element
 */
const Header = (props: HeaderProps) => {
  const options = ['may', 'june', 'july']
  const [value, setValue] = React.useState<string | null>(options[0])

  // useEffect method calls callbackFunction.
  React.useEffect(() => {
    props.fetchAPIFn(props.id as string, value as string)
  }, [value, props.id])

  return (
    <Box sx={{ display: 'block', textAlign: 'center' }}>
      <Container>
        <p>{props.header}</p>
        <Box sx={{ backgroundColor: 'white', marginLeft: '10px' }}>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue)
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
