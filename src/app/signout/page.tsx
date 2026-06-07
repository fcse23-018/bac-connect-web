import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Out | BAC Connect',
  description: 'Sign out of your BAC Connect account.',
};

export default function SignOutPage() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center">
      <div className="text-center max-w-sm">
        <h1 className="text-xl font-bold text-text-primary mb-2">Signed out</h1>
        <p className="text-xs text-text-secondary mb-6">
          You have been successfully signed out of BAC Connect.
        </p>
        <Link href="/login" className="btn-primary text-sm">
          Sign in again
        </Link>
      </div>
    </div>
  );
}
