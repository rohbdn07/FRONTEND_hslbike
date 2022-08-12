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
  // backgroundColor: 'rgb(25 118 210)',
  backgroundColor: 'rgb(25 118 180)',
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
  const [dataNotFound, setDataNotFound] = React.useState<null>(null)
  const { id } = useParams()

  // call axios services to fetch data
  const callApi = async (id: string, value: string) => {
    try {
      const response = await axiosServices.getStationInfoById(id, value as string)
      const data = await response.data
      if (data.success === true) {
        setData(data)
        setDataNotFound(null)
      } else if (data.success === false) {
        setDataNotFound(data.message)
      }
    } catch (error) {
      console.log('Error while fetching..', error)
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: '5px', width: '80%', margin: '0 auto' }}>
        <Header header={'Station Travel Information'} id={id as string} fetchAPIFn={callApi} />

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

              {dataNotFound !== null ? (
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
                      text='Total no. of journey (starting)'
                      value={data?.data.totalJourneyStarting}
                    />
                    <InfoCard
                      text='Total no. of journey (ending)'
                      value={data?.data.totalJourneyEnding}
                    />
                    <InfoCard text='Total no. of Journey' value={data?.data.totalJourney} />
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
