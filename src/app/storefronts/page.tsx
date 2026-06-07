import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Services' };

export default function StorefrontsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Campus Services</h1>
        <p className="page-subtitle">Student-run businesses and campus services.</p>
      </div>

      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <p className="text-text-secondary font-medium">No services listed yet</p>
        <p className="text-xs text-text-muted mt-1 max-w-xs mx-auto">
          Campus services will appear here once registered by student businesses and service providers.
        </p>
      </div>
    </div>
  );
}
