import React from 'react'
import TablePagination from '@mui/material/TablePagination'

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

export default CustomTablePagination
