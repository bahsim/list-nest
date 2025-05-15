import { useState, useMemo } from 'react';
import type { MainListItem } from '@/entities/list/types';
import {
  filterByCategory,
  getUniqueCategories,
  getCategoryValue,
  getGroupSum,
} from '../utils/utils';
import { useDeleteDialog } from './use-delete-dialog';
import { useRestoreDialog } from './use-restore-dialog';

export type ModalMode = 'add' | 'edit' | 'complete';

export const useMainList = (initialItems: MainListItem[] = []) => {
  const [activeTab, setActiveTab] = useState<string>('list');
  const [items, setItems] = useState<MainListItem[]>(initialItems);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedItem, setExpandedItem] = useState<{
    group: 'current' | 'all';
    itemId: string;
  } | null>(null);
  const [editingItem, setEditingItem] = useState<MainListItem | null>(null);
  const [modalMode, setModalMode] = useState<ModalMode>('add');

  // Dialog hooks
  const deleteDialog = useDeleteDialog(setItems);
  const restoreDialog = useRestoreDialog(setItems);

  // Handlers
  const handleNewItem = (): void => {
    setEditingItem(null);
    setIsAddEditModalOpen(true);
    setModalMode('add');
  };
  const handleSaveItem = (input: any): void => {
    setItems((prev) => {
      if (editingItem) {
        return prev.map((i) => (i.id === editingItem.id ? { ...i, ...input } : i));
      }
      return [...prev, input];
    });
    setIsAddEditModalOpen(false);
    setEditingItem(null);
    setModalMode('add');
  };
  const handleCancelAdd = (): void => {
    setIsAddEditModalOpen(false);
    setEditingItem(null);
    setModalMode('add');
  };
  const handleToggleCategory = (category: string): void => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };
  const handleExpandItem = (group: 'current' | 'all', itemId: string): void => {
    setExpandedItem((prev) =>
      prev && prev.group === group && prev.itemId === itemId ? null : { group, itemId },
    );
  };
  const handleEditItem = (item: MainListItem): void => {
    setEditingItem(item);
    setIsAddEditModalOpen(true);
    setModalMode('edit');
  };
  const handleDeleteItem = deleteDialog.handleDeleteItem;
  const handleToggleBought = (item: MainListItem): void => {
    setEditingItem(item);
    setIsAddEditModalOpen(true);
    setModalMode('complete');
  };
  const handleToggleCurrent = (item: MainListItem): void => {};
  const handleRestoreItem = restoreDialog.handleRestoreItem;
  const handleSaveNote = (id: string, note: string): void => {};

  // Derived data (memoized)
  const filteredItems = useMemo(
    () => filterByCategory(items, selectedCategories),
    [items, selectedCategories],
  );
  const filteredCurrentItems = useMemo(
    () => filterByCategory(items.filter((item) => item.isCurrent), selectedCategories),
    [items, selectedCategories],
  );
  const uniqueCategories = useMemo(
    () => getUniqueCategories(items),
    [items],
  );

  return {
    // state
    activeTab,
    setActiveTab,
    items,
    setItems,
    isAddEditModalOpen,
    setIsAddEditModalOpen,
    selectedCategories,
    setSelectedCategories,
    expandedItem,
    setExpandedItem,
    editingItem,
    setEditingItem,
    modalMode,
    setModalMode,
    // delete dialog
    ...deleteDialog,
    // restore dialog
    ...restoreDialog,
    // handlers
    handleNewItem,
    handleSaveItem,
    handleCancelAdd,
    handleToggleCategory,
    handleExpandItem,
    handleEditItem,
    handleDeleteItem,
    handleToggleBought,
    handleToggleCurrent,
    handleRestoreItem,
    handleSaveNote,
    // derived
    filteredItems,
    filteredCurrentItems,
    uniqueCategories,
    getCategoryValue,
    getGroupSum,
  };
}; 