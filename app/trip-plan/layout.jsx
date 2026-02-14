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

  const TRIP_PLAN_MENU = [
        { heading: 'Trip Plan Request' },   
        { title: 'New',icon: Building2, path: '/trip-plan?source=all' },
        { title: 'All',icon: Building2, path: '/trip-plan?source=users' },
        { title: 'Archived',icon: Building2, path: '/trip-plan?source=archived_only' },
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIP_PLAN_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
