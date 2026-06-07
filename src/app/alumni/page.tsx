import type { Metadata } from 'next';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { BookOpen, MapPin, Briefcase } from 'lucide-react';

export const metadata: Metadata = { title: 'Alumni Network' };

const alumni = [
  { name: 'Dr. Keitumetse B.',
    year: 'Class of 2015',
    role: 'Software Engineer at Google',
    location: 'Dublin, Ireland',
    avatar: null },
  { name: 'Lerato M.',
    year: 'Class of 2018',
    role: 'Data Scientist at Standard Bank',
    location: 'Johannesburg, SA',
    avatar: null },
  { name: 'Tshepo K.', year: 'Class of 2020', role: 'Business Analyst at Deloitte', location: 'Gaborone', avatar: null },
];

export default function AlumniPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Alumni Network</h1>
        <p className="text-text-secondary mt-1">Connect with BSBS alumni around the world</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alumni.map((person, i) => (
          <Card key={i} hover>
            <CardHeader>
              <Avatar size="lg" fallback={person.name.charAt(0)} />
              <div>
                <h3 className="font-semibold text-text-primary">{person.name}</h3>
                <p className="text-sm text-text-muted">{person.year}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-text-secondary">
                <p className="flex items-center gap-2">
                  <Briefcase size={14} className="text-accent" /> {person.role}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent" /> {person.location}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
