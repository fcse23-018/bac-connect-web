import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Alumni' };

export default function AlumniPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Alumni Network</h1>
        <p className="page-subtitle">Connect with BAC alumni.</p>
      </div>

      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <p className="text-text-secondary font-medium">Alumni directory coming soon</p>
        <p className="text-xs text-text-muted mt-1 max-w-xs mx-auto">
          Connect with BAC graduates, share opportunities, and grow your professional network.
        </p>
      </div>
    </div>
  );
}
