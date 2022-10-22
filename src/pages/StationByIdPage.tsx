import styled from '@emotion/styled'
import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import InfoCard from '../components/cards/InfoCard'
import StationCard from '../components/cards/StationCard'
import Header from '../components/headers/Header'
import { useApiFetchByType } from '../hooks/useApiFetchByType'
import { IStationDataById } from '../interfaces/types'

const Item = styled(Paper)(() => ({
  // backgroundColor: 'rgb(25 118 210)',
  backgroundColor: 'rgb(25 118 180)',
  padding: '10px',
  textAlign: 'center',
  color: 'black',
  height: '100%',
}))

const displayStationInformation = (data: IStationDataById | undefined, error: string) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4} md={3}>
        <Item>
          <StationCard
            id={data?.data?.stationId as number}
            name={data?.data?.stationName as string}
            address={data?.data?.address as string}
            city={data?.data?.kaupunki as string}
            capacity={data?.data?.capacity as number}
          />
        </Item>
      </Grid>
      <Grid item xs={8} md={9}>
        <Item>
          <Paper variant='outlined'>
            <h3>Month</h3>
            <p>{data?.data?.month}</p>
          </Paper>
          <>
            {error ? error : null}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <InfoCard
                text='Total no. of journey (starting)'
                value={data?.data?.totalJourneyStarting}
              />
              <InfoCard
                text='Total no. of journey (ending)'
                value={data?.data?.totalJourneyEnding}
              />
              <InfoCard text='Total no. of Journey' value={data?.data?.totalJourney} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <InfoCard
                text='Average distance (starting) in Km'
                value={data?.data?.avgDistanceStarting_KM}
              />
              <InfoCard
                text='Average distance (ending) in Km'
                value={data?.data?.avgDistanceEnding_KM}
              />
            </Box>
          </>
        </Item>
      </Grid>
    </Grid>
  )
}

/**
 * @description this component fetch station info and store into local state hook
 * and then implement it into elements.
 * @returns JSX Element
 */
const StationByIdPage = () => {
  const { id } = useParams() // id of station

  // this custom hook call an api and return required states
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, stationByIdData, error, selectedMonth, setSelectedMonth] = useApiFetchByType(
    'stationById',
    id as string,
  )
  console.log('the error', error)

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: '5px', width: '80%', margin: '0 auto' }}>
        <Header
          header={'Station Travel Information'}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        {displayStationInformation(stationByIdData, error)}
      </Box>
    </>
  )
}

export default React.memo(StationByIdPage)
