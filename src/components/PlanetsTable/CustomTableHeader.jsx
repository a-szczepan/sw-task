import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const CustomTableHeader = () => {
  const theme = useTheme()

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
    }
  }))

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell sx={{ borderRadius: '8px 0 0' }}>Name</StyledTableCell>
        <StyledTableCell>Diameter</StyledTableCell>
        <StyledTableCell>Climate</StyledTableCell>
        <StyledTableCell sx={{ borderRadius: '0 8px 0 0' }}>Terrain</StyledTableCell>
      </TableRow>
    </TableHead>
  )
}

export default CustomTableHeader
