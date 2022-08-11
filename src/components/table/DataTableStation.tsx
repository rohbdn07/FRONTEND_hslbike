import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { tempStationListData } from '../../data/station.data'

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
    cell: () => {
      return <Button variant='contained'>View</Button>
    },
  },
]

const [hslData] = tempStationListData.map((item) => item.data?.hslData)

// data (rows) of the table
const DataTableStationList = (): JSX.Element => {
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)

  const filteredItems = hslData.filter(
    (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
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
      title='Stations List'
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

export default DataTableStationList
