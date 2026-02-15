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
        { heading: 'Trips' },   
        { title: 'New Query',icon: Building2, path: '/trips?status=new-query' },
        { title: 'In Progress',icon: Building2, path: '/trips?status=in-progress' },
        { title: 'On Hold',icon: Building2, path: '/trips?status=on-hold' },
        { title: 'Converted',icon: Building2, path: '/trips?status=converted' },
        { title: 'On Trip',icon: Building2, path: '/trips?status=on-trip' },
        { title: 'Pass Trips',icon: Building2, path: '/trips?status=pass-trips' },
        { title: 'Cancelled',icon: Building2, path: '/trips?status=cancelled' },
        { title: 'Dropped',icon: Building2, path: '/trips?status=dropped' },
        { title: 'All',icon: Building2, path: '/trips?status=all' }
    
    
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout showSidebar={false}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
