'use client';

import { useEffect, useState } from 'react';
import { DefaultLayout } from '@/components/layouts/dashboard';
import { LayoutProvider } from '@/components/layouts/dashboard/components/layout-context';
import { ScreenLoader } from '@/components/screen-loader';
import { MAIN_NAV } from '@/app/dashboard/config/app.config';
import { AlertCircle, BatteryWarning, Building2, CalendarArrowUp, CalendarFoldIcon, ListCheck, MailWarning, UnfoldVertical, Wallet2 } from 'lucide-react';

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
        { heading: 'Incoming Payments' },   
        { title: 'Upcoming',icon: CalendarArrowUp, path: '/payments/incoming?status=future_due' },
        { title: 'Past 7 Days',icon: CalendarFoldIcon, path: '/payments/incoming?status=recent_overdue' },
        { title: 'Unverified',icon: MailWarning, path: '/payments/incoming?status=unverified' },
        { title: 'Paid',icon: Wallet2, path: '/payments/incoming?status=paid' },      
        { title: 'Overdue',icon: AlertCircle, path: '/payments/incoming?status=overdue' },      
        { title: 'All',icon: ListCheck, path: '/payments/incoming?status=all' },      
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIPS_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
