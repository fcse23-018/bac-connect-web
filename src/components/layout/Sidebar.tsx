'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/chat', label: 'Messages' },
  { href: '/groups', label: 'Groups' },
  { href: '/academic', label: 'Academic' },
  { href: '/careers', label: 'Careers' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/sos', label: 'SOS' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/lost-and-found', label: 'Lost & Found' },
  { href: '/profile', label: 'Profile' },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/dashboard' && pathname.startsWith(href + '/'));

  const showSidebar = navItems.some((item) => isActive(item.href)) || isActive('/dashboard');

  if (!showSidebar && pathname !== '/') return null;

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-background border-r border-border hidden lg:block overflow-y-auto z-40">
      <div className="p-3 space-y-0.5">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? 'text-text-primary bg-surface-light/30'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-light/30'
              }`}
            >
              <span className={`nav-indicator ${active ? 'opacity-100' : 'opacity-0'}`} />
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="p-4 border-t border-border mt-2">
        <p className="text-xs text-text-muted leading-relaxed">
          BAC Connect v1.0<br />
          Botswana Accountancy College
        </p>
      </div>
    </aside>
  );
}
