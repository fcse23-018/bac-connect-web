import type { Metadata } from 'next';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Search, Circle } from 'lucide-react';

export const metadata: Metadata = { title: 'Messages' };

const conversations = [
  { id: 1, name: 'Thabo Molefi', message: 'Hey, are you coming to the study group?', time: '2m ago', online: true, unread: 2 },
  { id: 2, name: 'Lerato Kgosana', message: 'Thanks for the notes! 🙏', time: '1h ago', online: false, unread: 0 },
  { id: 3, name: 'Study Group 2024', message: 'Keitumetse: Meeting tomorrow at 10', time: '3h ago', online: true, unread: 5 },
  { id: 4, name: 'Prof. Mogotsi', message: 'Assignment deadline extended', time: '1d ago', online: false, unread: 0 },
  { id: 5, name: 'Marketplace - Textbook', message: 'Is the calculus book still available?', time: '2d ago', online: false, unread: 1 },
];

export default function ChatPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Messages</h1>
        <p className="text-text-secondary mt-1">Chat with students and groups</p>
      </div>

      <div className="relative max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input placeholder="Search conversations..." className="input-field pl-10" />
      </div>

      <div className="space-y-2">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="card-hover flex items-center gap-4 p-4 cursor-pointer"
          >
            <div className="relative">
              <Avatar size="lg" fallback={conv.name.charAt(0)} />
              {conv.online && (
                <Circle size={10} className="absolute bottom-0 right-0 text-success fill-current" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text-primary truncate">{conv.name}</h3>
                <span className="text-xs text-text-muted flex-shrink-0">{conv.time}</span>
              </div>
              <p className="text-sm text-text-secondary truncate mt-0.5">{conv.message}</p>
            </div>
            {conv.unread > 0 && (
              <Badge variant="accent">{conv.unread}</Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
