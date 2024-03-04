import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import PlanetsTable from '../components/PlanetsTable/PlanetsTable'
import { Container } from '@mui/material'

const PlanetsList = () => {
  const theme = useTheme()

  return (
    <Container sx={{ padding: `${theme.spacing(2)} ${theme.spacing(1)}` }}>
      <Box sx={{ display: 'flex', textAlign: 'center' }}>
        <Typography
          fontWeight={500}
          variant="h1"
          component="h1"
          sx={{ margin: 'auto', paddingBottom: theme.spacing(4) }}>
          Star Wars Planets
        </Typography>
      </Box>
      <Paper
        sx={{ minWidth: 300, borderRadius: '8px', padding: `0 0 ${theme.spacing(2)}` }}
        square={false}>
        <PlanetsTable />
      </Paper>
    </Container>
  )
}

export default PlanetsList
