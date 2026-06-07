import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Heart, Phone, MessageCircle, Users } from 'lucide-react';

export const metadata: Metadata = { title: 'Wellness Center' };

const services = [
  { title: 'Counseling Services', desc: 'Confidential one-on-one counseling with licensed therapists.', contact: '+267 391 2346', icon: Heart },
  { title: 'Peer Support Group', desc: 'Connect with trained peer supporters in a safe space.', contact: 'peer-support@bsbs.ac.bw', icon: Users },
  { title: 'Crisis Helpline', desc: 'Immediate support for students in distress.', contact: '+267 391 2349', icon: Phone },
  { title: 'Wellness Workshops', desc: 'Regular workshops on stress management, mindfulness, and more.', contact: 'wellness@bsbs.ac.bw', icon: MessageCircle },
];

export default function WellnessPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Wellness Center</h1>
        <p className="text-text-secondary mt-1">Your mental health and well-being matter</p>
      </div>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <Heart size={24} className="text-accent flex-shrink-0 mt-1" />
          <div>
            <h2 className="font-bold text-text-primary mb-1">You are not alone</h2>
            <p className="text-sm text-text-secondary">
              BSBS Wellness Center provides free, confidential support for all students. 
              Whether you need someone to talk to or professional counseling, we are here for you.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} hover>
              <CardHeader>
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{service.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-secondary mb-3">{service.desc}</p>
                <p className="text-sm text-accent font-medium">{service.contact}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
