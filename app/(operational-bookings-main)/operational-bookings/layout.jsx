'use client';

import { useEffect, useState } from 'react';
import { DefaultLayout } from '@/components/layouts/dashboard';
import { LayoutProvider } from '@/components/layouts/dashboard/components/layout-context';
import { ScreenLoader } from '@/components/screen-loader';
import { MAIN_NAV } from '@/app/dashboard/config/app.config';
import { BookMarked, Building2, Calendar1, Car, CarTaxiFrontIcon, Droplet, GitCompareArrowsIcon, ListChecksIcon, Plus, PlusSquare, TrashIcon } from 'lucide-react';

export default function CrmLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ScreenLoader />;
  }

  const TRIPS_MENU = [
        { heading: 'Operational Bookings' },   
        { title: 'New',icon: Plus, path: '/operational-bookings?tos=all' },
        { title: 'In Progress',icon: GitCompareArrowsIcon, path: '/operational-bookings?tos=users' },
        { title: 'Booked',icon: BookMarked, path: '/operational-bookings?tos=destination' },
        { title: 'On Trip',icon: CarTaxiFrontIcon, path: '/operational-bookings?tos=on_trip' },      
        { title: 'Past',icon: Calendar1, path: '/operational-bookings?tos=past' },      
        { title: 'Dropped',icon: TrashIcon, path: '/operational-bookings?tos=dropped' },      
        { title: 'All',icon: ListChecksIcon, path: '/operational-bookings?tos=all' },      
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIPS_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
