'use client';

import Link from 'next/link';
import { useUser } from '@/hooks/useAuth';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Menu,
  X,
  Bell,
  ChevronDown,
  LogOut,
  User,
  Settings,
  Shield,
} from 'lucide-react';

export function Navbar() {
  const { user, loading } = useUser();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/chat', label: 'Messages' },
    { href: '/sos', label: 'SOS' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href={user ? '/dashboard' : '/'} className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-sm">
              B
            </div>
            <span className="font-bold text-lg hidden sm:block">
              <span className="text-white">BAC</span>{' '}
              <span className="text-accent">Connect</span>
            </span>
          </Link>

          {user && (
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-surface-light rounded-lg transition-all duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-surface-light animate-pulse" />
            ) : user ? (
              <>
                <button className="relative p-2 text-text-secondary hover:text-text-primary hover:bg-surface-light rounded-lg transition-all">
                  <Bell size={20} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 p-1.5 hover:bg-surface-light rounded-xl transition-all"
                  >
                    <Avatar
                      src={user.avatar_url}
                      alt={user.full_name}
                      size="sm"
                      fallback={user.full_name}
                    />
                    <span className="hidden lg:block text-sm font-medium text-text-primary max-w-[120px] truncate">
                      {user.full_name}
                    </span>
                    <ChevronDown size={14} className="text-text-secondary hidden lg:block" />
                  </button>

                  {profileOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)} />
                      <div className="absolute right-0 mt-2 w-56 bg-surface border border-border rounded-xl shadow-xl z-20 py-2 animate-fade-in">
                        <div className="px-4 py-3 border-b border-border">
                          <p className="text-sm font-medium text-text-primary">{user.full_name}</p>
                          <p className="text-xs text-text-muted truncate">{user.email}</p>
                        </div>
                        <Link
                          href="/profile"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-light transition-all"
                        >
                          <User size={16} /> Profile
                        </Link>
                        <button
                          onClick={() => { setProfileOpen(false); handleSignOut(); }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-error hover:bg-error/10 transition-all"
                        >
                          <LogOut size={16} /> Sign Out
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Get Started</Button>
                </Link>
              </div>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-lg"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && user && (
        <div className="md:hidden bg-surface border-t border-border animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-light rounded-lg transition-all text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
