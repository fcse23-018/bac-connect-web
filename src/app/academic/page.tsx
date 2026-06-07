import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Academic' };

export default function AcademicPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Academic</h1>
        <p className="page-subtitle">Your courses and timetable.</p>
      </div>

      <Card className="p-6 text-center">
        <p className="text-text-secondary text-sm">Academic information coming soon.</p>
        <p className="text-xs text-text-muted mt-1">Course schedules, assignments, and grades will appear here.</p>
      </Card>
    </div>
  );
}
