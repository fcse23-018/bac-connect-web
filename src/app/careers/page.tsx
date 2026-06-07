import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Careers' };

export default function CareersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Careers</h1>
        <p className="page-subtitle">Jobs, internships, and opportunities.</p>
      </div>

      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-text-secondary font-medium">No opportunities yet</p>
        <p className="text-xs text-text-muted mt-1 max-w-xs mx-auto">
          Career opportunities will be posted here by the careers office and partner organizations.
        </p>
      </div>
    </div>
  );
}
