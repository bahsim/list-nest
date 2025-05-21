export interface ListItemCore {
  name: string;
  quantity: number;
  unit: string;
  estimatedPrice: number;
  category: string;
  notes: string;
}

export interface AddItemInput extends ListItemCore {}

export interface ListItem extends ListItemCore {
  id: string;
  addedAt: Date | null;
  boughtAt: Date | null;
  deletedAt: Date | null;
  isCurrent: boolean;
}

export interface AISuggestion {
  id: string;
  name: string;
  quantity: number;
  estimatedPrice: number;
  category: string;
}
