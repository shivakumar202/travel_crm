import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_MEGA } from '@/components/layouts/dashboard/components/dev/layout-9.config';
import { cn } from '@/lib/utils';
import { useMenu } from '@/components/layouts/dashboard/hooks/use-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function MegaMenuSingleColumn() {
  const pathname = usePathname();
  const { isActive, hasActiveChild } = useMenu(pathname);

  const linkClass = `hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 flex flex-col gap-1 rounded-md p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 flex flex-row items-center gap-2.5 px-2.5 py-2 rounded-md hover:bg-accent/50 text-sm [&_svg]:text-muted-foreground hover:[&_svg]:text-primary [&[data-active=true]_svg]:text-primary`;

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {MENU_MEGA.map((menuItem, idx) => {
          const hasChildren = !!menuItem.children && menuItem.children.length > 0;

          return (
            <NavigationMenuItem key={`mm-sc-${idx}`}>
              {!hasChildren ? (
                <NavigationMenuLink asChild>
                  <Link
                    href={menuItem.path || '/'}
                    className={cn(linkClass)}
                    data-active={isActive(menuItem.path) || undefined}
                  >
                    {menuItem.title}
                  </Link>
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger
                    className={cn(linkClass)}
                    data-active={hasActiveChild(menuItem.children) || undefined}
                  >
                    {menuItem.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0">
                    <div className="w-full lg:w-[320px]">
                      <div className="p-4">
                        {menuItem.children.map((group, gIdx) => (
                          <div key={`group-${gIdx}`} className="mb-4">
                            {group.title && (
                              <h3 className="text-sm text-foreground font-semibold mb-2">
                                {group.title}
                              </h3>
                            )}

                            <ul className="flex flex-col space-y-2">
                              {group.children?.map((leaf, lIdx) => {
                                if (leaf.children && leaf.children.length > 0) {
                                  return leaf.children.map((c, cIdx) => (
                                    <li key={`leaf-${gIdx}-${lIdx}-${cIdx}`}>
                                      <Link
                                        href={c.path || '#'}
                                        className="text-sm text-secondary-foreground hover:text-mono"
                                      >
                                        {c.title}
                                      </Link>
                                    </li>
                                  ));
                                }

                                return (
                                  <li key={`leaf-${gIdx}-${lIdx}`}>
                                    <Link
                                      href={leaf.path || '#'}
                                      className="text-sm text-secondary-foreground hover:text-mono"
                                    >
                                      {leaf.title}
                                    </Link>
                                  </li>
                                );
                              })}
                              {group.path && (
                                <li>
                                  <Link href={group.path} className="text-sm text-secondary-foreground hover:text-mono">
                                    {group.title}
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MegaMenuSingleColumn;
