import { Content } from '@/components/layouts/dashboard/components/content';
import { DealsOverview } from '@/app/dashboard/deals-overview';
import { LeadAnalytics } from '@/app/dashboard/lead-analytics';
import { PageHeader } from '@/app/dashboard/components/page-header';
import { RecentDeals } from '@/app/dashboard/recent-deals';
import { Stats } from '@/app/dashboard/stats';
import { TasksOverview } from '@/app/dashboard/tasks-overview';
import { TotalRevenue } from '@/app/dashboard/total-revenue';

export default function DashboardPage() {
  return (
    <>
      <PageHeader />

      <div className="container-fluid">
        <Content className="block space-y-6 py-5">
          <Stats />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <DealsOverview />
            </div>
            <div className="col-span-1">
              <LeadAnalytics />
            </div>
          </div>
          <h3>Live Trips With Due Payments</h3>
          <RecentDeals />
        </Content>
      </div>
    </>
  );
}

