import { useBodyClass } from '@/hooks/use-body-class';
import { useIsMobile } from '@/hooks/use-mobile';
import { Footer } from './footer';
import { Header } from './header';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { SidebarMenuDefault } from './sidebar-menu-default';

export function Main({ children, showSidebar = true, sidebarMenuItems = null }) {
  const isMobile = useIsMobile();

  useBodyClass(`
    [--header-height:70px]
    bg-background!
  `);

  return (
    <div className="flex grow flex-col pt-(--header-height)">
      <Header />

      {!isMobile && <Navbar />}

      <div className="flex grow">
        {!isMobile && showSidebar && (
          <div className="w-64 border-r border-border bg-background overflow-hidden">
            <SidebarMenuDefault menuItems={sidebarMenuItems} />
          </div>
        )}

        <main className="flex flex-col grow p-2 w-full !bg-body-bg" role="content">
          {children}

        </main>

      </div>
          <Footer />

    </div>
  );
}
