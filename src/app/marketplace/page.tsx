import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Marketplace' };

export default function MarketplacePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Marketplace</h1>
        <p className="page-subtitle">Buy and sell on campus.</p>
      </div>

      <div className="relative max-w-sm">
        <input placeholder="Search listings..." className="input pl-9" />
        <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <p className="text-text-secondary font-medium">No listings yet</p>
        <p className="text-xs text-text-muted mt-1 max-w-xs mx-auto">
          The marketplace is empty. Listings will appear here once students start posting items for sale.
        </p>
        <button className="btn-primary mt-6 text-sm">
          Post a listing
        </button>
      </div>
    </div>
  );
}
