'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Edit2, MessageCircle, MapPin, Users, Tag, MoreVertical, MapIcon, Pen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function TripDetailsPage({ params }) {
  const tripId = params.id;
  const [activeTab, setActiveTab] = useState('itinerary');

  // Mock data - replace with actual data fetching
  const tripData = {
    id: '3120914',
    title: 'Andaman Trip',
    status: 'Initiated',
    destination: 'Andaman',
    date: '5 Mar, 2026',
    duration: '4N 3D',
    adults: '2 Adults',
    traveller: {
      name: 'Traveller',
      phone: '+91 8143 5204',
      tag: '[4]'
    },
    tags: ['No Tags'],
    salesTeam: 'Joshi',
    itineraries: [
      {
        day: 'Day 1',
        title: 'Port Blair Arrival - Coelyn\'s Cove Beach & Flag Point, Cellular Jail with Sound & Light Show',
        locations: [
          'Port Blair - Cellular Jail Entry Ticket',
          'Port Blair - Cellular Jail Light and Sound Show'
        ]
      },
      {
        day: 'Day 2',
        title: 'Port Blair to Havelock - Transfer and Esparana Beach & Radhanagar Beach',
        locations: [
          'Port Blair to Havelock - Sabita Luxury',
          'Havelock to - Elephant Beach - Speed Boat'
        ]
      },
      {
        day: 'Day 3',
        title: 'Havelock to Neil Island - Transfer and Laxmanpur, Bharatpur Beach & Natural Bridge',
        locations: [
          'Havelock to Neil Island - Private Ferry: Maksieur / Nautika / Maksieur / Owen Ocean (Slave Category Items)',
          'Havelock - Elephant Beach - Speed Boat'
        ]
      },
      {
        day: 'Day 4',
        title: 'Neil Island to Port Blair - Return to Port Blair and Chitrasgarh Sunset',
        locations: [
          'Neil Island to Port Blair - Nautika: Luxury',
          'Port Blair Departure - Time to Head Back Home'
        ]
      }
    ],
    quotes: [
      {
        id: '310154',
        title: 'Vivek Sinha',
        destinations: ['Port Blair', '1N', 'Havelock', '2N', 'Neill Island', '1N'],
        locations: [
          'Port Blair - Arrival - Coelyn\'s Cove Beach & Cellular Jar with Sound & Light Show',
          'Port Blair - Cellular Jar Entry Ticket',
          'Port Blair - Cellular Jar Light and Sound Show',
          'Port Blair to Havelock - Transfer and Esparana Beach & Radhanagar Beach',
          'Port Blair to Havelock - Sabita: Luxury'
        ],
        hotels: [
          { name: 'Port Blair Beach Resorts', location: 'Port Blair', nights: '1N', price: '₹4,500/night' },
          { name: 'Havelock Island Retreat', location: 'Havelock', nights: '2N', price: '₹6,800/night' },
          { name: 'Neil Island Vacation', location: 'Neil Island', nights: '1N', price: '₹5,200/night' }
        ],
        pricing: [
          { item: 'Accommodation (4 nights)', amount: '₹35,000', breakdown: '₹4,500 + ₹6,800×2 + ₹5,200' },
          { item: 'Flights (Delhi to Port Blair)', amount: '₹24,000', breakdown: '₹12,000 per person × 2' },
          { item: 'Local Transfers & Activities', amount: '₹8,500', breakdown: 'Speed boat, ferry, island tours' },
          { item: 'Meals & Permits', amount: '₹6,000', breakdown: 'Cellular jail + miscellaneous' },
          { item: 'Service Charge (10%)', amount: '₹7,350', breakdown: 'On total package' }
        ]
      },
      {
        id: '310153',
        title: 'Vivek Sinha',
        destinations: ['Port Blair', '1N', 'Havelock', '1N', 'Neill Island', '1N'],
        locations: [
          'Port Blair - Arrival - Coelyn\'s Cove Beach & Cellular Jar',
          'Port Blair - Cellular Jar Entry Ticket',
          'Port Blair - Cellular Jar Light and Sound Show',
          'Port Blair to Havelock - Transfer and Esparana Beach & Radhanagar Beach',
          'Port Blair to Havelock - Sabita: Luxury'
        ],
        hotels: [
          { name: 'Port Blair Beach Resorts', location: 'Port Blair', nights: '1N', price: '₹4,500/night' },
          { name: 'Havelock Island Retreat', location: 'Havelock', nights: '1N', price: '₹6,800/night' },
          { name: 'Neil Island Vacation', location: 'Neil Island', nights: '1N', price: '₹5,200/night' }
        ],
        pricing: [
          { item: 'Accommodation (3 nights)', amount: '₹16,500', breakdown: '₹4,500 + ₹6,800 + ₹5,200' },
          { item: 'Flights (Delhi to Port Blair)', amount: '₹24,000', breakdown: '₹12,000 per person × 2' },
          { item: 'Local Transfers & Activities', amount: '₹7,200', breakdown: 'Speed boat, ferry, island tours' },
          { item: 'Meals & Permits', amount: '₹5,500', breakdown: 'Cellular jail + miscellaneous' },
          { item: 'Service Charge (10%)', amount: '₹5,320', breakdown: 'On total package' }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container-fluid px-4 py-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/trips" className="hover:text-primary">Trips</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Current</span>
          </div>

          {/* Trip Header Info */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">
                  #{tripData.id} • Traveller • {tripData.destination} • Direct Query
                </h1>
                <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Initiated</Badge>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>🗓️ {tripData.date} • 4N 3D • 2 Adults</p>
                <p>Traveller • +91 8143 5204 [4] ∆</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quote Section */}
            <Card>
              <CardHeader className="border-b">
                <h2 className="font-semibold text-lg">To Create Quote you can start the below suggestions.</h2>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-4">
                  <Input placeholder="Search by trip id or guest name" className="bg-slate-100" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">DETAILS :</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Port Blair', '1N', 'Havelock', '2N', 'Neill Island', '1N'].map((item) => (
                      <div key={item} className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full text-sm">
                        {item}
                        {item.includes('N') && <span className="text-xs"> Night</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Itinerary Section */}
            <Card>
              <CardHeader className="border-b">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList variant="line" className="w-full justify-start">
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="hotels">Hotels</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="pt-0">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsContent value="itinerary" className="space-y-4 mt-0">
                    {tripData.itineraries.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-4 py-3">
                        <div className="flex items-start gap-2 mb-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{item.day}</Badge>
                          <p className="font-medium text-sm text-gray-900">{item.title}</p>
                        </div>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {item.locations.map((loc, locIdx) => (
                            <li key={locIdx} className="flex gap-2">
                              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                              <span>{loc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="hotels" className="space-y-4 mt-4">
                    <div className="text-center py-8 text-gray-500">
                      Hotels information will be displayed here
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="space-y-4 mt-4">
                    <div className="text-center py-8 text-gray-500">
                      Detailed information will be displayed here
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Quotes Section */}
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Quotes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tripData.quotes.map((quote, idx) => (
                  <Card key={idx}>
                  <CardHeader className="border-b pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Itiniary #310154 • Kanwari</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {quote.destinations.map((dest, destIdx) => (
                            <Badge key={destIdx} variant="outline" className="text-xs">
                              {dest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-2">
                    <Tabs defaultValue="itinerary" className="w-full">
                      <TabsList variant="line" className="w-full justify-start">
                        <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                        <TabsTrigger value="hotels">Hotels</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                      </TabsList>
                      <TabsContent value="itinerary" className="space-y-2 mt-3">
                        {quote.locations.slice(0, 5).map((loc, locIdx) => (
                          <div key={locIdx} className="flex gap-2 text-sm text-gray-700">
                            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                            <span>{loc}</span>
                          </div>
                        ))}
                      </TabsContent>
                      <TabsContent value="hotels" className="mt-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {quote.hotels.map((hotel, hotelIdx) => (
                            <div key={hotelIdx} className="border rounded-lg p-3 bg-slate-50">
                              <p className="font-medium text-sm text-gray-900 mb-1">{hotel.name}</p>
                              <div className="space-y-1 text-xs text-gray-600">
                                <p><span className="font-semibold">Location:</span> {hotel.location}</p>
                                <p><span className="font-semibold">Duration:</span> {hotel.nights}</p>
                                <p className="text-blue-600 font-semibold mt-2">{hotel.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="details" className="mt-3">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm text-gray-900 mb-3">Pricing Breakup</h4>
                          <div className="space-y-2">
                            {quote.pricing.map((item, priceIdx) => (
                              <div key={priceIdx} className="flex items-start justify-between border-b pb-2 last:border-0">
                                <div className="flex-1">
                                  <p className="font-medium text-sm text-gray-900">{item.item}</p>
                                  <p className="text-xs text-gray-500 mt-0.5">{item.breakdown}</p>
                                </div>
                                <p className="font-semibold text-sm text-gray-900 whitespace-nowrap ml-2">{item.amount}</p>
                              </div>
                            ))}
                          </div>
                          <div className="border-t-2 pt-2 mt-3 flex items-center justify-between">
                            <p className="font-bold text-gray-900">Total Amount</p>
                            <p className="font-bold text-lg text-blue-600">₹80,850</p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <div className="border-t pt-3 mt-3">
                    <Button className="w-full bg-white hover:bg-blue-700 hover:text-white text-blue-600 text-sm">Use this Quote</Button>
                  </div>
                </Card>
                ))}
              </div>
              <div className="mt-6 items-center justify-center flex">
                <Button className="w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-24"><Pen className="" /> Create Custom Quotation</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
          
            {/* Sales Team Section */}
            <Card>
              <CardHeader className="border-b">
                <h3 className="font-semibold">Sales Team</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-indigo-100 text-indigo-900 text-xs">JO</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Joshi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tasks & Comments Section */}
            <Card>
              <CardHeader className="border-b">
                <h3 className="font-semibold">Tasks & Comments</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-center py-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">All caught up!</p>
                  <p className="text-xs text-gray-500 mb-4">Add comments such as follow ups, required actions etc.</p>
                  <Button variant="link" size="sm" className="text-blue-600 text-xs">
                    Add New
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
