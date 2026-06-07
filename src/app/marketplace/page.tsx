import type { Metadata } from 'next';
import { Search, SlidersHorizontal, Plus } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';

export const metadata: Metadata = { title: 'Marketplace' };

const listings = [
  { id: 1, title: 'Calculus Textbook', price: 'P150', category: 'Books', user: 'Thabo M.', time: '2h ago', image: null },
  { id: 2, title: 'Scientific Calculator', price: 'P250', category: 'Electronics', user: 'Lerato K.', time: '5h ago', image: null },
  { id: 3, title: 'Studio Apartment', price: 'P2,500/mo', category: 'Housing', user: 'Keitumetse B.', time: '1d ago', image: null },
  { id: 4, title: 'Graphic Design Laptop', price: 'P4,500', category: 'Electronics', user: 'Goitse M.', time: '2d ago', image: null },
  { id: 5, title: 'Python Notes Bundle', price: 'P80', category: 'Books', user: 'Tshepiso R.', time: '3d ago', image: null },
  { id: 6, title: 'Bicycle - Good Condition', price: 'P800', category: 'Sports', user: 'Kagiso S.', time: '4d ago', image: null },
];

export default function MarketplacePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Marketplace</h1>
          <p className="text-text-secondary mt-1">Buy, sell, and trade on campus</p>
        </div>
        <button className="btn-primary inline-flex items-center gap-2">
          <Plus size={18} /> Create Listing
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            placeholder="Search listings..."
            className="input-field pl-10"
          />
        </div>
        <button className="btn-secondary p-3">
          <SlidersHorizontal size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((item) => (
          <Card key={item.id} hover>
            <div className="aspect-video bg-surface-light rounded-xl mb-4 flex items-center justify-center">
              <span className="text-text-muted text-sm">No image</span>
            </div>
            <CardHeader className="mb-0">
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="text-lg font-bold text-accent mt-1">{item.price}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="accent">{item.category}</Badge>
            </CardContent>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Avatar size="sm" fallback={item.user.charAt(0)} />
                <span className="text-sm text-text-secondary">{item.user}</span>
              </div>
              <span className="text-xs text-text-muted">{item.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
