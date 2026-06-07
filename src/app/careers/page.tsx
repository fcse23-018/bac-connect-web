import type { Metadata } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const metadata: Metadata = { title: 'Careers' };

const opportunities = [
  { id: 1, title: 'Software Engineering Intern', company: 'TechCorp Botswana', type: 'Internship', location: 'Gaborone', deadline: '2024-08-01', description: 'Join our engineering team for a 3-month internship working on web applications.' },
  { id: 2, title: 'Junior Data Analyst', company: 'DataSolve', type: 'Job', location: 'Remote', deadline: '2024-07-30', description: 'Analyze business data and create insightful reports for decision makers.' },
  { id: 3, title: 'Campus Ambassador', company: 'EduTech Africa', type: 'Volunteer', location: 'On-Campus', deadline: '2024-07-20', description: 'Represent EduTech on campus and organize tech events for students.' },
  { id: 4, title: 'Marketing Intern', company: 'BrandLab BW', type: 'Internship', location: 'Gaborone', deadline: '2024-08-15', description: 'Assist with social media management, content creation, and campaign analytics.' },
];

export default function CareersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Career Hub</h1>
          <p className="text-text-secondary mt-1">Jobs, internships, and opportunities</p>
        </div>
        <Button variant="secondary">
          <Briefcase size={16} className="mr-2" /> Post Opportunity
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {opportunities.map((opp) => (
          <Card key={opp.id} hover>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-text-primary">{opp.title}</h3>
                <p className="text-sm text-accent font-medium">{opp.company}</p>
              </div>
              <Badge
                variant={opp.type === 'Internship' ? 'accent' : opp.type === 'Job' ? 'success' : 'warning'}
              >
                {opp.type}
              </Badge>
            </div>
            <p className="text-sm text-text-secondary mb-4">{opp.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {opp.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Due {opp.deadline}
              </span>
            </div>
            <Button variant="secondary" className="w-full mt-4">
              <ExternalLink size={16} className="mr-2" /> Apply Now
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
