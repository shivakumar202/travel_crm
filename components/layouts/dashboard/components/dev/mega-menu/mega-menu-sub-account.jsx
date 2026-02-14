import Link from 'next/link';

const flattenToLeaves = (arr) => {
  const out = [];
  if (!Array.isArray(arr)) return out;
  arr.forEach((item) => {
    if (item && item.children && item.children.length > 0) {
      out.push(...flattenToLeaves(item.children));
    } else if (item && (item.title || item.path)) {
      out.push(item);
    }
  });
  return out;
};

const MegaMenuSubTrips = ({ item }) => {
  const groups =
    item?.children?.[0]?.children || [];

  return (
    <div className="w-full lg:w-[320px]">
      <div className="p-4">
        <ul className="flex flex-col">

          {groups.map((group, gIndex) => (
            <div key={gIndex}>
              
              {group.children?.map((leaf, idx) => (
                <li key={`${gIndex}-${idx}`}>
                  <Link
                    href={leaf.path || '#'}
                    className="flex rounded-md p-2 text-sm hover:bg-accent"
                  >
                    {leaf.title}
                  </Link>
                </li>
              ))}

              {gIndex !== groups.length - 1 && (
                <div className="my-2 border-t border-border" />
              )}

            </div>
          ))}

        </ul>
      </div>
    </div>
  );
};


export { MegaMenuSubAccount };
