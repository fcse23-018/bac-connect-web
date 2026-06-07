import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Wallet, TrendingUp, PiggyBank, CreditCard } from 'lucide-react';

export const metadata: Metadata = { title: 'Financial' };

const services = [
  { title: 'Bursary Applications', desc: 'Apply for government and private bursaries. Track your application status.', status: '3 Open', icon: PiggyBank },
  { title: 'Student Loans', desc: 'Information on student loan options and repayment plans.', status: 'Learn More', icon: CreditCard },
  { title: 'Budget Tracker', desc: 'Track your expenses and manage your student budget.', status: 'Coming Soon', icon: TrendingUp },
];

export default function FinancialPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Financial Services</h1>
        <p className="text-text-secondary mt-1">Bursaries, loans, and financial tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Card key={i} hover className="cursor-pointer">
              <CardHeader>
                <div className="p-3 bg-accent/20 rounded-xl"><Icon size={20} className="text-accent" /></div>
                <div>
                  <h3 className="font-semibold text-text-primary">{service.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-secondary mb-3">{service.desc}</p>
                <Badge variant="accent">{service.status}</Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
