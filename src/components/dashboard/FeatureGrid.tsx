'use client';

import Link from 'next/link';
import {
  ShoppingBag,
  MessageSquare,
  Users,
  ShieldAlert,
  GraduationCap,
  Briefcase,
  Heart,
  BookOpen,
  MapPin,
  Store,
  Wallet,
  UserCircle,
} from 'lucide-react';

const features = [
  { href: '/marketplace', label: 'Marketplace', desc: 'Buy & sell on campus', icon: ShoppingBag, color: 'from-blue-500 to-blue-600' },
  { href: '/chat', label: 'Messages', desc: 'Chat with students', icon: MessageSquare, color: 'from-green-500 to-green-600' },
  { href: '/groups', label: 'Groups', desc: 'Study & interest groups', icon: Users, color: 'from-purple-500 to-purple-600' },
  { href: '/academic', label: 'Academic', desc: 'Classes & timetable', icon: GraduationCap, color: 'from-orange-500 to-orange-600' },
  { href: '/careers', label: 'Careers', desc: 'Jobs & internships', icon: Briefcase, color: 'from-cyan-500 to-cyan-600' },
  { href: '/wellness', label: 'Wellness', desc: 'Mental health support', icon: Heart, color: 'from-pink-500 to-pink-600' },
  { href: '/sos', label: 'SOS Emergency', desc: 'Emergency contacts', icon: ShieldAlert, color: 'from-red-500 to-red-600' },
  { href: '/alumni', label: 'Alumni', desc: 'Network with alumni', icon: BookOpen, color: 'from-indigo-500 to-indigo-600' },
  { href: '/lost-and-found', label: 'Lost & Found', desc: 'Report lost items', icon: MapPin, color: 'from-amber-500 to-amber-600' },
  { href: '/profile', label: 'Profile', desc: 'Manage your account', icon: UserCircle, color: 'from-teal-500 to-teal-600' },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <Link
            key={feature.href}
            href={feature.href}
            className="group card-hover relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                <Icon size={22} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {feature.label}
                </h3>
                <p className="text-sm text-text-muted mt-0.5">{feature.desc}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        );
      })}
    </div>
  );
}
