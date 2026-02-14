'use client';

import { PanelRightClose, Plus, Download, Share2, List, Calendar1 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLayout } from '@/components/layouts/crm/components/layout-context';
import { ListBoxContext } from 'react-aria-components';
import Link from 'next/link';

export function ContentHeader({ children, className }) {
  let layout = null;
  try {
    layout = useLayout();
  } catch (e) {
    layout = null;
  }

  const setSidebarCollapse = layout?.setSidebarCollapse ?? (() => {});
  return (
    <div className="bg-background p-2 flex items-center border-b top-[var(--header-height)] start-(--sidebar-width) end-0 in-data-[sidebar-collapsed]:start-(--sidebar-width-collapsed) z-[10] h-(--content-header-height) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="container-fluid flex items-center ">
        <Button
          variant="ghost"
          size="icon"
          className="hidden in-data-[sidebar-collapsed]:inline-flex -ms-2.5 me-1"
          onClick={() => setSidebarCollapse(false)}
        >
          <PanelRightClose />
        </Button>
        <div
          className={cn('flex items-center justify-between grow', className)}
        >
          {children}
          <div className="flex items-center gap-2">
            <Link size="sm"   className={`px-3 py-0.5 flex gap-2 items-center justify-center rounded-sm bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-500 border-blue-500 border transition`} variant="outline" href="/operational-bookings/calendar">
              <Calendar1 className="size-4" />
              Calendar
            </Link>       
         
          </div>
        </div>
      </div>
    </div>
  );
}
