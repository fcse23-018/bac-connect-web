import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = { title: 'Financial' };

export default function FinancialPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="page-title">Financial Services</h1>
        <p className="page-subtitle">Bursaries, loans, and financial tools.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { title: 'Bursary Applications', desc: 'Apply for government and private bursaries.' },
          { title: 'Student Loans', desc: 'Loan options and repayment plans.' },
          { title: 'Budget Tools', desc: 'Track your student budget.' },
        ].map((service) => (
          <Card key={service.title} hover className="p-4 cursor-pointer">
            <h3 className="text-sm font-semibold text-text-primary">{service.title}</h3>
            <p className="text-xs text-text-muted mt-1">{service.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
