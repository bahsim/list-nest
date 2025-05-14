// Shared types for Family Grocery App UI Kit

export interface MainListItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  estimatedPrice: number;
  currency: string;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  isDeleted: boolean;
  addedBy: string;
  addedAt: Date;
  boughtAt?: Date;
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface AISuggestion {
  id: string;
  name: string;
  quantity: number;
  estimatedPrice: number;
  category: string;
}

export interface HistoryItem {
  id: string;
  name: string;
  quantity: number;
  estimatedPrice?: number;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  purchasedAt: Date;
  checkedOffBy: string;
  isDeleted: boolean;
}

export interface HistoryGroup {
  date: string;
  items: HistoryItem[];
}

export interface HistoryAnalytics {
  totalItems: number;
  totalSpending: number;
  frequentItems: { name: string; count: number }[];
  categoryBreakdown: { category: string; percent: number }[];
}

export interface Reminder {
  id: string;
  text: string;
  onAdd: () => void;
}

export interface Activity {
  id: string;
  user: User;
  action: string;
  timestamp: Date;
} 