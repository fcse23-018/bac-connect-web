'use client';

import { Card } from '@/components/ui/Card';

const emergencyContacts = [
  { name: 'Campus Security', number: '+267 391 2345', dept: '24/7 Security' },
  { name: 'Health Center', number: '+267 391 2346', dept: 'Medical Emergencies' },
  { name: 'Student Affairs', number: '+267 391 2347', dept: 'Student Support' },
  { name: 'IT Helpdesk', number: '+267 391 2348', dept: 'Technical Support' },
  { name: 'Police', number: '999', dept: 'Emergency Services' },
  { name: 'Ambulance', number: '997', dept: 'Medical Emergency' },
];

export default function SOSPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center py-6">
        <div className="w-14 h-14 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-text-primary">Emergency Contacts</h1>
        <p className="text-xs text-text-secondary mt-1">Quick access to campus and national emergency services</p>
      </div>

      <div className="bg-error/10 border border-error/20 rounded-xl p-4">
        <p className="text-xs text-text-secondary">
          For life-threatening emergencies, call <strong className="text-error">999</strong> (Police) or <strong className="text-error">997</strong> (Ambulance) immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {emergencyContacts.map((contact) => (
          <Card key={contact.name} hover className="p-4">
            <h3 className="font-semibold text-sm text-text-primary">{contact.name}</h3>
            <p className="text-xs text-text-muted mt-0.5">{contact.dept}</p>
            <p className="text-base font-bold text-accent mt-2">{contact.number}</p>
            <button
              className="btn-secondary w-full mt-3 text-xs py-2"
              onClick={() => window.open(`tel:${contact.number.replace(/\s/g, '')}`, '_blank')}
            >
              Call
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
