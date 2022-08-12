import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'

// types of data (row)
type DataRow = {
  id: string
  station_id: number
  name: string
  address: string
  kaupunki: string
  operaattor: string
  kapasiteet: number
}

// headers of table
const columns: TableColumn<DataRow>[] = [
  {
    name: 'Station ID',
    selector: (row) => row.station_id,
    sortable: true,
  },
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Address',
    selector: (row) => row.address,
  },
  {
    name: 'City',
    selector: (row) => row.kaupunki,
  },
  {
    name: 'Operator',
    selector: (row) => row.operaattor,
  },
  {
    name: 'Capicity',
    selector: (row) => row.kapasiteet,
  },
  {
    name: 'Action',
    cell: (row) => {
      return (
        <Link style={{ textDecoration: 'none' }} to={`/stationlist/${row.station_id}`}>
          <Button variant='contained'>View</Button>
        </Link>
      )
    },
  },
]

// data (rows) of the station list table
const DataTableStationList = ({ data }: any): JSX.Element => {
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)

  const filteredItems = data?.data?.hslData?.filter(
    (item: any) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  )

  const subHeaderFilterComponentMemo: JSX.Element = React.useMemo(() => {
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
          label='filter by station name'
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
      title='Stations List'
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderFilterComponentMemo}
      persistTableHead
      fixedHeader
      fixedHeaderScrollHeight='700px'
      selectableRowsSingle
      highlightOnHover
    />
  )
}

export default DataTableStationList
