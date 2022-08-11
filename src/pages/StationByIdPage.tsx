/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'
import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import InfoCard from '../components/cards/InfoCard'
import StationCard from '../components/cards/StationCard'
import Header from '../components/headers/Header'
import axiosServices from '../services/axios'

type StationInfo = {
  month: string
  stationName: string
  stationId: number
  address: string
  kaupunki: string
  capacity: number
  totalJourney: number
  totalJourneyStarting: number
  totalJourneyEnding: number
  avgDistanceStarting_KM: number
  avgDistanceEnding_KM: number
}

interface IStationDataById {
  success: boolean
  message: string
  data: StationInfo
}

const Item = styled(Paper)(() => ({
  backgroundColor: '#003049',
  padding: '10px',
  textAlign: 'center',
  color: 'black',
  height: '100%',
}))

/**
 * @description this component fetch station info and store into local state hook
 * and then implement it into elements.
 * @returns JSX Element
 */
const StationByIdPage = () => {
  const [data, setData] = React.useState<IStationDataById>()
  const [dataNotFound, setDataNotFound] = React.useState<string>('')

  const { id } = useParams()

  React.useEffect(() => {
    async function callApi() {
      const response = await axiosServices.getStationInfoById(id as string)
      const data = response.data

      if (data !== undefined && data.success) {
        setData(data)
      } else if (data.success === false) {
        setDataNotFound(`${data.message}`)
      }
    }
    callApi()
  }, [])

  console.log('the data is', data)

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1, marginTop: '5px' }}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={3}>
            <Item>
              <StationCard
                id={data?.data.stationId as number}
                name={data?.data.stationName as string}
                address={data?.data.address as string}
                city={data?.data.kaupunki as string}
                capacity={data?.data.capacity as number}
              />
            </Item>
          </Grid>
          <Grid item xs={8} md={9}>
            <Item>
              <Paper variant='outlined'>
                <h3>Month</h3>
                <p>{data?.data.month}</p>
              </Paper>

              {dataNotFound ? (
                <Box sx={{ fontSize: '20px', color: 'white', marginTop: '20px' }}>
                  {dataNotFound}
                </Box>
              ) : (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <InfoCard
                      text='Total no.of journey (starting)'
                      value={data?.data.totalJourneyStarting}
                    />
                    <InfoCard
                      text='Total no.of journey (ending)'
                      value={data?.data.totalJourneyEnding}
                    />
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
                      text='Average distance (staring) in Km'
                      value={data?.data.avgDistanceStarting_KM}
                    />
                    <InfoCard
                      text='Average distance (ending) in Km'
                      value={data?.data.avgDistanceEnding_KM}
                    />
                  </Box>
                </>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default StationByIdPage
