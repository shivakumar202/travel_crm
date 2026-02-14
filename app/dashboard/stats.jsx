import {
  TriangleAlert,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardToolbar,
} from '@/components/ui/card';

const stats = [
  {
    title: 'Today Sales Stats',
    icon: ArrowRight,
    colSpan: 2,
    stats: [
      { title: 'Revenue', prefix:'INR', value: 1247, positive: true },
      { title: 'Leads', prefix:'', value: 89, positive: false },
      { title: 'Conversion', prefix:'', value: 2840000, positive: true, format: (v) => `$${(v / 1_000_000).toFixed(1)}M` },
    ]
  },
  {
  title: 'Pending Follow-ups',
  icon: TriangleAlert,
  colSpan: 2,
  stats: [
    { title: 'Today', prefix:'', value: 24, positive: true },
    { title: 'Tomorrow', prefix:'', value: 8, positive: false },
    { title: 'Next 7 days', prefix:'', value: 56, positive: true },
  ]
}
,
 {
  title: 'Due Incoming',
  icon: TriangleAlert,
  colSpan: 1,
  stats: [
    { title: 'Today', prefix:'INR', value: 24, positive: true },
    { title: 'Yesterday', prefix:'INR', value: 8, positive: false },
  ]
}, {
  title: 'Due Outgoing',
  icon: TriangleAlert,
  colSpan: 1,
  stats: [
    { title: 'Today', prefix:'INR', value: 24, positive: true },
    { title: 'Tomorrow', prefix:'INR', value: 8, positive: false },
  ]
},
  {
  title: 'Trips Starting',
  icon: TriangleAlert,
  colSpan: 1,
  stats: [
    { title: 'Today',prefix:'', value: 24, positive: true },
    { title: 'Tomorrow',prefix:'', value: 8, positive: false },
    { title: 'Next 7 days', prefix:'', value: 56, positive: true },
  ]
},
 {
  title: 'Trips Ending',
  icon: TriangleAlert,
  colSpan: 1,
  stats: [
    { title: 'Today', prefix:'', value: 24, positive: true },
    { title: 'Tomorrow', prefix:'', value: 8, positive: false },
    { title: 'Next 7 days', prefix:'', value: 56, positive: true },
  ]
},
];

const colMap = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  6: "lg:col-span-6",
  12: "lg:col-span-12",
};


function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return n.toLocaleString();
  return n.toString();
}

export function Stats() {
  return (
    <div className="grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((card, index) => {
        const Icon = card.icon;

        return (
          <Card
            key={index}
            className={`col-span-12 sm:col-span-6 ${colMap[card.colSpan]}`}
          >

            {/* Header */}
            <CardHeader className="border-b flex flex-row items-center justify-between bg-muted rounded-t-lg border-neutral-300">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>

              <ArrowRight className="w-4 h-4 " />
            </CardHeader>

            {/* Stats Grid */}
            <CardContent className="py-4">
              <div className="grid grid-cols-3 gap-1">
                {card.stats.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center text-sm ">
                      {item.title}
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                    
                    <div className="text-2xl font-semibold">
                     <sup className="text-xs">{item.prefix}</sup> {formatNumber(item.value)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}


