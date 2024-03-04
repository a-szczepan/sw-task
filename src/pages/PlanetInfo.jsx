import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useGetPlanetInfoQuery } from '../store/apiService'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

const Property = ({ propertyName }) => {
  const theme = useTheme()

  return (
    <Typography variant="subtitle2" component="span" sx={{ marginRight: theme.spacing(3) }}>
      {propertyName}
      {': '}
    </Typography>
  )
}

const Value = ({ propertyValue }) => {
  return (
    <Typography variant="subtitle1" component="span">
      {propertyValue}
    </Typography>
  )
}

const PlanetInfo = () => {
  const location = useLocation()
  const planetUrl = new URLSearchParams(location.search).get('url')
  const { data: planet, isSuccess } = useGetPlanetInfoQuery(planetUrl)
  const [residents, setResidents] = useState([])
  const theme = useTheme()

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
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: `${theme.spacing(6)} ${theme.spacing(1)}`
        }}>
        <Box sx={{ display: 'flex', textAlign: 'center' }}>
          <Typography
            fontWeight={400}
            variant="h3"
            component="h1"
            sx={{ margin: 'auto', paddingBottom: theme.spacing(4) }}>
            Planet {planet?.name}
          </Typography>
        </Box>
        <Paper
          sx={{ minWidth: 300, borderRadius: '8px', padding: `${theme.spacing(2)}` }}
          square={false}>
          <Box>
            <Property propertyName={'name'} />
            <Value propertyValue={planet?.name} />
          </Box>
          <Box>
            <Property propertyName={'diameter'} />
            <Value propertyValue={planet?.diameter} />
          </Box>
          <Box>
            <Property propertyName={'climate'} />
            <Value propertyValue={planet?.climate} />
          </Box>
          <Box>
            <Property propertyName={'terrain'} />
            <Value propertyValue={planet?.terrain} />
          </Box>
          <Box>
            <Property propertyName={'gravity'} />
            <Value propertyValue={planet?.gravity} />
          </Box>
          <Box>
            <Property propertyName={'population'} />
            <Value propertyValue={planet?.population} />
          </Box>
          <Box>
            <Property propertyName={'orbital period'} />
            <Value propertyValue={planet?.orbital_period} />
          </Box>
          <Box>
            <Property propertyName={'residents'} />
            <Value propertyValue={residents.length >= 1 ? residents.join(', ') : 'unknow'} />
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default PlanetInfo
