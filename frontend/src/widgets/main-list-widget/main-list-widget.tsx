import React, { useMemo, useState } from 'react';
import { EmptyState } from '@ui-kit/components/atomic/empty-state/empty-state';
import { AddFab } from '@ui-kit/components/atomic/AddFab';
import AddIcon from '@mui/icons-material/Add';
import { ConfirmDialog } from '@/shared/ui/list/confirm-dialog';
import { CategoryFilterChips } from '@/shared/ui/list/category-filter-chips';
import type { MainListWidgetProps } from './types';
import { DIALOG_CONFIG } from './dialog-config';
import { BaseList } from '@/entities/list/base-list/base-list';
import { MainListItemCard } from '@/features/main-list-item/main-list-item-card';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';
import { getMainListGroups } from '@/features/main-list/utils/group-list-items';
import { AddEditItemModal } from '@/features/main-list/components/add-edit-item-modal';
import { MODAL_TITLES, MODAL_ACTION_LABELS } from '@/widgets/main-list-widget/constants';
import type { ListItem, AddItemInput } from '@/entities/list/types';
import { useExpandedItem } from '@/shared/hooks/use-expanded-item';
import { filterActiveOrTodayItems } from '@/features/history-list-item/utils';
import { useTranslation } from 'react-i18next';

// Modal mode types and constants (moved from page)
type ModalMode = 'add' | 'edit' | 'complete';

const MODAL_MODES: ModalMode[] = ['add', 'edit', 'complete'];

const modalModes: Record<string, ModalMode> = {
  COMPLETE: 'complete',
  EDIT: 'edit',
  ADD: 'add',
};

export const MainListWidget: React.FC<MainListWidgetProps> = ({
  items,
  currency,
  categories,
  restoreDialog,
  deleteDialog,
  handleToggleCurrent,
  handleRestoreItem,
  handleDeleteItem,
  handleSaveNote,
  handleAddItem,
  handleEditItem,
  handleCompleteItem,
}) => {
  const { t } = useTranslation();
  // List expansion
  const { expandedItem, handleExpandItem } = useExpandedItem();

  // filter active or today items
  const filteredItems = useMemo(() => filterActiveOrTodayItems(items), [items]);

  // Category filter logic
  const { selectedCategories, toggleCategory, filteredItemsByCategory, uniqueCategories } =
    useCategoryFilter(categories, filteredItems, (item) => item.category);

  // Current items
  const filteredCurrentItems = useMemo(
    () => filteredItemsByCategory.filter((item) => item.isCurrent),
    [filteredItemsByCategory],
  );

  // Grouping logic
  const grouppedItems = getMainListGroups({
    currentItems: filteredCurrentItems,
    items: filteredItemsByCategory,
    currency,
    t,
  });

  // Modal state (moved from page)
  const [editingItem, setEditingItem] = useState<AddItemInput | ListItem | null>(null);
  const [modalMode, setModalMode] = useState<ModalMode | null>(null);

  // Modal handlers (moved from page)
  const handleNewItem = () => {
    setEditingItem(null);
    setModalMode(modalModes.ADD);
  };

  const handleEditItemLocal = (item: ListItem) => {
    setEditingItem(item);
    setModalMode(modalModes.EDIT);
  };

  const handleToggleBought = (item: ListItem) => {
    setEditingItem(item);
    setModalMode(modalModes.COMPLETE);
  };

  const modalHandlers: Record<ModalMode, (input: AddItemInput | ListItem) => void> = {
    add: (input) => handleAddItem(input),
    edit: (input) => handleEditItem(input),
    complete: (input) => handleCompleteItem(input),
  };

  const handleSaveItem = (input: AddItemInput | ListItem) => {
    if (modalMode && modalMode in modalHandlers) {
      modalHandlers[modalMode](input);
    }
    setEditingItem(null);
    setModalMode(null);
  };

  const handleCloseModal = () => {
    setEditingItem(null);
    setModalMode(null);
  };

  return (
    <>
      {/* category chips section */}
      {items.length > 0 && uniqueCategories.length > 0 && (
        <CategoryFilterChips
          categories={uniqueCategories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
        />
      )}
      {/* empty state */}
      {items.length === 0 ? (
        <EmptyState
          title={t('emptyState.noItems')}
          description={t('emptyState.addFirstItem')}
          buttonLabel={t('emptyState.addFirstItemButton')}
          onButtonClick={handleNewItem}
          imageAlt={t('emptyState.noItemsAlt')}
        />
      ) : (
        <BaseList
          grouppedItems={grouppedItems}
          renderItem={(item, groupLabel) => (
            <MainListItemCard
              item={item}
              group={groupLabel}
              currency={currency}
              categories={categories}
              expandedItem={expandedItem}
              onExpand={handleExpandItem}
              onToggleBought={handleToggleBought}
              onToggleCurrent={handleToggleCurrent}
              onRestoreItem={handleRestoreItem}
              onEditItem={handleEditItemLocal}
              onDeleteItem={handleDeleteItem}
              onSaveNote={handleSaveNote}
            />
          )}
        />
      )}
      {items.length > 0 && (
        <AddFab onClick={handleNewItem} icon={<AddIcon />} ariaLabel={t('mainList.addItemAria')} />
      )}
      {/* Add/Edit/Complete modal */}
      {MODAL_MODES.map(
        (mode) =>
          modalMode === mode && (
            <AddEditItemModal
              onSave={handleSaveItem}
              onClose={handleCloseModal}
              currency={currency}
              categories={categories}
              item={editingItem}
              title={t(MODAL_TITLES[mode])}
              actionLabel={t(MODAL_ACTION_LABELS[mode])}
            />
          ),
      )}
      {/* restore dialog */}
      <ConfirmDialog
        open={restoreDialog.isDialogOpen}
        onClose={restoreDialog.cancel}
        onConfirm={restoreDialog.confirm}
        title={t(DIALOG_CONFIG.restore.title)}
        content={DIALOG_CONFIG.restore.getContent(restoreDialog.targetItem)}
        confirmLabel={t(DIALOG_CONFIG.restore.confirmLabel)}
        confirmColor={DIALOG_CONFIG.restore.confirmColor}
      />
      {/* delete dialog */}
      <ConfirmDialog
        open={deleteDialog.isDialogOpen}
        onClose={deleteDialog.cancel}
        onConfirm={deleteDialog.confirm}
        title={t(DIALOG_CONFIG.delete.title)}
        content={DIALOG_CONFIG.delete.getContent(deleteDialog.targetItem)}
        confirmLabel={t(DIALOG_CONFIG.delete.confirmLabel)}
        confirmColor={DIALOG_CONFIG.delete.confirmColor}
      />
    </>
  );
};
