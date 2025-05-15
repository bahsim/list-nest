import type { MainListItem } from '../../entities/list/types';

export interface ListBag {
  items: MainListItem[];
  uniqueCategories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  getCategoryValue: (cat: string) => string;
  filteredItems: MainListItem[];
  filteredCurrentItems: MainListItem[];
  getGroupSum: (items: MainListItem[]) => number;
  expandedItem: any;
  handleEditItem: (item: MainListItem) => void;
  handleDeleteItem: (item: MainListItem) => void;
  handleToggleBought: (item: MainListItem) => void;
  handleToggleCurrent: (item: MainListItem) => void;
  handleRestoreItem: (item: MainListItem) => void;
  handleSaveNote: (id: string, note: string) => void;
  handleExpandItem: (group: 'current' | 'all', itemId: string) => void;
  handleNewItem: () => void;
}
export interface ModalBag {
  isAddEditModalOpen: boolean;
  handleSaveItem: (input: any) => void;
  handleCancelAdd: () => void;
  editingItem: MainListItem | null;
  modalMode: 'add' | 'edit' | 'complete';
}
export interface DialogsBag {
  restoringItem: MainListItem | null;
  isRestoreDialogOpen: boolean;
  confirmRestoreItem: () => void;
  cancelRestoreItem: () => void;
  deletingItem: MainListItem | null;
  isDeleteDialogOpen: boolean;
  confirmDeleteItem: () => void;
  cancelDeleteItem: () => void;
}
export interface MockDataBag {
  mockCategories: string[];
  mockUnits: string[];
}
export interface MainListWidgetProps {
  list: ListBag;
  modal: ModalBag;
  dialogs: DialogsBag;
  mockData: MockDataBag;
} 