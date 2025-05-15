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

export interface AddEditItemInput {
  id?: string;
  name: string;
  quantity: number;
  unit: string;
  estimatedPrice?: number;
  currency?: string;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  isDeleted: boolean;
  notes?: string;
}

export interface AISuggestion {
  id: string;
  name: string;
  quantity: number;
  estimatedPrice: number;
  category: string;
} 