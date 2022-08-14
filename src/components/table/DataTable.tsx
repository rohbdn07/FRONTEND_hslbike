import { Box, TextField } from '@mui/material'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'

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

/**
 * @description this component display journey list with filtering features.
 * @param data contains journey list informations
 * @returns JSX.Element
 */
const DataTableList = ({ data }: any): JSX.Element => {
  const [filterText, setFilterText] = React.useState<string>('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState<boolean>(false)

  // filter data according to search
  const filteredItems = data?.data?.hslData?.filter((item: any) => {
    return item.departure_station_name.toLowerCase().includes(filterText.toLowerCase())
  })

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
      title={data && `Month: ${data?.data?.monthName}`}
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

export default DataTableList
