import type { Metadata } from 'next';
import { FeatureGrid } from '@/components/dashboard/FeatureGrid';
import { Bell, TrendingUp, Clock } from 'lucide-react';

export const metadata: Metadata = { title: 'Dashboard' };

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary mt-1">Welcome back! Here&apos;s your campus overview.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: Bell, label: 'New Messages', value: '3', color: 'from-blue-500 to-blue-600' },
          { icon: TrendingUp, label: 'Marketplace Listings', value: '12', color: 'from-green-500 to-green-600' },
          { icon: Clock, label: 'Upcoming Deadlines', value: '5', color: 'from-orange-500 to-orange-600' },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="card">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="text-xl font-bold text-text-primary mb-4">All Features</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
