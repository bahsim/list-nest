import React from 'react';
import { EmptyState } from '@ui-kit/components/atomic/empty-state/empty-state';
import { AddItemFab } from '../../features/main-list/components/add-item-fab';
import { AddEditItemModal } from '../../features/main-list/components/add-edit-item-modal';
import { RestoreDialog } from '../../features/main-list/components/restore-dialog';
import { DeleteDialog } from '../../features/main-list/components/delete-dialog';
import { MainListProvider } from '../../entities/list/main-list-context';
import type { MainListItem } from '../../entities/list/types';
import { CurrentGroup } from './sections/current-group';
import { AllGroup } from './sections/all-group';
import { CategoryChipsSection } from './sections/category-chips-section';

const MODAL_TITLES = {
  add: 'Add Item',
  edit: 'Edit Item',
  complete: 'Complete Item',
} as const;
const MODAL_ACTION_LABELS = {
  add: 'Create',
  edit: 'Save',
  complete: 'Complete',
} as const;

interface ListBag {
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
interface ModalBag {
  isAddEditModalOpen: boolean;
  handleSaveItem: (input: any) => void;
  handleCancelAdd: () => void;
  editingItem: MainListItem | null;
  modalMode: 'add' | 'edit' | 'complete';
}
interface DialogsBag {
  restoringItem: MainListItem | null;
  isRestoreDialogOpen: boolean;
  confirmRestoreItem: () => void;
  cancelRestoreItem: () => void;
  deletingItem: MainListItem | null;
  isDeleteDialogOpen: boolean;
  confirmDeleteItem: () => void;
  cancelDeleteItem: () => void;
}
interface MockDataBag {
  mockCategories: string[];
  mockUnits: string[];
}

interface MainListWidgetProps {
  list: ListBag;
  modal: ModalBag;
  dialogs: DialogsBag;
  mockData: MockDataBag;
}

export const MainListWidget: React.FC<MainListWidgetProps> = ({
  list,
  modal,
  dialogs,
  mockData,
}) => (
  <MainListProvider
    value={{
      expandedItem: list.expandedItem,
      handleEditItem: list.handleEditItem,
      handleDeleteItem: list.handleDeleteItem,
      handleToggleBought: list.handleToggleBought,
      handleToggleCurrent: list.handleToggleCurrent,
      handleRestoreItem: list.handleRestoreItem,
      handleSaveNote: list.handleSaveNote,
      handleExpandItem: list.handleExpandItem,
    }}
  >
    <CategoryChipsSection
      show={list.items.length > 0 && list.uniqueCategories.length > 1}
      uniqueCategories={list.uniqueCategories}
      selectedCategories={list.selectedCategories}
      onToggleCategory={list.onToggleCategory}
      getCategoryValue={list.getCategoryValue}
    />
    {list.items.length === 0 ? (
      <EmptyState
        title="No items yet"
        description="Add your first item to this list."
        buttonLabel="Add First Item"
        onButtonClick={list.handleNewItem}
        imageAlt="No items yet"
      />
    ) : (
      <>
        {list.filteredCurrentItems.length > 0 && (
          <CurrentGroup items={list.filteredCurrentItems} getGroupSum={list.getGroupSum} />
        )}
        {list.filteredItems.length > 0 && (
          <AllGroup items={list.filteredItems} getGroupSum={list.getGroupSum} />
        )}
      </>
    )}
    {list.items.length > 0 && <AddItemFab onClick={list.handleNewItem} />}
    {modal.isAddEditModalOpen && (
      <AddEditItemModal
        onSave={modal.handleSaveItem}
        onCancel={modal.handleCancelAdd}
        categories={mockData.mockCategories}
        units={mockData.mockUnits}
        item={modal.editingItem}
        title={MODAL_TITLES[modal.modalMode]}
        actionLabel={MODAL_ACTION_LABELS[modal.modalMode]}
      />
    )}
    <RestoreDialog
      open={dialogs.isRestoreDialogOpen}
      onClose={dialogs.cancelRestoreItem}
      onConfirm={dialogs.confirmRestoreItem}
      item={dialogs.restoringItem}
    />
    <DeleteDialog
      open={dialogs.isDeleteDialogOpen}
      onClose={dialogs.cancelDeleteItem}
      onConfirm={dialogs.confirmDeleteItem}
      item={dialogs.deletingItem}
    />
  </MainListProvider>
); 