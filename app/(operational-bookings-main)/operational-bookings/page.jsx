'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowRight, Users, Pen, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTable } from '@/components/ui/card';
import { DataGrid } from '@/components/ui/data-grid';
import { DataGridColumnVisibility } from '@/components/ui/data-grid-column-visibility';
import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import { DataGridTable } from '@/components/ui/data-grid-table';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ContentHeader } from './components/content-header';
import { SearchHeader } from './components/search-header';

function BookingCell({ booking }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Link href="#" className="font-bold text-blue-700">
        {booking.name}
      </Link>
      <p>#{booking.bookingNo} • INR {booking.total}</p>
      <h4>{booking.date} • {booking.duration} • {booking.passengers}</h4>
      <small className="flex items-center gap-1">
        <ArrowRight className="size-4" />
        {booking.updated}
      </small>
      <span className="flex items-center gap-1 mt-2">
        <Users className="size-4" />
        Person
        <Pen className="size-3 cursor-pointer" />
      </span>
    </div>
  );
}

function ItineraryCell({ booking }) {
  return (
    <div className="flex flex-col gap-3">
      {booking.days.map((day, i) => (
        <div key={i} className="flex gap-3">
          <div className="w-24 shrink-0 border rounded-md p-2 text-center">
            <p className="text-blue-600 font-semibold">
              {day.day} Day
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(day.date).toLocaleDateString('en-US', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
              })}
            </p>
          </div>

          <div className="flex-1 border rounded-md divide-y">
            {day.activities.map((act, j) => (
              <div key={j} className="flex justify-between px-3 py-2">
                <div>
                  <p className="text-blue-700">{act.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {act.meta}
                  </p>
                </div>
                <div className="text-right">
                  Booking: INR {act.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const data = [
    {
      id: 1,
      name: 'Divya • AND',
      bookingNo: '3057677',
      total: '96,000',
      date: '4 Apr, 2026',
      duration: '6D',
      passengers: '2A, 2C',
      updated: '3 hours ago by Asha Kujur',
      days: [
        {
          day: 1,
          date: '2026-04-04',
          activities: [
            {
              title: 'Port Blair Arrival - Cellular Jail Visit with Sound & Light Show',
              meta: 'Xylo / Ertiga',
              price: '650',
            },
            {
              title: 'Port Blair - Cellular Jail Entry Ticket',
              meta: '2 Adult 2 Child (3-12)',
              price: '120',
            },
          ],
        },
        {
          day: 2,
          date: '2026-04-05',
          activities: [
            {
              title: 'Port Blair to Havelock - Transfer',
              meta: 'Xylo / Ertiga',
              price: '1200',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Divya • AND',
      bookingNo: '3057678',
      total: '96,000',
      date: '4 Apr, 2026',
      duration: '6D',
      passengers: '2A, 2C',
      updated: '3 hours ago by Asha Kujur',
      days: [
        {
          day: 1,
          date: '2026-04-04',
          activities: [
            {
              title: 'Port Blair Arrival - Cellular Jail Visit with Sound & Light Show',
              meta: 'Xylo / Ertiga',
              price: '650',
            },
            {
              title: 'Port Blair - Cellular Jail Entry Ticket',
              meta: '2 Adult 2 Child (3-12)',
              price: '120',
            },
          ],
        },
        {
          day: 2,
          date: '2026-04-05',
          activities: [
            {
              title: 'Port Blair to Havelock - Transfer',
              meta: 'Xylo / Ertiga',
              price: '1200',
            },
          ],
        },
      ],
    },
  ];

  const filteredData = useMemo(() => {
    return data.filter((b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const columns = [
    {
      accessorKey: 'name',
      header: 'Booking',
      size: 100,
      cell: ({ row }) => <BookingCell booking={row.original} />,
    },
    {
      id: 'itinerary',
      header: 'Itinerary',
      cell: ({ row }) => <ItineraryCell booking={row.original} />,
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <ContentHeader>
        <h1 className="text-sm font-semibold">Operational Bookings</h1>
        <SearchHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </ContentHeader>

      <div className="container-fluid mt-5">
        <DataGrid table={table} recordCount={filteredData.length}>
          <Card className="border-none shadow-none">
            <CardHeader className="px-4 py-3 -mt-4">
              <div className="flex items-center justify-between w-full">
                <div className="relative">
                  <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="ps-9 w-48"
                  />
                  {searchQuery.length > 0 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute end-1.5 top-1/2 -translate-y-1/2 h-6 w-6"
                      onClick={() => setSearchQuery('')}
                    >
                      <X />
                    </Button>
                  )}
                </div>

                <DataGridColumnVisibility
                  table={table}
                  trigger={<Button variant="outline" size="sm">Columns</Button>}
                />
              </div>
            </CardHeader>

            <CardTable>
              <ScrollArea>
                <DataGridTable />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardTable>

            <CardFooter className="px-4 py-0">
              <DataGridPagination className="py-1" />
            </CardFooter>
          </Card>
        </DataGrid>
      </div>
    </>
  );
};

export default page;
