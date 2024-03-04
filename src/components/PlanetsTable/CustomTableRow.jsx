import React from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { useNavigate } from 'react-router-dom'

const CustomTableRow = ({ element }) => {
  const navigate = useNavigate()
  return (
    <TableRow
      hover
      onClick={() => {
        navigate(`/planet?url=${element.url}`)
      }}>
      <TableCell>{element.name}</TableCell>
      <TableCell>{element.diameter}</TableCell>
      <TableCell>{element.climate}</TableCell>
      <TableCell>{element.terrain}</TableCell>
    </TableRow>
  )
}

export default CustomTableRow
