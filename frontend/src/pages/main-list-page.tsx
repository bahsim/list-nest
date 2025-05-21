import React, { useMemo } from 'react';
import { mockCategories } from '@/features/main-list/utils/mock-data';
import { useMainList } from '@/features/main-list/hooks/use-main-list';
import { MainListWidget } from '@/widgets/main-list-widget/main-list-widget';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import { CATEGORIES_KEY, CURRENCY_KEY } from '@/shared/constants/storage-keys';
import { normalizeListItems } from '@/features/history-list-item/utils';

export const MainListPage: React.FC = () => {
  const mainList = useMainList();
  const [currency] = usePersistentState(CURRENCY_KEY, 'USD');
  const [categories] = usePersistentState(CATEGORIES_KEY, mockCategories);

  const normalizedItems = useMemo(
    () => normalizeListItems(mainList.data.items),
    [mainList.data.items],
  );

  return (
    <MainListWidget
      items={normalizedItems}
      currency={currency}
      categories={categories}
      restoreDialog={mainList.dialogs.restoreDialog}
      deleteDialog={mainList.dialogs.deleteDialog}
      handleToggleCurrent={mainList.actions.toggleCurrent}
      handleRestoreItem={mainList.actions.restoreItem}
      handleDeleteItem={mainList.actions.deleteItem}
      handleSaveNote={mainList.actions.saveNote}
      handleAddItem={mainList.actions.addItem}
      handleEditItem={mainList.actions.editItem}
      handleCompleteItem={mainList.actions.completeItem}
    />
  );
};
