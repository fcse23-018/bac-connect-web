import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Profile' };

export default function ProfilePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
          <span className="text-2xl font-bold text-accent">U</span>
        </div>
        <h1 className="text-xl font-bold text-text-primary mt-4">Student</h1>
        <p className="text-xs text-text-muted mt-1">Update your profile to get started.</p>
        <button className="btn-secondary text-xs mt-4 px-4 py-2">Edit profile</button>
      </Card>

      <div className="space-y-2">
        <button className="card-hover w-full flex items-center justify-between p-4 text-left">
          <span className="text-sm font-medium text-text-primary">Account settings</span>
          <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="card-hover w-full flex items-center justify-between p-4 text-left">
          <span className="text-sm font-medium text-text-primary">Security</span>
          <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="card-hover w-full flex items-center justify-between p-4 text-left border-error/30 hover:border-error/50">
          <span className="text-sm font-medium text-error">Sign out</span>
          <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </div>
  );
}
