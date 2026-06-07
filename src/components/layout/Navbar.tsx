'use client';

import Link from 'next/link';
import { useUser } from '@/hooks/useAuth';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Navbar() {
  const { user, loading } = useUser();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 sm:px-6">
        <Link href={user ? '/dashboard' : '/'} className="flex items-center gap-2.5">
          <img src="/images/logo.png" alt="BAC" className="w-7 h-7 rounded" />
          <span className="font-bold text-base tracking-tight">
            BAC <span className="text-accent">Connect</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {loading ? (
            <div className="w-7 h-7 rounded-full bg-surface-light animate-pulse" />
          ) : user ? (
            <>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-light/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              <div className="hidden lg:flex items-center gap-2">
                <Link href="/profile" className="flex items-center gap-2 p-1.5 hover:bg-surface-light/50 rounded-lg transition-colors">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-xs font-medium text-accent">
                    {user.full_name?.charAt(0) || 'U'}
                  </div>
                  <span className="text-sm text-text-primary font-medium max-w-[120px] truncate">
                    {user.full_name || 'User'}
                  </span>
                </Link>
                <button onClick={handleSignOut} className="btn-ghost text-xs">
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn-ghost text-sm">Sign in</Link>
              <Link href="/register" className="btn-primary text-sm">Join</Link>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && user && (
        <div className="lg:hidden bg-surface border-t border-border animate-fade-in">
          <div className="px-3 py-2 space-y-0.5">
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/marketplace', label: 'Marketplace' },
              { href: '/chat', label: 'Messages' },
              { href: '/profile', label: 'Profile' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-light/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border my-2" />
            <button
              onClick={() => { setMobileOpen(false); handleSignOut(); }}
              className="w-full text-left px-4 py-2.5 text-sm text-error hover:bg-error/10 rounded-lg transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
