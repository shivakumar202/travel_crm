
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
  import { Briefcase, Building, Search, X } from 'lucide-react';
  import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
  import { Button } from '@/components/ui/button';
  import { Card, CardFooter, CardHeader, CardTable } from '@/components/ui/card';
  import { Checkbox } from '@/components/ui/checkbox';
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from '@/components/ui/command';
  import { DataGrid } from '@/components/ui/data-grid';
  import { DataGridColumnVisibility } from '@/components/ui/data-grid-column-visibility';
  import { DataGridPagination } from '@/components/ui/data-grid-pagination';
  import { DataGridTable } from '@/components/ui/data-grid-table';
  import { Input } from '@/components/ui/input';
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from '@/components/ui/popover';
  import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
  import { mockContacts } from '@/app/crm/mock/contacts';
  import { ContentHeader } from '@/components/layouts/dashboard/components/content-header';
  import SalesReportCard from '../../components/sales-report-card';
  import { SearchHeader } from './components/search-header';

const page = ({ filter = 'all' })=> {
  
    const [searchQuery, setSearchQuery] = useState('');
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});


    const columns = [
      {
        id: 'select',
        size: 50,
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            size="sm"
            className="ms-1.5 align-middle"
          />
        ),
  
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            size="sm"
            className="ms-1.5 align-middle"
          />
        ),
  
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 200,
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              {row.original.avatar ? (
                <AvatarImage src={row.original.avatar} alt={row.original.name} />
              ) : (
                <AvatarFallback>
                  {row.original.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              )}
            </Avatar>
            <Link
              href={`#`}
              className="font-medium text-foreground hover:text-primary"
            >
              {row.original.name}
            </Link>
          </div>
        ),
  
        enableSorting: true,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
        cell: ({ row }) => (
          <Link href="#" className="hover:text-primary">
            {row.original.email || '-'}
          </Link>
        ),
  
        enableSorting: true,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 200,
        cell: ({ row }) => <div>{row.original.address || '-'}</div>,
        enableSorting: true,
      },
      {
        accessorKey: 'socialLinks',
        header: 'Social Links',
        size: 200,
        cell: ({ row }) => {
          const socialLinks = row.original.socialLinks || {};
          const hasAnySocialLinks = Object.values(socialLinks).some(
            (link) => !!link,
          );
  
          return (
            <div className="flex flex-wrap gap-2">
              {hasAnySocialLinks ? (
                <>
                  {socialLinks.linkedin && (
                    <Link href="#" className="text-primary hover:underline">
                      LinkedIn
                    </Link>
                  )}
                  {socialLinks.twitter && (
                    <Link href="#" className="text-primary hover:underline">
                      Twitter
                    </Link>
                  )}
                  {socialLinks.github && (
                    <Link href="#" className="text-primary hover:underline">
                      GitHub
                    </Link>
                  )}
                  {socialLinks.instagram && (
                    <Link href="#" className="text-primary hover:underline">
                      Instagram
                    </Link>
                  )}
                  {socialLinks.facebook && (
                    <Link href="#" className="text-primary hover:underline">
                      Facebook
                    </Link>
                  )}
                  {socialLinks.youtube && (
                    <Link href="#" className="text-primary hover:underline">
                      YouTube
                    </Link>
                  )}
                  {socialLinks.medium && (
                    <Link href="#" className="text-primary hover:underline">
                      Medium
                    </Link>
                  )}
                  {socialLinks.stackoverflow && (
                    <Link href="#" className="text-primary hover:underline">
                      StackOverflow
                    </Link>
                  )}
                </>
              ) : (
                <span className="text-muted-foreground">-</span>
              )}
            </div>
          );
        },
        enableSorting: false,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        size: 150,
        cell: ({ row }) => <div>{row.original.phone || '-'}</div>,
        enableSorting: true,
      },
      {
        accessorKey: 'position',
        header: 'Position',
        size: 150,
        cell: ({ row }) => <div>{row.original.position || '-'}</div>,
        enableSorting: true,
      },
      {
        accessorKey: 'company',
        header: 'Company',
        size: 150,
        cell: ({ row }) => {
          const company = row.original.company || '';
          return (
            <Link
              href={`#`}
              className="group flex items-center gap-1.5 cursor-pointer"
            >
              <Avatar className="flex items-center justify-center size-5 border border-border rounded-full">
                <AvatarImage
                  className="size-4"
                  src={row.original.logo}
                  alt={company || 'Company'}
                />
              </Avatar>
              <div className="group-hover:text-primary">{company || '-'}</div>
            </Link>
          );
        },
        enableSorting: true,
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        size: 150,
        cell: ({ row }) => {
          const date = new Date(row.original.createdAt);
          return <span>{formatDate(date)}</span>;
        },
        enableSorting: true,
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        size: 150,
        cell: ({ row }) => {
          const date = new Date(row.original.updatedAt);
          return <span>{formatDate(date)}</span>;
        },
        enableSorting: true,
      },
    ];
  
    const filteredContacts = useMemo(() => {
      let contacts = mockContacts;
      const now = new Date();
      const todayStart = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
      );
      const weekStart = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 7,
      );
  
      // Apply time-based filter
      if (filter !== 'all') {
        contacts = contacts.filter((contact) => {
          const contactDate = new Date(contact.updatedAt);
  
          switch (filter) {
            case 'today':
              // For today filter, check if date is exactly today
              return contactDate >= todayStart;
            case 'week':
              // For week filter, show contacts from the last 7 days
              return contactDate >= weekStart;
            case 'completed':
              // For completed, show contacts older than 7 days
              return contactDate < weekStart;
            default:
              return true;
          }
        });
      }
  
   
      // Apply search filter
      return contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.phone?.includes(searchQuery) ||
          contact.position?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.company?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }, [searchQuery, filter]);
  
    const formatDate = (date) => {
      // Use a consistent timezone to avoid hydration issues
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
      }).format(date);
    };
  
    const table = useReactTable({
      data: filteredContacts,
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
      <ContentHeader className="">
        <h1 className="text-sm font-semibold">Trip Plan</h1>
        <SearchHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </ContentHeader>
      <div className="container-fluid">
        <div className="flex flex-col items-center gap-2 p-1">
      <SalesReportCard />

    <DataGrid
      table={table}
      recordCount={filteredContacts.length}
      tableLayout={{
        dense: true,
        columnsPinnable: true,
        columnsResizable: true,
        columnsMovable: true,
        columnsVisibility: true,
      }}
    >
      <Card className="border-none shadow-none">
        <CardHeader className="px-4 py-3 -mt-4">
          <div className="flex items-center flex-wrap gap-2 justify-between w-full">
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
                <Input
                  variant="sm"
                  placeholder="Search contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="ps-9 w-48 rounded-lg border-gray-300 focus:border-blue-500"
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

            </div>
            <div className="flex items-center gap-2">
              <DataGridColumnVisibility
                table={table}
                trigger={
                  <Button variant="outline" size="sm">
                    Columns
                  </Button>
                }
              />
            </div>
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
      </div>
    </>
  );
}


export default page;
