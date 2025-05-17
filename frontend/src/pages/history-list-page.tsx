import React from 'react';
import { useHistoryList } from '@/features/history-list/hooks/use-history-list';
import { HistoryListWidget } from '@/widgets/history-list-widget/history-list-widget';
import {
  HistoryListDataProvider,
  useHistoryListData,
} from '@/features/history-list/providers/history-list-data-provider';
import { ListExpansionProvider } from '@/shared/hooks/list-expansion-context';

export const HistoryListPage: React.FC = () => {
  return (
    <HistoryListDataProvider>
      <HistoryListViewInner />
    </HistoryListDataProvider>
  );
};

const HistoryListViewInner: React.FC = () => {
  const { initialItems } = useHistoryListData();
  const historyList = useHistoryList(initialItems);

  return (
    <ListExpansionProvider>
      <HistoryListWidget
        items={historyList.items}
        uniqueCategories={historyList.uniqueCategories}
        selectedCategories={historyList.selectedCategories}
        onToggleCategory={historyList.handleToggleCategory}
        itemsGroupedByDate={historyList.itemsGroupedByDate}
      />
    </ListExpansionProvider>
  );
};
