'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function EditItineraryPage() {
  const dayItems = [
    { day: '1st Day', date: 'Saturday 4th Apr 2026', title: 'Port Blair Arrival - Cellular Jail Visit with Sound', desc: 'Arrival to Portblair. Our representative will meet and assist you at the Veer Savarkar Airport. Board the waiting vehicles, drive to your hotel and check in.' },
    { day: '1st Day', date: 'Saturday 4th Apr 2026', title: 'Port Blair - Cellular Jail Entry Ticket', desc: '' },
    { day: '1st Day', date: 'Saturday 4th Apr 2026', title: 'Port Blair - Cellular Jail Light and Sound Show', desc: '' },
    { day: '2nd Day', date: 'Sunday 5th Apr 2026', title: 'Port Blair to Havelock - Transfer and Radhanagar', desc: 'Transfer to Havelock by cruise. Enjoy the beautiful journey on the sea.' },
    { day: '2nd Day', date: 'Sunday 5th Apr 2026', title: 'Port Blair to Havelock - Nautika : Luxury', desc: '' },
    { day: '3rd Day', date: 'Monday 6th Apr 2026', title: 'Havelock - Elephant Beach', desc: 'Enjoy water activities at Elephant Beach.' },
    { day: '3rd Day', date: 'Monday 6th Apr 2026', title: 'Havelock - Elephant Beach - Speed Boat', desc: '' },
    { day: '4th Day', date: 'Tuesday 7th Apr 2026', title: 'Havelock to Neil Island - Transfer And Natural', desc: 'Morning proceed Neil Island by private ferry.' },
    { day: '4th Day', date: 'Tuesday 7th Apr 2026', title: 'Neil Island to Port Blair - Nautika : Luxury', desc: '' },
    { day: '5th Day', date: 'Wednesday 8th Apr 2026', title: 'Port Blair - Boat Ride to Ross Island & North Bay', desc: 'Start the day trip after having breakfast. Visit the historic Ross Island.' },
    { day: '6th Day', date: 'Thursday 9th Apr 2026', title: 'Port Blair Departure - Time to Head Back Home', desc: 'Departure from Port Blair. Check out from the hotel as per the timings advised.' }
  ];

  const priceList = [
    { label: 'Package (INR)', amount: '96,000' },
    { label: 'Hotels', amount: '93,000' },
    { label: 'Cabs', amount: '1,38,000' },
    { label: 'Inclusions', amount: '1,35,000' },
    { label: 'Extras', amount: '36,000' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container-fluid px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/trips" className="hover:text-primary">Trip Details</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Current</span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">#3057677 • Divya • Andaman • Direct Query</h1>
              <div className="text-sm text-gray-600 mt-2">4 Apr, 2026 • 5N, 6D • 2 Adults, 2 Children (9y, 4y)</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm text-gray-500">Package (INR)</div>
                <div className="text-2xl font-bold text-green-600">96,000</div>
              </div>
              <Badge className="bg-emerald-100 text-emerald-800">Converted</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">Edit Itinerary</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline">Save Details</Button>
                <Button variant="ghost">Cancel</Button>
              </div>
            </div>

            {/* Hotels (collapsed) */}
            <details className="bg-white border rounded">
              <summary className="px-4 py-3 cursor-pointer font-medium">Hotels</summary>
              <div className="px-4 pb-4 pt-2">
                <p className="text-sm text-gray-600">Add or edit hotels for the quote here.</p>
              </div>
            </details>

            {/* Cabs (collapsed) */}
            <details className="bg-white border rounded">
              <summary className="px-4 py-3 cursor-pointer font-medium">Cabs</summary>
              <div className="px-4 pb-4 pt-2">
                <p className="text-sm text-gray-600">Add or edit local transfers and cabs here.</p>
              </div>
            </details>

            {/* Inclusion / Exclusion - two column editable lists */}
            <Card>
              <CardHeader className="border-b">
                <h3 className="font-medium">Inclusion/Exclusion</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium">Included</label>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 bg-white p-2 rounded border">
                        <div className="flex-1 text-sm">AC Room Sanitized accommodation at Port Blair, Havelock & Neil Island.</div>
                        <button className="text-red-500">✕</button>
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2 rounded border">
                        <div className="flex-1 text-sm">Daily Breakfast is included in the package.</div>
                        <button className="text-red-500">✕</button>
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2 rounded border">
                        <div className="flex-1 text-sm">Private Ferry tickets for Havelock, Neil Island & Port Blair.</div>
                        <button className="text-red-500">✕</button>
                      </div>
                      <Input placeholder="Add Inclusion" className="mt-2" />
                      <button className="mt-2 text-sm text-blue-600">Add Inclusion</button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Excluded</label>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 bg-white p-2 rounded border">
                        <div className="flex-1 text-sm">All kind of personal expenses such as tips, laundry, telephone bills, beverages, etc.</div>
                        <button className="text-red-500">✕</button>
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2 rounded border">
                        <div className="flex-1 text-sm">Domestic or International Airfare.</div>
                        <button className="text-red-500">✕</button>
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2 rounded border">
                        <div className="flex-1 text-sm">Tour Guide are not included in the package, we can arrange a tour guide with an additional charge.</div>
                        <button className="text-red-500">✕</button>
                      </div>
                      <Input placeholder="Add Exclusion" className="mt-2" />
                      <button className="mt-2 text-sm text-blue-600">Add Exclusion</button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day-wise Schedule */}
            <Card>
              <CardHeader className="border-b">
                <h3 className="font-medium">Day-wise Schedule</h3>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                {dayItems.map((d, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-28 text-center">
                      <div className="text-xs text-gray-500">{d.day}</div>
                      <div className="text-xs font-medium mt-1">{d.date}</div>
                    </div>
                    <div className="flex-1 bg-white border rounded p-3">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <div className="font-medium text-sm">{d.title}</div>
                          <div className="text-xs text-gray-500 mt-2">{d.desc}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Description</div>
                          <textarea className="w-full h-28 p-2 border rounded text-sm mt-2" placeholder="Please provide detailed description of the day visit..."></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Important Notes */}
            <details className="bg-white border rounded">
              <summary className="px-4 py-3 cursor-pointer font-medium">Important Notes</summary>
              <div className="px-4 pb-4 pt-2">
                <p className="text-sm text-gray-600">Add any important notes here.</p>
              </div>
            </details>

            {/* Terms and Conditions + Things to do */}
            <Card>
              <CardHeader className="border-b">
                <h3 className="font-medium">Terms and Conditions</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-3">
                  <label className="text-sm">Bank Account Details</label>
                  <Input placeholder="" className="mt-2" />
                </div>
                <div className="bg-yellow-50 border rounded p-3 text-sm text-amber-800">These terms have been archived. Please select a different terms to align better with company policies.</div>
                <div className="mt-4">
                  <label className="text-sm font-medium">THINGS TO DO IN ANDAMAN ISLANDS</label>
                  <div className="h-40 overflow-auto mt-2 text-sm text-gray-700 bg-white p-3 border rounded">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>DSS Shore Scuba Diving - Rs. 2500 Per Person</li>
                      <li>DSS Scuba Safe Dive - Rs. 3500 Per Person</li>
                      <li>Shore Snorkelling - Rs. 2000 Per Person</li>
                      <li>Deep Water Boat Snorkelling - Rs. 3000 Per Person</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom action buttons */}
            <div className="flex items-center gap-3">
              <Button className="bg-blue-600 text-white">Save Details</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Price Summary</h3>
                </div>
              </CardHeader>
              <CardContent className="pt-3 space-y-3">
                {priceList.map((p, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-3 rounded">
                    <div className="text-sm text-gray-600">{p.label}</div>
                    <div className="font-semibold text-gray-900">{p.amount}</div>
                  </div>
                ))}
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">Net Payable</div>
                    <div className="text-lg font-bold text-green-600">96,000</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <h3 className="font-medium">Inclusion / Exclusion</h3>
              </CardHeader>
              <CardContent className="pt-3">
                <div className="text-sm text-gray-600 space-y-2">
                  <div>• AC Room Sanitized accommodation at Port Blair, Havelock & Neil Island.</div>
                  <div>• Daily Breakfast is included in the package.</div>
                  <div>• Private Ferry tickets for Havelock, Neil Island & Port Blair.</div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
