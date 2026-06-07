export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  student_id?: string;
  phone?: string;
  bio?: string;
  role: 'student' | 'alumni' | 'admin';
  created_at: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  user_id: string;
  user?: User;
  status: 'active' | 'sold' | 'inactive';
  created_at: string;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

export interface Conversation {
  id: string;
  participants: string[];
  last_message?: string;
  last_message_at?: string;
  created_at: string;
}

export interface Post {
  id: string;
  content: string;
  images?: string[];
  user_id: string;
  user?: User;
  likes_count: number;
  comments_count: number;
  created_at: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  member_count: number;
  category: string;
  created_at: string;
}

export interface AcademicEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'class' | 'exam' | 'assignment' | 'event';
  course?: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  company: string;
  description: string;
  type: 'internship' | 'job' | 'volunteer';
  location: string;
  deadline?: string;
  created_at: string;
}
