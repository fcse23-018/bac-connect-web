import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Store, Star, MapPin } from 'lucide-react';

export const metadata: Metadata = { title: 'Services' };

const stores = [
  { name: 'Campus Printing Hub', rating: 4.5, category: 'Printing', location: 'Block B', desc: 'Affordable printing, binding, and scanning services.' },
  { name: 'Tech Fix BSBS', rating: 4.8, category: 'Tech Repair', location: 'Block D', desc: 'Phone and laptop repairs at student-friendly prices.' },
  { name: 'Books & Beyond', rating: 4.2, category: 'Bookstore', location: 'Main Building', desc: 'New and used textbooks, stationery, and academic supplies.' },
  { name: 'Campus Eats', rating: 4.6, category: 'Food', location: 'Cafeteria', desc: 'Affordable meals, snacks, and beverages for students.' },
];

export default function StorefrontsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Campus Services</h1>
        <p className="text-text-secondary mt-1">Student-run businesses and campus services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stores.map((store, i) => (
          <Card key={i} hover>
            <CardHeader>
              <div className="p-3 bg-accent/20 rounded-xl"><Store size={20} className="text-accent" /></div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">{store.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="accent">{store.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-warning"><Star size={14} /> {store.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary mb-3">{store.desc}</p>
              <p className="flex items-center gap-1 text-sm text-text-muted"><MapPin size={14} /> {store.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
