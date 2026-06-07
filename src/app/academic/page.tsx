import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BookOpen, Calendar, Clock, FileText } from 'lucide-react';

export const metadata: Metadata = { title: 'Academic' };

const courses = [
  { code: 'CS101', name: 'Introduction to Programming', lecturer: 'Dr. Mogotsi', schedule: 'Mon/Wed 9:00-10:30', room: 'Lab 3' },
  { code: 'MATH201', name: 'Calculus II', lecturer: 'Prof. Nkosi', schedule: 'Tue/Thu 10:00-11:30', room: 'Hall A' },
  { code: 'ENG102', name: 'Academic Writing', lecturer: 'Ms. Kgosi', schedule: 'Wed/Fri 14:00-15:30', room: 'Room 205' },
  { code: 'BUS101', name: 'Business Fundamentals', lecturer: 'Mr. Moeti', schedule: 'Mon/Wed 14:00-15:30', room: 'Hall B' },
];

const assignments = [
  { title: 'Programming Assignment 2', course: 'CS101', due: '2024-07-15', status: 'pending' as const },
  { title: 'Calculus Problem Set', course: 'MATH201', due: '2024-07-18', status: 'pending' as const },
  { title: 'Essay Draft Submission', course: 'ENG102', due: '2024-07-20', status: 'submitted' as const },
];

export default function AcademicPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Academic Tools</h1>
        <p className="text-text-secondary mt-1">Your courses, assignments, and timetable</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <BookOpen size={20} className="text-accent" /> Current Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <Card key={course.code} hover>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-text-primary">{course.name}</h3>
                  <p className="text-sm text-text-muted">{course.code}</p>
                </div>
                <Badge variant="accent">{course.code}</Badge>
              </div>
              <div className="space-y-2 text-sm text-text-secondary">
                <p className="flex items-center gap-2">
                  <FileText size={14} className="text-accent" /> {course.lecturer}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar size={14} className="text-accent" /> {course.schedule}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-accent" /> {course.room}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-text-primary mb-4">Upcoming Assignments</h2>
        <div className="space-y-3">
          {assignments.map((assignment, i) => (
            <Card key={i} className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-text-primary">{assignment.title}</h3>
                <p className="text-sm text-text-muted">{assignment.course} • Due {assignment.due}</p>
              </div>
              <Badge variant={assignment.status === 'submitted' ? 'success' : 'warning'}>
                {assignment.status}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
