import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import PlanetsTable from '../components/PlanetsTable'

const PlanetsList = () => {
  return (
    <Box>
      <Typography variant="h1" component="h1">
        Star Wars Planets
      </Typography>
      <Paper sx={{ minWidth: 300 }}>
        <PlanetsTable />
      </Paper>
    </Box>
  )
}

export default PlanetsList
