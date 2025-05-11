// Shared types for Family Grocery App UI Kit

export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: string;
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
}

export interface AddEditItemInput {
  id?: string;
  name: string;
  quantity: string;
  unit: string;
  estimatedPrice?: number;
  currency?: string;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  isDeleted: boolean;
}

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface AISuggestion {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice: number;
  category: string;
}

export interface HistoryItem {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice?: number;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  purchasedAt: Date;
  checkedOffBy: string;
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