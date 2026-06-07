'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { sanitizeEmail } from '@/lib/utils/urlValidator';
import { sanitizeError } from '@/lib/utils/errorSanitizer';
import { Eye, EyeOff, Mail, AlertCircle } from 'lucide-react';

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: sanitizeEmail(form.email),
        password: form.password,
      });

      if (authError) throw authError;
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      setError(sanitizeError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="flex items-center gap-2 p-3 bg-error/10 border border-error/20 rounded-xl text-sm text-error">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <Input
        label="Email"
        type="email"
        placeholder="Enter your student email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        icon={<Mail size={18} className="text-text-muted" />}
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-text-secondary">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            className="input-field pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Link
          href="/forgot-password"
          className="text-sm text-accent hover:text-accent-hover transition-all"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" loading={loading} className="w-full">
        Sign In
      </Button>

      <p className="text-center text-sm text-text-muted">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-accent hover:text-accent-hover font-medium">
          Create one
        </Link>
      </p>
    </form>
  );
}
