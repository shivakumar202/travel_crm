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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ScreenLoader />;
  }

  const TRIPS_MENU = [
        { heading: 'Sales Reports' },   
        { title: 'Trips',icon: Building2, path: '/sales-reports?type=all' },
        { title: 'Sales Team',icon: Building2, path: '/sales-reports?type=users' },
        { title: 'Destination',icon: Building2, path: '/sales-reports?type=destination' },
        { title: 'Trip Source',icon: Building2, path: '/sales-reports?type=sources' },      
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIPS_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
