import Link from 'next/link';
import { Fragment } from 'react';

const MegaMenuSubTrips = ({ item }) => {
  const groups = item?.children?.[0]?.children || [];

  return (
    <div className="w-full lg:w-[320px]">
      <div className="p-4">
        <ul className="flex flex-col">

          {groups.map((group, gIndex) => (
            <Fragment key={gIndex}>
              
              {group.children?.map((leaf, idx) => (
                <li key={`${gIndex}-${idx}`}>
                  <Link
                    href={leaf.path || '#'}
                    className="flex rounded-md p-2 text-sm hover:bg-accent"
                  >
                    {leaf.icon && <leaf.icon className="mr-2 size-4" />}
                    {leaf.title}
                  </Link>
                </li>
              ))}

              {gIndex !== groups.length - 1 && (
                <li className="my-2">
                  <div className="border-t border-border" />
                </li>
              )}

            </Fragment>
          ))}

        </ul>
      </div>
    </div>
  );
};

export { MegaMenuSubTrips };
