'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Phone, MapPin, Shield, AlertTriangle } from 'lucide-react';

const emergencyContacts = [
  { name: 'Campus Security', number: '+267 391 2345', dept: '24/7 Security' },
  { name: 'Health Center', number: '+267 391 2346', dept: 'Medical Emergencies' },
  { name: 'Student Affairs', number: '+267 391 2347', dept: 'Student Support' },
  { name: 'IT Helpdesk', number: '+267 391 2348', dept: 'Technical Support' },
  { name: 'National Police', number: '999', dept: 'Emergency Services' },
  { name: 'Ambulance', number: '997', dept: 'Medical Emergency' },
];

export default function SOSPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield size={40} className="text-error" />
        </div>
        <h1 className="text-3xl font-bold text-text-primary">Emergency SOS</h1>
        <p className="text-text-secondary mt-2">Quick access to campus and national emergency services</p>
      </div>

      <div className="bg-error/10 border border-error/20 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle size={24} className="text-error flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-text-primary mb-1">In case of emergency</h2>
            <p className="text-sm text-text-secondary">
              Call campus security immediately for on-campus incidents. 
              For life-threatening emergencies, dial 999 (Police) or 997 (Ambulance).
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emergencyContacts.map((contact) => (
          <Card key={contact.name} hover className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full" />
            <div className="relative z-10">
              <h3 className="font-semibold text-text-primary">{contact.name}</h3>
              <p className="text-sm text-text-muted mt-0.5">{contact.dept}</p>
              <p className="text-xl font-bold text-accent mt-3">{contact.number}</p>
              <Button
                variant="primary"
                className="w-full mt-4"
                onClick={() => window.open(`tel:${contact.number.replace(/\s/g, '')}`, '_blank')}
              >
                <Phone size={16} className="mr-2" /> Call Now
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex items-start gap-4">
          <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-text-primary mb-1">Campus Locations</h3>
            <p className="text-sm text-text-secondary">
              Main Campus: Plot 123, Gaborone CBD<br />
              Security Office: Block A, Ground Floor<br />
              Health Center: Block C, Room 101
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
