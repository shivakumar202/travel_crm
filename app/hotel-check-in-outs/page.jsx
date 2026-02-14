
  'use client';
  import { useMemo, useState } from 'react';

import { CalendarCheck, CalendarDays, CalendarRange } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Content } from '@/components/layouts/crm/components/content';
import { ContentHeader } from './components/content-header';
  import { SearchHeader } from './components/search-header';
  import { mockContacts } from '@/app/crm/mock/contacts';
import { NoteList } from './components/notes-list';


const page = ({ filter = 'all' })=> {
  
    const [searchQuery, setSearchQuery] = useState('');

   const filteredContacts = useMemo(() => {
        let contacts = mockContacts;
        const now = new Date();
        const todayStart = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
        );
        const weekStart = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 7,
        );
    
        // Apply time-based filter
        if (filter !== 'all') {
          contacts = contacts.filter((contact) => {
            const contactDate = new Date(contact.updatedAt);
    
            switch (filter) {
              case 'today':
                // For today filter, check if date is exactly today
                return contactDate >= todayStart;
              case 'week':
                // For week filter, show contacts from the last 7 days
                return contactDate >= weekStart;
              case 'completed':
                // For completed, show contacts older than 7 days
                return contactDate < weekStart;
              default:
                return true;
            }
          });
        }
    
     
        // Apply search filter
        return contacts.filter(
          (contact) =>
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.phone?.includes(searchQuery) ||
            contact.position?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.company?.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }, [searchQuery, filter]);
  
  
  return (
    <>
     <ContentHeader className="">
            <h1 className="text-lg font-semibold">Hotel Check-Ins 
<span className='text-foreground/70 ms-2'>(Wed 11 Feb - Sat 14 Feb)</span></h1>
            <SearchHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </ContentHeader>
       <div className="flex grow px-5">
          <Tabs defaultValue="today" className="grow text-sm">
            <TabsList
              variant="line"
              className="px-5 gap-6 bg-transparent [&_button]:border-b [&_button_svg]:size-4 [&_button]:text-secondary-foreground"
            >
              <TabsTrigger value="today">
                <CalendarCheck /> Today
              </TabsTrigger>
              <TabsTrigger value="week">
                <CalendarRange /> Week
              </TabsTrigger>
              <TabsTrigger value="completed">
                <CalendarDays />
                Archive
              </TabsTrigger>
            </TabsList>
           <TabsContent value="today">
                         <NoteList filter="today" />
                       </TabsContent>
                       <TabsContent value="week">
                         <NoteList filter="week" />
                       </TabsContent>
                       <TabsContent value="completed">
                         <NoteList filter="completed" />
                       </TabsContent>
          </Tabs>
        </div>
    </>
  );
}


export default page;
