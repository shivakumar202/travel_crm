'use client';

import { useEffect, useState } from 'react';
import { DefaultLayout } from '@/components/layouts/dashboard';
import { LayoutProvider } from '@/components/layouts/crm/components/layout-context';
import { ScreenLoader } from '@/components/screen-loader';

export default function OperationalBookingsCalendarLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <LayoutProvider sidebarNavItems={[]}>
      <DefaultLayout showSidebar={false}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
