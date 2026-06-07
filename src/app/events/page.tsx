import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = { title: 'Events' };

const events = [
  { title: 'Tech Career Fair 2024', date: '2024-08-15', time: '10:00 - 16:00', location: 'Main Hall', type: 'Career', desc: 'Meet top employers from tech companies across Botswana.' },
  { title: 'Study Skills Workshop', date: '2024-07-22', time: '14:00 - 15:30', location: 'Room 301', type: 'Academic', desc: 'Learn effective study techniques and time management.' },
  { title: 'Campus Sports Day', date: '2024-08-05', time: '08:00 - 17:00', location: 'Sports Ground', type: 'Sports', desc: 'Annual inter-departmental sports competition.' },
  { title: 'Alumni Networking Night', date: '2024-08-20', time: '18:00 - 21:00', location: 'Campus Garden', type: 'Networking', desc: 'Connect with successful BSBS alumni.' },
];

export default function EventsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Events</h1>
        <p className="text-text-secondary mt-1">Campus events and activities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, i) => (
          <Card key={i} hover>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-text-primary">{event.title}</h3>
              <Badge variant="accent">{event.type}</Badge>
            </div>
            <p className="text-sm text-text-secondary mb-4">{event.desc}</p>
            <div className="flex flex-wrap gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {event.time}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
