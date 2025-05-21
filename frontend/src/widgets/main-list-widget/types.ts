import type { ListItem } from '@/entities/list/types';
import { UseItemDialogResult } from '@/shared/hooks/use-item-dialog';
import { AddItemInput } from '@/entities/list/types';
import { Category } from '@/shared/types/category';

export interface MainListWidgetProps {
  items: ListItem[];
  currency: string;
  categories: Category[];
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
