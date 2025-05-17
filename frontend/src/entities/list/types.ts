export interface ListItemCore {
  name: string;
  quantity: number;
  unit: string;
  estimatedPrice: number;
  currency: string;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  isDeleted: boolean;
  notes: string;
}

export interface AddItemInput extends ListItemCore {}

export interface ListItem extends ListItemCore {
  id: string;
  addedAt: Date | null;
  boughtAt: Date | null;
  deletedAt: Date | null;
}

export interface AISuggestion {
  id: string;
  name: string;
  quantity: number;
  estimatedPrice: number;
  category: string;
} 