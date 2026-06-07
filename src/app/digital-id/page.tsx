import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Digital ID' };

export default function DigitalIDPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Digital Student ID</h1>
        <p className="page-subtitle">Your secure digital identity on campus.</p>
      </div>

      <Card className="bg-gradient-to-br from-accent/20 to-surface border-accent/30 p-6 text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-text-primary">Not yet issued</h2>
        <p className="text-xs text-text-muted mt-1">Your digital ID card will appear here once activated through student affairs.</p>
      </Card>
    </div>
  );
}
