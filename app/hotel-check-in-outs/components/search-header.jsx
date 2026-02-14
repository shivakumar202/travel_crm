'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export function SearchHeader({ searchQuery, onSearchChange }) {
  const [advancedFilters, setAdvancedFilters] = useState({
    status: '',
    dateStart: '',
    dateEnd: '',
    location: '',
  });

  const handleFilterChange = (field, value) => {
    setAdvancedFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', advancedFilters);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
        <Input
          placeholder="Search trips..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="ps-9 w-64 rounded-lg border-gray-300 focus:border-blue-500"
        />
      </div>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="size-4" />
            Advanced Search
          </Button>
        </DrawerTrigger>
        <DrawerContent className="!bottom-auto !top-0 !right-0 !left-auto !rounded-none max-w-sm bg-background fixed inset-y-0 right-0 z-50 mt-0 h-screen w-96 border-l border-r-0 flex flex-col">
          <DrawerHeader className="px-4 py-3">
            <DrawerTitle className="text-base">Advanced Search</DrawerTitle>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <Input
                placeholder="Filter by status..."
                value={advancedFilters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date Range</label>
              <Input
                type="date"
                placeholder="Start date"
                value={advancedFilters.dateStart}
                onChange={(e) => handleFilterChange('dateStart', e.target.value)}
              />
              <Input
                type="date"
                placeholder="End date"
                className="mt-2"
                value={advancedFilters.dateEnd}
                onChange={(e) => handleFilterChange('dateEnd', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input
                placeholder="Filter by location..."
                value={advancedFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              />
            </div>
          </div>
          <div className="border-t p-3 flex gap-2">
            <DrawerClose asChild>
              <Button variant="outline" className="flex-1">Cancel</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button className="flex-1" onClick={handleApplyFilters}>Apply Filters</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
