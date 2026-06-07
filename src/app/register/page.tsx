import type { Metadata } from 'next';
import { RegisterForm } from '@/components/auth/RegisterForm';

export const metadata: Metadata = { title: 'Create account' };

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center py-8">
      <div className="w-full max-w-sm">
        <div className="card p-6">
          <div className="text-center mb-6">
            <img src="/images/logo.png" alt="BAC" className="w-10 h-10 rounded-lg mx-auto mb-3" />
            <h1 className="text-xl font-bold text-text-primary">Create account</h1>
            <p className="text-xs text-text-secondary mt-1">Join the BAC student community</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
