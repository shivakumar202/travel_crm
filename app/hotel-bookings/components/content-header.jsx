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
import { useLayout } from '@/components/layouts/dashboard/components/layout-context';

export function ContentHeader({ children, className }) {
  const { setSidebarCollapse } = useLayout();
  return (
    <div className="">
      <div className="container-fluid flex items-center p-2 border-b">
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
     
        </div>
      </div>
    </div>
  );
}
