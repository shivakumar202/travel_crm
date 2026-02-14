'use client';

import { useEffect, useState } from 'react';
import { DefaultLayout } from '@/components/layouts/dashboard';
import { LayoutProvider } from '@/components/layouts/dashboard/components/layout-context';
import { ScreenLoader } from '@/components/screen-loader';
import { MAIN_NAV } from '@/app/dashboard/config/app.config';
import { Building2 } from 'lucide-react';

export default function CrmLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate short loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ScreenLoader />;
  }

  const TRIPS_MENU = [
        { heading: 'Hotel Bookings' },   
        { title: 'In Progress',icon: Building2, path: '/hotel-bookings?status=in-progress' },
        { title: 'Booked',icon: Building2, path: '/hotel-bookings?status=booked' },
        { title: 'On Trip',icon: Building2, path: '/hotel-bookings?status=on-trip' },
        { title: 'Pass Trips',icon: Building2, path: '/hotel-bookings?status=pass-trips' },
        { title: 'Dropped',icon: Building2, path: '/hotel-bookings?status=dropped' },
        { title: 'All',icon: Building2, path: '/hotel-bookings?status=all' }
        
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIPS_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
