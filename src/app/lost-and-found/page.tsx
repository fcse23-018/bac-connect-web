import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MapPin, Calendar, Plus } from 'lucide-react';

export const metadata: Metadata = { title: 'Lost & Found' };

const items = [
  { id: 1, title: 'Blue Notebook', location: 'Library - 2nd Floor', date: '2024-07-10', status: 'lost' as const, desc: 'A5 spiral notebook with calculus notes.' },
  { id: 2, title: 'Student ID Card', location: 'Cafeteria', date: '2024-07-12', status: 'found' as const, desc: 'ID card for student BSBS-2024-0089.' },
  { id: 3, title: 'USB Flash Drive', location: 'Computer Lab', date: '2024-07-14', status: 'lost' as const, desc: '32GB SanDisk, blue casing.' },
  { id: 4, title: 'Calculator', location: 'Hall A', date: '2024-07-15', status: 'found' as const, desc: 'Casio fx-991ES Plus, found after lecture.' },
];

export default function LostAndFoundPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Lost & Found</h1>
          <p className="text-text-secondary mt-1">Report and find lost items on campus</p>
        </div>
        <Button>
          <Plus size={16} className="mr-2" /> Report Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Card key={item.id} hover>
            <CardHeader>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-muted mt-0.5">{item.desc}</p>
              </div>
              <Badge variant={item.status === 'lost' ? 'warning' : 'success'}>
                {item.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-accent" /> {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-accent" /> {item.date}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
