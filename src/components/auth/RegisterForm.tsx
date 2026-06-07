'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { sanitizeEmail } from '@/lib/utils/urlValidator';
import { sanitizeError } from '@/lib/utils/errorSanitizer';
import { isStrongPassword } from '@/lib/utils/sanitize';
import { Eye, EyeOff, Mail, Lock, User, Hash, AlertCircle } from 'lucide-react';

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    studentId: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isStrongPassword(form.password)) {
      setError('Password must be 8+ chars with uppercase, lowercase, number, and symbol.');
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: sanitizeEmail(form.email),
        password: form.password,
        options: {
          data: {
            full_name: form.fullName,
            student_id: form.studentId,
          },
        },
      });

      if (signUpError) throw signUpError;

      if (authData.user) {
        await supabase.from('users').insert({
          id: authData.user.id,
          email: sanitizeEmail(form.email),
          full_name: form.fullName,
          student_id: form.studentId,
          role: 'student',
        });
      }

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
        label="Full Name"
        placeholder="John Doe"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        required
      />

      <Input
        label="Student ID"
        placeholder="e.g. BSBS-2024-0001"
        value={form.studentId}
        onChange={(e) => setForm({ ...form, studentId: e.target.value })}
        required
      />

      <Input
        label="Email"
        type="email"
        placeholder="your.name@bsbs.ac.bw"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-text-secondary">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
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
        <p className="text-xs text-text-muted">
          Min 8 chars, uppercase, lowercase, number, and symbol required
        </p>
      </div>

      <Button type="submit" loading={loading} className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-text-muted">
        Already have an account?{' '}
        <Link href="/login" className="text-accent hover:text-accent-hover font-medium">
          Sign in
        </Link>
      </p>
    </form>
  );
}
