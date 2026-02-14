'use client';

import { useEffect, useState } from 'react';
import { DefaultLayout } from '@/components/layouts/dashboard';
import { LayoutProvider } from '@/components/layouts/dashboard/components/layout-context';
import { ScreenLoader } from '@/components/screen-loader';
import { MAIN_NAV } from '@/app/dashboard/config/app.config';
import { ArrowBigRight, ArrowRightCircle, Building2, CheckIcon, Outdent } from 'lucide-react';

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
        { heading: 'Trip Check In/Out Report' },   
        { title: 'Check Outs',icon: ArrowRightCircle, path: '/trip-check-in-out-reports?after=all' },
        { title: 'Check Ins',icon: ArrowBigRight, path: '/trip-check-in-out-reports?after=users' },
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIPS_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
