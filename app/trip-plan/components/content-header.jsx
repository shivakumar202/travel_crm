'use client';

import { PanelRightClose, Plus, Download, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLayout } from '@/components/layouts/crm/components/layout-context';

export function ContentHeader({ children, className }) {
  const { setSidebarCollapse } = useLayout();
  return (
    <div className="bg-background flex items-center border-b lg:fixed top-[var(--header-height)] start-(--sidebar-width) end-0 in-data-[sidebar-collapsed]:start-(--sidebar-width-collapsed) z-[10] h-(--content-header-height) pe-[var(--removed-body-scroll-bar-size,0px)]">
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
            <Button size="sm" variant="outline">
              <Plus className="size-4" />
              New Report
            </Button>
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
