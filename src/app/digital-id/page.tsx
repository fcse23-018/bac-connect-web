import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Shield, QrCode, Fingerprint, Smartphone } from 'lucide-react';

export const metadata: Metadata = { title: 'Digital ID' };

export default function DigitalIDPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Digital Student ID</h1>
        <p className="text-text-secondary mt-1">Your secure digital identity on campus</p>
      </div>

      <Card className="bg-gradient-to-br from-accent/20 to-surface border-accent/30">
        <div className="text-center py-8">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield size={48} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Thabo Molefi</h2>
          <p className="text-text-secondary mt-1">BSBS-2024-0042</p>
          <p className="text-text-muted text-sm">Computer Science • Year 2</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="success">Verified</Badge>
            <Badge variant="accent">Active</Badge>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: QrCode, label: 'Scan to Verify', desc: 'Use QR code for campus access' },
          { icon: Fingerprint, label: 'Biometric Auth', desc: 'Secure fingerprint login' },
          { icon: Smartphone, label: 'Mobile ID', desc: 'Available on your devices' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} hover className="text-center cursor-pointer">
              <div className="p-3 bg-accent/20 rounded-xl inline-flex mx-auto mb-3">
                <Icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text-primary">{item.label}</h3>
              <p className="text-sm text-text-muted mt-1">{item.desc}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
