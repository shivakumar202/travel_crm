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
        { heading: 'Outgoing Payments' },   
        { title: 'Upcoming',icon: CalendarArrowUp, path: '/payments/outgoing?status=future_due' },
        { title: 'Past 7 Days',icon: CalendarFoldIcon, path: '/payments/outgoing?status=recent_overdue' },
        { title: 'Unverified',icon: MailWarning, path: '/payments/outgoing?status=unverified' },
        { title: 'Paid',icon: Wallet2, path: '/payments/outgoing?status=paid' },      
        { title: 'Overdue',icon: AlertCircle, path: '/payments/outgoing?status=overdue' },      
        { title: 'All',icon: ListCheck, path: '/payments/outgoing?status=all' },      
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIPS_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
