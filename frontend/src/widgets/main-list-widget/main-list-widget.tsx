import React from 'react';
import { EmptyState } from '@ui-kit/components/atomic/empty-state/empty-state';
import { AddFab } from '@ui-kit/components/atomic/AddFab';
import AddIcon from '@mui/icons-material/Add';
import { AddEditItemModal } from '@/features/main-list/components/add-edit-item-modal';
import { ConfirmDialog } from '@/shared/ui/list/confirm-dialog';
import { CategoryFilterChips } from '@/shared/ui/list/category-filter-chips';
import { MODAL_TITLES, MODAL_ACTION_LABELS } from './constants';
import { EMPTY_STATE_CONFIG } from './empty-state-config';
import type { MainListWidgetProps } from './types';
import { DIALOG_CONFIG } from './dialog-config';
import { getGroupSum } from '@/shared/utils/list-utils';
import { sortListItemsByPriority } from '@/entities/list/utils/sort-list-items-by-priority';
import { BaseList } from '@/entities/list/base-list/base-list';
import { MainListItemCard } from '@/features/main-list-item/main-list-item-card';
import { useListExpansion } from '@/shared/hooks/list-expansion-context';
import { useMainListActions } from '@/features/main-list/providers/main-list-actions-context';

export const MainListWidget: React.FC<MainListWidgetProps> = ({
  list,
  modal,  
  dialogs,
  mockData,
  categoryFilter,
}) => {
  const { expandedItem, handleExpandItem } = useListExpansion();
  const { handleToggleBought, handleToggleCurrent, handleRestoreItem, handleEditItem, handleDeleteItem } = useMainListActions();
  const mappedExpandedItem = expandedItem
    ? { group: expandedItem.group, id: expandedItem.itemId }
    : null;
  const grouppedItems = [
    {
      label: 'current',
      items: sortListItemsByPriority(list.filteredCurrentItems),
      rightContent: getGroupSum(list.filteredCurrentItems, (item) => item.estimatedPrice),
    },
    {
      label: 'all',
      items: sortListItemsByPriority(list.filteredItems),
      rightContent: getGroupSum(list.filteredItems, (item) => item.estimatedPrice),
    },
  ];

  return (
    <>
      {/* category chips section */}
      {list.items.length > 0 && categoryFilter.uniqueCategories.length > 1 && (
        <CategoryFilterChips
          categories={categoryFilter.uniqueCategories}
          selectedCategories={categoryFilter.selectedCategories}
          onToggleCategory={categoryFilter.onToggleCategory}
        />
      )}
      {/* empty state */}
      {list.items.length === 0 ? (
        <EmptyState
          title={EMPTY_STATE_CONFIG.title}
          description={EMPTY_STATE_CONFIG.description}
          buttonLabel={EMPTY_STATE_CONFIG.buttonLabel}
          onButtonClick={list.handleNewItem}
          imageAlt={EMPTY_STATE_CONFIG.imageAlt}
        />
      ) : (
        <BaseList
          grouppedItems={grouppedItems}
          renderItem={(item, groupLabel) => (
            <MainListItemCard
              item={item}
              group={groupLabel}
              expandedItem={mappedExpandedItem}
              onExpand={handleExpandItem}
              onToggleBought={handleToggleBought}
              onToggleCurrent={handleToggleCurrent}
              onRestoreItem={handleRestoreItem}
              onEditItem={typeof handleEditItem === 'function' ? handleEditItem : undefined}
              onDeleteItem={typeof handleDeleteItem === 'function' ? handleDeleteItem : undefined}
            />
          )}
        />
      )}
      {list.items.length > 0 && (
        <AddFab onClick={list.handleNewItem} icon={<AddIcon />} ariaLabel="Add Item" />
      )}
      {/* add edit modal */}
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
      {/* restore dialog */}
      <ConfirmDialog
        open={dialogs.restoreDialog.isDialogOpen}
        onClose={dialogs.restoreDialog.cancel}
        onConfirm={dialogs.restoreDialog.confirm}
        title={DIALOG_CONFIG.restore.title}
        content={DIALOG_CONFIG.restore.getContent(dialogs.restoreDialog.targetItem)}
        confirmLabel={DIALOG_CONFIG.restore.confirmLabel}
        confirmColor={DIALOG_CONFIG.restore.confirmColor}
      />
      {/* delete dialog */}
      <ConfirmDialog
        open={dialogs.deleteDialog.isDialogOpen}
        onClose={dialogs.deleteDialog.cancel}
        onConfirm={dialogs.deleteDialog.confirm}
        title={DIALOG_CONFIG.delete.title}
        content={DIALOG_CONFIG.delete.getContent(dialogs.deleteDialog.targetItem)}
        confirmLabel={DIALOG_CONFIG.delete.confirmLabel}
        confirmColor={DIALOG_CONFIG.delete.confirmColor}
      />
    </>
  );
};
