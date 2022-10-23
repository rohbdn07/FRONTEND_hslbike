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
  backgroundColor: '#22577a',
  padding: '10px',
  marginBottom: '10px',
  textAlign: 'center',
  color: 'black',
  minHeight: '250px',
  position: 'relative',
  // width: '250px',
  // minWidth: 'inherit',
}))

const displayStationInformation = (data: IStationDataById | undefined, error: string) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4} lg={4}>
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
      <Grid item xs={12} md={8} lg={8}>
        <Item>
          <Paper variant='outlined'>
            <h3>Month</h3>
            <p>{data?.data?.month}</p>
          </Paper>
          <>
            {error ? error : null}
            <Box
              sx={{
                display: 'inline-flex',
                margin: '10px 0',
                width: '100%',
                gap: '5px',
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
                display: 'inline-flex',
                width: '100%',
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

  return (
    <>
      <Box sx={{ marginTop: '5px', width: '80%', margin: '0 auto' }}>
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
