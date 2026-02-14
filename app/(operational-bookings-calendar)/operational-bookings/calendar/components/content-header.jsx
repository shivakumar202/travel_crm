'use client';

import { PanelRightClose, Plus, Download, Share2, List } from 'lucide-react';
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
  const { setSidebarCollapse } = useLayout();
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
            <Link size="sm"   className={`px-3 py-0.5 flex gap-2 items-center justify-center rounded-sm bg-blue-500 text-white hover:bg-blue-600`} variant="outline" href="/operational-bookings">
              <List className="size-4" />
              List
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  <Download className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="gap-2">
                  <Download className="size-4" />
                  <span>Download as CSV</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Download className="size-4" />
                  <span>Download as PDF</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline">
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
