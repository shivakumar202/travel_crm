'use client';

import { DefaultLayout } from '@/components/layouts/dashboard';
import { LayoutProvider } from '@/components/layouts/dashboard/components/layout-context';
import { MAIN_NAV } from '@/app/dashboard/config/app.config';

export default function CrmLayout({ children }) {
  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout showSidebar={false}>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
