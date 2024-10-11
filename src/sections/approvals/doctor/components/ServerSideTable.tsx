import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { Table, Button, Input, PopoverBody, UncontrolledPopover } from 'reactstrap';
import { Iconify } from 'src/components/iconify';

// Define the shape of your data
interface RowData {
  name: string;
  email: string;
  id: string | number; // Ensure this is the unique identifier
}

// Define the type for the filters and pagination object
interface Filters {
  [key: string]: string | undefined;
}

// Dummy server-side data
const serverSideData: RowData[] = [
  { name: 'Ashwini', email: 'ashwini@test.com', id: '1' },
  { name: 'Sandeep', email: 'sandeep@test.com', id: '2' },
  { name: 'Ashu', email: 'ashu@test.com', id: '3' },
  { name: 'San', email: 'san@test.com', id: '4' },
  { name: 'Raj', email: 'raj@test.com', id: '5' },
  { name: 'Uncle', email: 'uncle@test.com', id: '6' },
];

// Create a column helper
const columnHelper = createColumnHelper<RowData>();

const ServerSideTable: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
    pageCount: 0,
  });


  const columns: ColumnDef<RowData, any>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: info => info.getValue(),
    }),
    columnHelper.display({
      id: 'actions',
      // header: '',
      cell: ({ row }: any) => {
        const rowId = row.original.id;
        return (
          <div>
            <Button id={`popover-${rowId}`} color="black">
              <Iconify icon="formkit:reorder" />
            </Button>
            <UncontrolledPopover
              trigger="legacy" // Or "hover", "focus", "click"
              placement="left"
              target={`popover-${rowId}`}
            >
              {/* <PopoverHeader>Actions</PopoverHeader> */}
              <PopoverBody>
                <Button color="primary" size="sm" className="w-100 mb-1">
                  Edit
                </Button>
                <Button color="danger" size="sm" className="w-100">
                  Delete
                </Button>
              </PopoverBody>
            </UncontrolledPopover>
          </div>
        );
      },
    }),
  ];

  const handleFilterChange = (columnId: string, value: string) => {
    setFilterValues((prev) => ({
      ...prev,
      [columnId]: value,
    }));
  };

  const fetchData = async (filters: Filters, pageIndex: number, pageSize: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const filteredData = serverSideData.filter((item: any) => {
      const filterKeys = Object.keys(filters);
      return filterKeys.every((key) => {
        const filterValue = filters[key]?.toLowerCase();
        const itemValue = item[key as keyof RowData]?.toLowerCase();
        return itemValue.includes(filterValue ?? '');
      });
    });

    const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    setData(paginatedData);
    setPagination((prev) => ({
      ...prev,
      pageCount: Math.ceil(filteredData.length / pageSize),
    }));
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
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

        return {
          ...prev,
          pageIndex: newState.pageIndex,
          pageSize: newState.pageSize,
        };
      });
    },
  });

  useEffect(() => {
    fetchData(filterValues, pagination.pageIndex, pagination.pageSize);
  }, [filterValues, pagination.pageIndex, pagination.pageSize]);

  return (
    <div className="table-responsive react-table" style={{ minHeight: '80vh' }}>
      <Table striped bordered hover>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext() // Pass header context
                      )}

                  {header.column.getCanFilter() ? (
                    <Input
                      type="text"
                      value={filterValues[header.column.id] ?? ''}
                      onChange={(e) =>
                        handleFilterChange(header.column.id, e.target.value)
                      }
                      placeholder={`Filter by ${
                        typeof header.column.columnDef.header === 'function'
                          ? flexRender(header.column.columnDef.header, header.getContext())
                          : header.column.columnDef.header
                      }`}
                    />
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext() // Pass cell context
                  )}
                </td>
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
        {/* Pagination Summary */}
        <span>
          Page{' '}
          <strong>
            {pagination.pageIndex + 1} of {pagination.pageCount}
          </strong>
        </span>
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
        <span>
          <Input
            type="select"
            value={pagination.pageSize}
            onChange={(e) => {
              const newPageSize = Number(e.target.value);
              setPagination((prev) => ({
                ...prev,
                pageSize: newPageSize,
                pageIndex: 0,
              }));
            }}
          >
            {[3, 5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Input>
        </span>
      </div>
    </div>
  );
};

export default ServerSideTable;
