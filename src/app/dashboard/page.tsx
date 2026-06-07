import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Dashboard' };

const quickLinks = [
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/chat', label: 'Messages' },
  { href: '/groups', label: 'Groups' },
  { href: '/academic', label: 'Academic' },
  { href: '/sos', label: 'SOS' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome to BAC Connect.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Messages', value: '0' },
          { label: 'Listings', value: '0' },
          { label: 'Upcoming', value: '0' },
        ].map((stat) => (
          <div key={stat.label} className="card text-center p-4">
            <p className="text-xl font-bold text-text-primary">{stat.value}</p>
            <p className="text-xs text-text-muted mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3">Quick access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card-hover p-3 text-center"
            >
              <p className="text-sm font-medium text-text-primary">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
