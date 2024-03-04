import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { useLocation } from 'react-router-dom'
import { useGetPlanetInfoQuery } from '../store/apiService'

const PlanetInfo = () => {
  const location = useLocation()
  const planetUrl = new URLSearchParams(location.search).get('url')
  const { data: planet, isError, isLoading, isSuccess } = useGetPlanetInfoQuery(planetUrl)
  const [residents, setResidents] = useState([])

  useEffect(() => {
    if (isSuccess) {
      getResidents(planet.residents)
    }
  }, [planet])

  const getResidents = async (urls) => {
    try {
      const names = await Promise.all(
        urls.map(async (residentUrl) => {
          const response = await fetch(residentUrl)
          const data = await response.json()
          return data.name
        })
      )
      setResidents(names)
    } catch (err) {
      console.log('Resident names promise err', err)
    }
  }

  return (
    <Box>
      <Paper>
        <Typography variant="h2" component="h1">
          Planet {planet?.name}
        </Typography>
        <Typography variant="h2" component="h1">
          diameter: {planet?.diameter}
        </Typography>
        <Typography variant="h2" component="h1">
          climate: {planet?.climate}
        </Typography>
        <Typography variant="h2" component="h1">
          terrain: {planet?.terrain}
        </Typography>
        <Typography variant="h2" component="h1">
          gravity: {planet?.gravity}
        </Typography>
        <Typography variant="h2" component="h1">
          population: {planet?.population}
        </Typography>
        <Typography variant="h2" component="h1">
          orbital period: {planet?.orbital_period}
        </Typography>
        <Typography variant="h2" component="h1">
          residents: {residents.length >= 1 ? residents.join(', ') : 'unknow'}
        </Typography>
      </Paper>
    </Box>
  )
}

export default PlanetInfo
