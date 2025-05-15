export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Activity {
  id: string;
  user: User;
  action: string;
  timestamp: Date;
} 