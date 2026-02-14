'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronDown, Edit2, Share2, Search, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ContentHeader } from './components/content-header';
import { SearchHeader } from './components/search-header';

// Mock hotel bookings data
const mockHotelBookings = [
  {
    id: 1,
    name: 'Nikhil Sharma',
    tag: 'ANI',
    reference: '3100073',
    bookingType: 'DQ',
    amount: '1,03,000',
    date: '15 Feb, 2026',
    duration: '7D',
    guests: '2A',
    status: '',
    lastUpdated: 'an hour ago by Asha Kujur',
    agent: 'Asha Kujur',
    comments: 'Documents submitted',
    hotels: [
      { name: 'Sea Shell Port Blair', location: 'Port Blair', stars: 5, checkIn: '15 Feb', nights: '1N', status: 'Initialized' },
      { name: 'Havelock Island Beach', location: 'Havelock', stars: 4, checkIn: '16 Feb', nights: '2N', status: 'Initialized' },
      { name: 'Sea Shell Neil Island', location: 'Neil', stars: 5, checkIn: '18 Feb', nights: '2N', status: 'Initialized' },
      { name: 'Sea Shell Port Blair', location: 'Port Blair', stars: 5, checkIn: '20 Feb', nights: '1N', status: 'Initialized' },
    ],
  },
  {
    id: 2,
    name: 'Shivagurudev',
    tag: 'ANB2B',
    reference: '3100890',
    bookingType: 'Phone Call',
    amount: '20,000',
    date: '28 Feb, 2026',
    duration: '4D',
    guests: '2A',
    status: 'On-Hold Trip',
    lastUpdated: '3 hours ago by Pravin Kumar',
    agent: 'Pravin Kumar',
    comments: 'Pending hotel confirmation',
    hotels: [
      { name: 'Sampat Regency', location: 'Port Blair', stars: 3, checkIn: '28 Feb', nights: '1N', status: 'Initialized' },
      { name: 'Honeymoon Beach Re', location: 'Havelock', stars: 2, checkIn: '01 Mar', nights: '1N', status: 'Initialized' },
      { name: 'Sampat Regency', location: 'Port Blair', stars: 3, checkIn: '02 Mar', nights: '1N', status: 'Initialized' },
    ],
  },
  {
    id: 3,
    name: 'Traveller',
    tag: 'ANI',
    reference: '3101001',
    bookingType: 'WhatsApp',
    amount: '55,000',
    date: '22 Feb, 2026',
    duration: '5D',
    guests: '3A',
    status: '',
    lastUpdated: '2 hours ago by Deepak',
    agent: 'Deepak',
    comments: 'Itinerary confirmed',
    hotels: [
      { name: 'Taj Resort', location: 'Agra', stars: 5, checkIn: '22 Feb', nights: '1N', status: 'Initialized' },
      { name: 'Lake Palace', location: 'Udaipur', stars: 5, checkIn: '23 Feb', nights: '2N', status: 'Initialized' },
    ],
  },
];


export default function HotelBookingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedBookingId, setExpandedBookingId] = useState(null);

  const filteredBookings = useMemo(() => {
    return mockHotelBookings.filter((booking) =>
      booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.reference?.includes(searchQuery) ||
      booking.tag?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.comments?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleExpanded = (id) => {
    setExpandedBookingId(expandedBookingId === id ? null : id);
  };

  return (
    <>
      <ContentHeader className="">
        <h1 className="text-sm font-semibold">Hotel Bookings</h1>
        <SearchHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </ContentHeader>
      <div className="container-fluid p-4">
      
        {/* Table Header */}
        <div className="mb-3 flex gap-0 text-xs font-semibold text-muted-foreground bg-gray-50 border border-gray-200 rounded-t-lg overflow-hidden">
          <div className="w-96 px-4 py-3 border-r">Basic Details</div>
          <div className="flex-1 px-4 py-3 border-r">Hotel</div>
          <div className="w-32 px-4 py-3 border-r text-center">Duration</div>
          <div className="w-32 px-4 py-3 border-r text-center">Status</div>
          <div className="w-24 px-4 py-3 border-r text-center">Tag</div>
          <div className="w-48 px-4 py-3">Comments</div>
        </div>

        {/* Bookings Rows */}
        <div className="space-y-0.5">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="border border-gray-200 bg-white">
              {/* Main Row */}
              <div className="flex gap-0 hover:bg-gray-50 transition-colors">
                {/* Left: Basic Details */}
                <div className="w-96 border-r p-4 space-y-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <Link href="#" className="font-semibold text-primary hover:underline text-sm">
                        {booking.name}
                      </Link>
                      <span className="text-muted-foreground text-xs">• {booking.tag}</span>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1 mt-1.5">
                      <div># {booking.reference} • {booking.bookingType} • ₹{booking.amount}</div>
                      <div>{booking.date} • {booking.duration} • {booking.guests}</div>
                    </div>
                  </div>

                  {booking.status && (
                    <div className="text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded px-2 py-1">
                      <div className="font-medium">{booking.status}</div>
                      <div className="text-yellow-600">{booking.lastUpdated}</div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      {booking.agent}
                    </Link>
                  </div>
                </div>

                {/* Middle: Hotels Summary */}
                <div className="flex-1 border-r p-4">
                  <button
                    onClick={() => toggleExpanded(booking.id)}
                    className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors"
                  >
                    <span>
                      <span className="font-bold">0</span>
                      <span className="text-muted-foreground"> / {booking.hotels.length} Booked • </span>
                      <span className="font-bold">0</span>
                      <span className="text-muted-foreground"> / {booking.hotels.length} Voucher Sent</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedBookingId === booking.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {/* Right: Duration */}
                <div className="w-32 border-r p-4 text-center">
                  <div className="text-sm font-medium">{booking.duration}</div>
                </div>

                {/* Right: Status */}
                <div className="w-32 border-r p-4 text-center">
                  {booking.status ? (
                    <Badge variant="secondary" className="bg-yellow-50 text-yellow-900 border-yellow-200">
                      {booking.status}
                    </Badge>
                  ) : (
                    <span className="text-xs text-muted-foreground">-</span>
                  )}
                </div>

                {/* Right: Tag */}
                <div className="w-24 border-r p-4 text-center">
                  <Badge variant={booking.tag === 'ANI' ? 'default' : 'outline'} className="text-xs">
                    {booking.tag}
                  </Badge>
                </div>

                {/* Right: Comments */}
                <div className="w-48 p-4">
                  <div className="text-xs text-muted-foreground truncate" title={booking.comments}>
                    {booking.comments || '-'}
                  </div>
                </div>
              </div>

              {/* Expandable Hotels Section */}
              {expandedBookingId === booking.id && (
                <div className="border-t bg-gray-50">
                  {booking.hotels.map((hotel, idx) => (
                    <div key={idx} className="flex gap-0 border-b last:border-b-0 hover:bg-gray-100 transition-colors p-4">
                      <div className="w-96 border-r pr-4">
                        <div className="text-sm">
                          <Link href="#" className="text-primary font-medium hover:underline">
                            {hotel.name}
                          </Link>
                          <div className="text-xs text-muted-foreground">
                            {hotel.location}, {hotel.stars} Star
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 border-r px-4 flex items-center gap-2">
                        <button className="p-1 hover:text-primary transition-colors hover:bg-gray-200 rounded">
                          <Edit2 className="size-4" />
                        </button>
                        <button className="p-1 hover:text-primary transition-colors hover:bg-gray-200 rounded">
                          <Share2 className="size-4" />
                        </button>
                      </div>

                      <div className="w-32 border-r px-4 text-center flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">{hotel.checkIn} • {hotel.nights}</span>
                      </div>

                      <div className="w-32 border-r px-4 text-center flex items-center justify-center">
                        <Badge variant="secondary" className="text-xs">
                          {hotel.status}
                        </Badge>
                      </div>

                      <div className="w-24 border-r px-4"></div>
                      <div className="w-48 px-4"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        {filteredBookings.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No bookings found
          </div>
        )}
      </div>
    </>
  );
}
