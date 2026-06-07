import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Lost & Found' };

export default function LostAndFoundPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Lost & Found</h1>
        <p className="page-subtitle">Report and find lost items on campus.</p>
      </div>

      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p className="text-text-secondary font-medium">No items reported</p>
        <p className="text-xs text-text-muted mt-1 max-w-xs mx-auto">
          Lost and found items will appear here. Report a lost item or check for found belongings.
        </p>
        <button className="btn-primary mt-6 text-sm">Report item</button>
      </div>
    </div>
  );
}
