import type { ListItem } from '@/entities/list/types';
import { UseItemDialogResult } from '@/shared/hooks/use-item-dialog';
import { AddItemInput } from '@/entities/list/types';

export interface ListBag {
  items: ListItem[];
  filteredItems: ListItem[];
  filteredCurrentItems: ListItem[];
  handleNewItem: () => void;
}

export interface CategoryFilterBag {
  uniqueCategories: string[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}

export interface ModalBag {
  isAddEditModalOpen: boolean;
  handleSaveItem: (input: any) => void;
  handleCancelAdd: () => void;
  editingItem: ListItem | null;
  modalMode: 'add' | 'edit' | 'complete';
}

export interface MockDataBag {
  mockCategories: string[];
  mockUnits: string[];
}

export interface MainListGroup {
  label: string;
  items: ListItem[];
  rightContent: string;
}

export interface MainListWidgetProps {
  items: ListItem[];
  currency: string;
  categories: string[];
  restoreDialog: UseItemDialogResult<ListItem>;
  deleteDialog: UseItemDialogResult<ListItem>;
  handleToggleCurrent: (item: ListItem) => void;
  handleRestoreItem: (item: ListItem) => void;
  handleDeleteItem: (item: ListItem) => void;
  handleSaveNote: (id: string, note: string) => void;
  handleAddItem: (input: AddItemInput | ListItem) => void;
  handleEditItem: (input: AddItemInput | ListItem) => void;
  handleCompleteItem: (input: AddItemInput | ListItem) => void;
} 