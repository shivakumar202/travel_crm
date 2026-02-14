'use client';

import { useEffect, useState } from 'react';
import { DefaultLayout } from '@/components/layouts/dashboard';
import { LayoutProvider } from '@/components/layouts/dashboard/components/layout-context';
import { ScreenLoader } from '@/components/screen-loader';
import { MAIN_NAV } from '@/app/dashboard/config/app.config';
import { Building2, Calendar1, CalendarArrowDownIcon, CalendarClock, TrendingUp } from 'lucide-react';

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
        { heading: 'Trip Quote & Booking Diffs' },   
        { title: 'Upcoming',icon: CalendarClock, path: '/trip-quote-bookings-diff?trip_status=upcoming' },
        { title: 'On Trip',icon: TrendingUp , path: '/trip-quote-bookings-diff?trip_status=on_trip' },
        { title: 'Past',icon: CalendarArrowDownIcon, path: '/trip-quote-bookings-diff?trip_status=past' },
        { title: 'All',icon: Calendar1, path: '/trip-quote-bookings-diff?trip_status=all' },      
  ];

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout sidebarMenuItems={TRIPS_MENU}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
