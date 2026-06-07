import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Wellness' };

export default function WellnessPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Wellness</h1>
        <p className="page-subtitle">Mental health and well-being support.</p>
      </div>

      <Card className="p-6">
        <p className="text-text-secondary text-sm">Wellness resources coming soon.</p>
        <p className="text-xs text-text-muted mt-1">Counseling services, peer support, and wellness workshops will be listed here.</p>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold text-text-primary mb-1">Need immediate help?</h3>
        <p className="text-xs text-text-secondary">Contact campus security at +267 391 2345 or visit the student affairs office.</p>
      </Card>
    </div>
  );
}
