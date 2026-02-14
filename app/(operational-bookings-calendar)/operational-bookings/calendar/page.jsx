'use client';

import { useMemo, useState } from 'react';
import { addDays, setHours, setMinutes, subDays, format } from 'date-fns';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentHeader } from './components/content-header';
import { SearchHeader } from './components/search-header';

const mockBookings = [
  { location: 'Neil Island - Port Blair', agent: 'Utsav Sapkota', rooms: 8, services: 1, checkIn: '6 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Port Blair', agent: 'Utsav Sapkota', rooms: 8, services: 1, checkIn: '7 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Port Blair Departure', agent: 'Utsav Sapkota', rooms: 8, services: 2, checkIn: '8 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Port Blair Arrival', agent: 'Mr Prateek Srivastava', rooms: 8, services: 1, checkIn: '9 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Port Blair - Havelock', agent: 'Mr Prateek Srivastava', rooms: 8, services: 1, checkIn: '10 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Havelock', agent: 'Mr Prateek Srivastava', rooms: 8, services: 1, checkIn: '11 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Havelock - Neil Island', agent: 'Mr Prateek Srivastava', rooms: 8, services: 1, checkIn: '12 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Neil Island - Port Blair', agent: 'Mr Prateek Srivastava', rooms: 8, services: 1, checkIn: '13 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Port Blair Departure', agent: 'Mr Prateek Srivastava', rooms: 8, services: 2, checkIn: '14 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-orange-100' },
  { location: 'Port Blair Arrival', agent: 'Umang', rooms: 8, services: 1, checkIn: '15 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-green-100' },
  { location: 'Port Blair', agent: 'Umang', rooms: 8, services: 2, checkIn: '16 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-green-100' },
  { location: 'Havelock', agent: 'Umang', rooms: 8, services: 2, checkIn: '17 Feb, 2026', nights: '1 Xylo / Ertiga', color: 'bg-green-100' },
];

const getDayNumber = (date) => {
  return [
    { date: 6, booked: 116, unbooked: 0 },
    { date: 7, booked: 119, unbooked: 0 },
    { date: 8, booked: 124, unbooked: 0 },
    { date: 9, booked: 136, unbooked: 0 },
    { date: 10, booked: 142, unbooked: 0 },
    { date: 11, booked: 134, unbooked: 0 },
    { date: 12, booked: 135, unbooked: 0 },
    { date: 13, booked: 138, unbooked: 0 },
    { date: 14, booked: 133, unbooked: 0 },
    { date: 15, booked: 123, unbooked: 0 },
    { date: 16, booked: 120, unbooked: 0 },
    { date: 17, booked: 134, unbooked: 0 },
  ].find(d => d.date === date) || { booked: 0, unbooked: 0 };
};

export default function OperationalBookingsCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 11)); // Feb 11, 2026

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth();
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Generate array of days
  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weekDays = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const expandedDateRange = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; // Feb 6-17
const [searchQuery, setSearchQuery] = useState('');


const filteredBookings = useMemo(() => {
  return mockBookings.filter((b) =>
    b.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.agent.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [searchQuery]);

  return (
    <>
    
     <ContentHeader className="">
            <h1 className="text-lg font-semibold">Operational Bookings</h1>
            <SearchHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          </ContentHeader>
    <div className="p-4 space-y-4">

         

      {/* Expanded Dates Header */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex gap-1 min-w-min">
          {expandedDateRange.map((day) => {
            const date = new Date(2026, 1, day); // Feb 2026
            const dayOfWeek = weekDays[date.getDay()];
            const dayData = getDayNumber(day);
            const isToday = day === 11;

            return (
              <div
                key={day}
                className={`flex flex-col items-center justify-center p-3 rounded-lg min-w-max border-2 ${
                  isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="text-xs font-semibold text-gray-600">{dayOfWeek}</div>
                <div className={`text-2xl font-bold ${isToday ? 'text-blue-600' : 'text-gray-800'}`}>
                  {day}
                </div>
                <div className="text-xs text-gray-500">Feb, 2026</div>
                <div className="text-sm font-semibold text-gray-700 mt-1 whitespace-nowrap">
                  <span className="text-gray-600">0 + </span>
                  <span className="text-orange-600">{dayData.booked}</span>
                  <span className="text-gray-600"> = </span>
                  <span className="font-bold text-gray-800">{dayData.booked}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{monthName}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          if (!day) {
            return <div key={`empty-${idx}`} className="bg-gray-50 rounded-lg p-1 min-h-32"></div>;
          }

          const dayData = getDayNumber(day);
          const isToday = day === 11;

          return (
            <div
              key={day}
              className={`rounded-lg p-2 min-h-32 border-2 ${
                isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
              } overflow-hidden`}
            >
              <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
                {weekDays[new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay()]}
              </div>
              <div className={`text-lg font-bold mb-1 ${isToday ? 'text-blue-600' : ''}`}>
                {day}
              </div>
              <div className="text-xs mb-2">
                <span className="font-semibold text-orange-600">{dayData.booked}</span>
                <span className="text-gray-500"> = {dayData.booked}</span>
              </div>

              {/* Booking Cards for this day */}
              <div className="space-y-1 max-h-20 overflow-y-auto">
                {mockBookings
                  .filter((b) => parseInt(b.checkIn.split(' ')[0]) === day)
                  .map((booking, i) => (
                    <div
                      key={i}
                      className={`${booking.color} text-xs p-1 rounded truncate`}
                    >
                      <div className="font-semibold truncate">{booking.location}</div>
                      <div className="text-gray-700 truncate">{booking.agent}</div>
                      <div className="text-gray-600">{booking.rooms} • {booking.services}+1 Service</div>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
