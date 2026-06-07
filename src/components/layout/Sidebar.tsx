'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import {
  LayoutDashboard,
  ShoppingBag,
  MessageSquare,
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  ShieldAlert,
  BookOpen,
  Wallet,
  MapPin,
  Store,
  Image,
  UserCircle,
} from 'lucide-react';

const sidebarLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/marketplace', label: 'Marketplace', icon: ShoppingBag },
  { href: '/chat', label: 'Messages', icon: MessageSquare },
  { href: '/groups', label: 'Groups', icon: Users },
  { href: '/academic', label: 'Academic', icon: GraduationCap },
  { href: '/careers', label: 'Careers', icon: Briefcase },
  { href: '/wellness', label: 'Wellness', icon: Heart },
  { href: '/sos', label: 'SOS Emergency', icon: ShieldAlert },
  { href: '/alumni', label: 'Alumni', icon: BookOpen },
  { href: '/lost-and-found', label: 'Lost & Found', icon: MapPin },
  { href: '/profile', label: 'Profile', icon: UserCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-background border-r border-border hidden lg:block overflow-y-auto">
      <div className="p-4 space-y-1">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                active
                  ? 'bg-accent/20 text-accent'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
              )}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
