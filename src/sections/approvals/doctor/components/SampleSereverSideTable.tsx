import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { Table, Row, Col, Button, Input } from "reactstrap";

// Define the shape of your data
interface RowData {
  name: string;
  email: string;
}

// Define the type for the filters and pagination object
interface Filters {
  [key: string]: string | undefined;
}

// Dummy server-side data
const serverSideData = [
  { name: 'Ashwini', email: 'ashwini@test.com' },
  { name: 'Sandeep', email: 'sandeep@test.com' },
  { name: 'Umesh', email: 'umesh@test.com' },
  { name: 'Amit', email: 'amit@test.com' },
  { name: 'Santosh', email: 'santosh@test.com' },
  { name: 'Rahul', email: 'rahul@test.com' },
  { name: 'Neha', email: 'neha@test.com' },
  { name: 'Ravi', email: 'ravi@test.com' },
  { name: 'Manoj', email: 'manoj@test.com' },
  { name: 'Nisha', email: 'nisha@test.com' },
  { name: 'Raj', email: 'raj@test.com' },
  { name: 'Nehal', email: 'nehal@test.com' },
  { name: 'Raji', email: 'raji@test.com' },
  { name: 'Manu', email: 'manu@test.com' },
  { name: 'Niharika', email: 'niharika@test.com' },
];

const ServerSideTable: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]); // Store the current page of data
  const [filterValues, setFilterValues] = useState<Record<string, string>>({}); // Store filter values
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
    pageCount: 0, // Initialize with 0 and update after fetching data
  }); // Track pagination state

  // Define columns
  const columns: ColumnDef<RowData>[] = [
    {
      header: 'Name',
      accessorKey: 'name',
      filterFn: 'includesString',
    },
    {
      header: 'Email',
      accessorKey: 'email',
      filterFn: 'includesString',
    },
  ];

  // Function to handle filter changes and trigger data fetch
  const handleFilterChange = (columnId: string, value: string) => {
    setFilterValues((prev) => ({
      ...prev,
      [columnId]: value,
    }));
  };

  // Simulated server-side data fetching with filters and pagination
  const fetchData = async (filters: Filters, pageIndex: number, pageSize: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate server latency

    // Apply filters to server-side data
    const filteredData = serverSideData.filter((item: any) => {
      const filterKeys = Object.keys(filters);
      return filterKeys.every((key) => {
        const filterValue = filters[key]?.toLowerCase();
        const itemValue = item[key as keyof RowData]?.toLowerCase();
        return itemValue.includes(filterValue ?? '');
      });
    });

    // Apply pagination
    const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    // Update the data and pagination state
    setData(paginatedData);
    setPagination((prev) => ({
      ...prev,
      pageCount: Math.ceil(filteredData.length / pageSize), // Update page count based on filtered data
    }));
  };

  // Initialize the table with data, columns, and filtering
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true, // Enable manual pagination
    manualFiltering: true, // Enable manual filtering
    state: {
      columnFilters: Object.entries(filterValues).map(([id, value]) => ({
        id,
        value,
      })),
      pagination: {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
      },
    },
    onPaginationChange: (updater) => {
      setPagination((prev) => {
        const newState = typeof updater === 'function'
          ? updater(prev)
          : updater;

        console.log('Updated Pagination State:', newState);

        return {
          ...prev,
          pageIndex: newState.pageIndex,
          pageSize: newState.pageSize,
        };
      });
    },
  });

  // Fetch data when filters or pagination changes
  useEffect(() => {
    fetchData(filterValues, pagination.pageIndex, pagination.pageSize); // Trigger fetch with current filters and pagination
  }, [filterValues, pagination.pageIndex, pagination.pageSize]);

  return (
    <div className="table-responsive react-table" style={{ minHeight: "80vh"}}>
      <Table striped bordered hover>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <>
                      {typeof header.column.columnDef.header === 'function'
                        ? header.column.columnDef.header()
                        : header.column.columnDef.header}

                      <div>
                        {header.column.getCanFilter() ? (
                          <input
                            value={filterValues[header.column.id] ?? ''} // Correctly bind the filter value
                            onChange={(e) =>
                              handleFilterChange(header.column.id, e.target.value)
                            }
                            placeholder={`Filter by ${header.column.columnDef.header}`}
                          />
                        ) : null}
                      </div>
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id}>{cell.getValue()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div>
        <Button
          onClick={() => table.setPageIndex(0)}
          disabled={pagination.pageIndex === 0}
        >
          {'<<'}
        </Button>
        <Button
          onClick={() => table.previousPage()}
          disabled={pagination.pageIndex === 0}
        >
          {'<'}
        </Button>
        <Button
          onClick={() => table.nextPage()}
          disabled={pagination.pageIndex >= pagination.pageCount - 1}
        >
          {'>'}
        </Button>
        <Button
          onClick={() => table.setPageIndex(pagination.pageCount - 1)}
          disabled={pagination.pageIndex >= pagination.pageCount - 1}
        >
          {'>>'}
        </Button>
        <select
          value={pagination.pageSize}
          onChange={(e) => {
            const newPageSize = Number(e.target.value);
            setPagination((prev) => ({
              ...prev,
              pageSize: newPageSize,
              pageIndex: 0, // Reset to first page on page size change
            }));
          }}
        >
          {[3, 5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>

        {/* Pagination Summary */}
        <div>
          <span>
            Page{' '}
            <strong>
              {pagination.pageIndex + 1} of {pagination.pageCount}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServerSideTable;
