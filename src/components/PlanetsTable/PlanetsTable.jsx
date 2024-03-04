import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import { useGetPlanetsListQuery } from '../../store/apiService'
import CustomTableHeader from './CustomTableHeader'
import CustomTablePagination from './CustomTablePagination'
import CustomTableRow from './CustomTableRow'

const PlanetsTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: planets, isSuccess } = useGetPlanetsListQuery(currentPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <TableContainer>
      <Table>
        <CustomTableHeader />
        {isSuccess && (
          <TableBody>
            {planets &&
              planets.results.map((planet, index) => (
                <CustomTableRow element={planet} key={index} />
              ))}
          </TableBody>
        )}
        <TableFooter>
          {planets && (
            <CustomTablePagination
              total={planets.count}
              currentPage={currentPage}
              handleClick={handlePageChange}
            />
          )}
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default PlanetsTable
