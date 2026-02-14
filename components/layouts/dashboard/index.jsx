import { Main } from '@/components/layouts/dashboard/components/dev/main';
import { LayoutProvider } from '@/components/layouts/dashboard/components/dev/context';

export function DefaultLayout({ children, showSidebar, sidebarMenuItems }) {
  return (
    <LayoutProvider>
      <Main showSidebar={showSidebar} sidebarMenuItems={sidebarMenuItems}>
        {children}
      </Main>
    </LayoutProvider>
  );
}
