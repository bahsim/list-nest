import type { ListItem } from '@/entities/list/types';
import { UseItemDialogResult } from '@/shared/hooks/use-item-dialog';

export interface ListBag {
  items: ListItem[];
  uniqueCategories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  filteredItems: ListItem[];
  filteredCurrentItems: ListItem[];
  handleNewItem: () => void;
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

export interface MainListWidgetProps {
  list: ListBag;
  modal: ModalBag;
  dialogs: {
    restoreDialog: UseItemDialogResult<ListItem>;
    deleteDialog: UseItemDialogResult<ListItem>;
  };
  mockData: MockDataBag;
} 