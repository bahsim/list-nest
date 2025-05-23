import React, { useMemo } from 'react';
import { useMainList } from '@/features/main-list/hooks/use-main-list';
import { MainListWidget } from '@/widgets/main-list-widget/main-list-widget';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import { CATEGORIES_KEY, CURRENCY_KEY } from '@/shared/constants/storage-keys';
import { Category } from '@/shared/types/category';

export const MainListPage: React.FC = () => {
  const mainList = useMainList();
  const [currency] = usePersistentState(CURRENCY_KEY, 'USD');
  const [categories] = usePersistentState<Category[]>(CATEGORIES_KEY, []);

  return (
    <MainListWidget
      items={mainList.data.items}
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
