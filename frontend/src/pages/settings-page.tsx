import React, { useState, useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { CategoryEditor } from '@/features/category-editor';
import { SettingsSection } from '@/widgets/settings-section';
import { CurrencySelector } from '@/features/currency-selector';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LanguageIcon from '@mui/icons-material/Language';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { LanguageSelector } from '@/features/language-selector';
import { SettingsResetSection } from '@/widgets/settings-reset-section';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import {
  CURRENCY_KEY,
  LANGUAGE_KEY,
  CATEGORIES_KEY,
  LIST_ITEMS_KEY,
} from '@/shared/constants/storage-keys';
import i18n from '@/shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Category } from '@/shared/types/category';
import { ListItem } from '@/entities/list';
import { filterActiveItems, filterActiveOrTodayItems } from '@/features/history-list-item/utils';
import { getDefaultCategories } from '@/shared/utils/get-default-categories';

type TabType = 'categories' | 'currency' | 'language' | 'reset';

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState<TabType | null>(null);
  const [currency, setCurrency] = usePersistentState(CURRENCY_KEY, '');
  const [language, setLanguageRaw] = usePersistentState(LANGUAGE_KEY, '');
  const [categories, setCategories] = usePersistentState<Category[]>(CATEGORIES_KEY, []);
  const [items, setItems] = usePersistentState<ListItem[]>(LIST_ITEMS_KEY, []);
  const [isReload, setReload] = useState(false);

  const setLanguage = useCallback(
    (lang: string) => {
      setLanguageRaw(lang);
      i18n.changeLanguage(lang);
    },
    [setLanguageRaw],
  );

  useEffect(() => {
    if (isReload) {
      window.location.replace('/');
    }
  }, [isReload]);

  const handleAddCategory = (category: Category) => {
    setCategories((prev: Category[]) => [...prev, category]);
  };

  const handleChangeCategory = (data: { newValue: Category; idx: number }) => {
    setCategories((prev: Category[]) =>
      prev.map((cat, idx) => (idx === data.idx ? data.newValue : cat)),
    );
  };

  const handleDeleteCategory = (category: Category) => {
    setCategories((prev: Category[]) => prev.filter((cat) => cat.name !== category.name));
  };

  const handleResetCategories = () => {
    setCategories(getDefaultCategories(language));
  };

  const handleResetHistory = () => {
    setItems(filterActiveOrTodayItems);
  };

  const handleResetAll = () => {
    handleResetCategories();
    setItems(filterActiveItems);
    setCurrency('');
    setLanguage('');
    setReload(true);
  };

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', py: 3, px: 1, width: '100%' }}>
      <SettingsSection
        title={t('settings.categories')}
        expanded={expanded === 'categories'}
        onExpand={() => setExpanded(expanded === 'categories' ? null : 'categories')}
        icon={<CategoryIcon sx={{ color: (theme) => theme.palette.primary.main }} />}
      >
        <CategoryEditor
          categories={categories}
          onChange={handleChangeCategory}
          onDelete={handleDeleteCategory}
          onAdd={handleAddCategory}
        />
      </SettingsSection>
      <SettingsSection
        title={t('settings.currency')}
        expanded={expanded === 'currency'}
        onExpand={() => setExpanded(expanded === 'currency' ? null : 'currency')}
        icon={<AttachMoneyIcon sx={{ color: (theme) => theme.palette.success.main }} />}
      >
        <CurrencySelector value={currency} onChange={setCurrency} />
      </SettingsSection>
      <SettingsSection
        title={t('settings.language')}
        expanded={expanded === 'language'}
        onExpand={() => setExpanded(expanded === 'language' ? null : 'language')}
        icon={<LanguageIcon sx={{ color: (theme) => theme.palette.secondary.main }} />}
      >
        <LanguageSelector value={language} onChange={setLanguage} label="Language" />
      </SettingsSection>
      <SettingsSection
        title={t('settings.reset')}
        expanded={expanded === 'reset'}
        onExpand={() => setExpanded(expanded === 'reset' ? null : 'reset')}
        icon={<RestartAltIcon sx={{ color: (theme) => theme.palette.error.main }} />}
      >
        <SettingsResetSection
          onResetCategories={handleResetCategories}
          onResetHistory={handleResetHistory}
          onResetAll={handleResetAll}
        />
      </SettingsSection>
    </Box>
  );
};
