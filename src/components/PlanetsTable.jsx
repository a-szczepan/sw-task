import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import { useGetPlanetsListQuery } from '../store/apiService'
import CircularProgress from '@mui/material/CircularProgress'

const CustomTablePagination = ({ total, currentPage, handleClick }) => {
  return (
    <TablePagination
      count={total}
      rowsPerPage={10}
      rowsPerPageOptions={[]}
      page={currentPage - 1}
      onPageChange={(event, page) => {
        handleClick(page + 1 >= 1 ? page + 1 : 1)
      }}
    />
  )
}

const ProductTableRow = ({ element }) => {
  const navigate = useNavigate();
  return (
    <TableRow sx={{ backgroundColor: element.color }} onClick={() => {navigate(`/planet?url=${element.url}`)}}>
      <TableCell>{element.name}</TableCell>
      <TableCell>{element.diameter}</TableCell>
      <TableCell>{element.climate}</TableCell>
      <TableCell>{element.terrain}</TableCell>
    </TableRow>
  )
}

const PlanetsTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: planets, error, isLoading } = useGetPlanetsListQuery(currentPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Diameter</TableCell>
            <TableCell>Climate</TableCell>
            <TableCell>Terrain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {planets &&
            planets.results.map((product, index) => (
              <ProductTableRow element={product} key={index} />
            ))}
          {isLoading && <TableRow style={{ height: 53 * 10 }}><CircularProgress /></TableRow>}
        </TableBody>
        <TableFooter>
          {planets && (
            <TableRow>
              <CustomTablePagination
                total={planets.count}
                currentPage={currentPage}
                handleClick={handlePageChange}
              />
            </TableRow>
          )}
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default PlanetsTable
