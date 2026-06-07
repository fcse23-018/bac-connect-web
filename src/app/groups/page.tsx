import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Users, Plus, Search } from 'lucide-react';

export const metadata: Metadata = { title: 'Groups' };

const groups = [
  { id: 1, name: 'Computer Science 2024', members: 45, category: 'Academic', desc: 'Discuss assignments, share resources, and help each other with CS courses.' },
  { id: 2, name: 'BSBS Sports Club', members: 78, category: 'Sports', desc: 'Organize and participate in sports events and activities.' },
  { id: 3, name: 'Music & Arts Society', members: 34, category: 'Arts', desc: 'For students passionate about music, art, and creative expression.' },
  { id: 4, name: 'Entrepreneurship Hub', members: 56, category: 'Business', desc: 'Connect with fellow student entrepreneurs and share business ideas.' },
];

export default function GroupsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Groups</h1>
          <p className="text-text-secondary mt-1">Join study groups and student communities</p>
        </div>
        <Button>
          <Plus size={16} className="mr-2" /> Create Group
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input placeholder="Search groups..." className="input-field pl-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group) => (
          <Card key={group.id} hover className="cursor-pointer">
            <CardHeader>
              <div className="p-3 bg-accent/20 rounded-xl">
                <Users size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">{group.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="accent">{group.category}</Badge>
                  <span className="text-sm text-text-muted">{group.members} members</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">{group.desc}</p>
              <Button variant="secondary" className="w-full mt-4">Join Group</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
