import React from 'react';

export default function SalesReportCard({
  month = 'February 2026',
  revenueLabel = 'INR',
  revenue = '62,94,804',
  leads = 484,
  quotes = 2149,
  conversion = 91,
}) {
  return (
    <div className="w-full max-w-full border-b p-4">
      <h1 className="text-2xl font-semibold mb-4">{month}</h1>

      <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center min-w-[260px]">
            <div className="w-1 h-16 bg-sky-200 rounded mr-4" />
            <div className="pr-6 border-r border-gray-200">
              <div className="text-sm text-gray-500">Revenue</div>
              <div className="mt-2 flex items-baseline gap-3">
                <div className="text-sm text-gray-500">{revenueLabel}</div>
                <div className="text-4xl font-semibold tracking-tight">{revenue}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 pl-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="w-36">
                <div className="text-sm text-gray-500">Leads</div>
                <div className="text-2xl font-semibold">{leads}</div>
              </div>

              <div className="w-36">
                <div className="text-sm text-gray-500">Quotes</div>
                <div className="text-2xl font-semibold">{quotes}</div>
              </div>

              <div className="w-36">
                <div className="text-sm text-gray-500">Conversion</div>
                <div className="text-2xl font-semibold">{conversion}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
