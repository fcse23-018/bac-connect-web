import type { Metadata } from 'next';
import { LoginForm } from '@/components/auth/LoginForm';
import { Shield } from 'lucide-react';

export const metadata: Metadata = { title: 'Sign In' };

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Welcome Back</h1>
            <p className="text-text-secondary mt-1">Sign in to continue to BAC Connect</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
