import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Out | BAC Connect',
  description: 'Sign out of your BAC Connect account.',
};

export default function SignOutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-text-primary mb-4">Signed Out</h1>
        <p className="text-text-secondary mb-8">
          You have been successfully signed out of BAC Connect.
        </p>
        <Link href="/login" className="btn-primary inline-block">
          Sign In Again
        </Link>
      </div>
    </div>
  );
}
