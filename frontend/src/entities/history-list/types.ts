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