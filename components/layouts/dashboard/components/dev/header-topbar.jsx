import { ChevronDown, MessageCircleMore, BellIcon } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { DropdownMenu2 } from '@/components/layouts/dashboard/components/dev/dropdown-menu/dropdown-menu-2';
import { ChatSheet } from '@/components/layouts/dashboard/components/dev/topbar/chat-sheet';
import { NotificationsSheet } from '@/components/layouts/dashboard/components/dev/topbar/notifications-sheet';
import { UserDropdownMenu } from '@/components/layouts/dashboard/components/dev/topbar/user-dropdown-menu';

export function HeaderTopbar() {
  return (
    <div className="flex items-center gap-2 lg:gap-3.5 lg:w-[400px] justify-end">
      <div className="flex items-center gap-2 me-0.5">
        <ChatSheet
          trigger={
            <Button
              variant="ghost"
              mode="icon"
              shape="circle"
              className="hover:bg-transparent hover:[&_svg]:text-primary"
            >
              <MessageCircleMore className="size-4.5!" />
            </Button>
          }
        />

        <NotificationsSheet
          trigger={
            <Button
              variant="ghost"
              mode="icon"
              shape="circle"
              className="hover:bg-transparent hover:[&_svg]:text-primary"
            >
              <BellIcon className="size-4.5!" />
            </Button>
          }
        />

        <UserDropdownMenu
          trigger={
            <img
              className="ms-2.5 size-9 rounded-full border-2 border-success shrink-0 cursor-pointer"
              src={toAbsoluteUrl('/media/avatars/favicon.png')}
              alt="User Avatar"
            />
          }
        />
      </div>

   

      <div className="border-e border-border h-5"></div>

      <DropdownMenu2
        trigger={
          <Button variant="mono">
            Create
            <ChevronDown />
          </Button>
        }
      />
    </div>
  );
}
