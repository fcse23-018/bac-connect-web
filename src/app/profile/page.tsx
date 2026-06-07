import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Settings, Shield, Bell, LogOut, ChevronRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Profile' };

export default function ProfilePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="text-center py-10">
        <Avatar size="xl" fallback="T" className="mx-auto" />
        <h1 className="text-2xl font-bold text-text-primary mt-4">Thabo Molefi</h1>
        <p className="text-text-secondary">BSBS-2024-0042</p>
        <p className="text-text-muted text-sm mt-1">thabo.molefi@bsbs.ac.bw</p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="badge-accent">Student</span>
          <span className="badge-success">Verified</span>
        </div>
        <Button variant="secondary" className="mt-6">
          <Settings size={16} className="mr-2" /> Edit Profile
        </Button>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card hover className="flex items-center gap-4 cursor-pointer">
          <div className="p-3 bg-accent/20 rounded-xl">
            <Shield size={20} className="text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary">Security</h3>
            <p className="text-sm text-text-muted">Password & authentication</p>
          </div>
          <ChevronRight size={18} className="text-text-muted" />
        </Card>

        <Card hover className="flex items-center gap-4 cursor-pointer">
          <div className="p-3 bg-accent/20 rounded-xl">
            <Bell size={20} className="text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary">Notifications</h3>
            <p className="text-sm text-text-muted">Manage your alerts</p>
          </div>
          <ChevronRight size={18} className="text-text-muted" />
        </Card>
      </div>

      <Card hover className="flex items-center gap-4 cursor-pointer border-error/30 hover:border-error/50">
        <div className="p-3 bg-error/20 rounded-xl">
          <LogOut size={20} className="text-error" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-error">Sign Out</h3>
          <p className="text-sm text-text-muted">Sign out of your account</p>
        </div>
        <ChevronRight size={18} className="text-text-muted" />
      </Card>
    </div>
  );
}
