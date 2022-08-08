import { Box, TextField } from '@mui/material'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { tempData } from '../../data/data'

// types of data (row)
type DataRow = {
  departure_station_name: string
  return_station_name: string
  distance_km: number
  duration_min: number
}

// headers of table
const columns: TableColumn<DataRow>[] = [
  {
    name: 'Month',
    cell: () => {
      const [month] = tempData.map((item) => item.data.monthName)
      return month
    },
  },
  {
    name: 'Departure station',
    selector: (row) => row.departure_station_name,
    sortable: true,
  },
  {
    name: 'Return station',
    selector: (row) => row.return_station_name,
    sortable: true,
  },
  {
    name: 'Distance(km)',
    selector: (row) => row.distance_km,
  },
  {
    name: 'Duration(minute)',
    selector: (row) => row.duration_min,
  },
]

const [hslData] = tempData.map((item) => item.data?.hslData)

// data (rows) of the table
const DataTableList = (): JSX.Element => {
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)

  const filteredItems = hslData.filter(
    (item) =>
      item.departure_station_name &&
      item.departure_station_name.toLowerCase().includes(filterText.toLowerCase()),
  )

  const subHeaderFilterComponentMemo: JSX.Element = React.useMemo(() => {
    // const handleClear = () => {
    //   if (filterText) {
    //     setResetPaginationToggle(!resetPaginationToggle)
    //     setFilterText('')
    //   }
    // }

    return (
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='outlined-basic'
          label='filter by departure or return'
          variant='outlined'
          size='small'
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Box>
    )
  }, [filterText, resetPaginationToggle])

  return (
    <DataTable
      title='Journey Lists'
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderFilterComponentMemo}
      selectableRows
      persistTableHead
      fixedHeader
      fixedHeaderScrollHeight='700px'
      selectableRowsSingle
      highlightOnHover
    />
  )
}

export default DataTableList
