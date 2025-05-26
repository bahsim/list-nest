# Screen-to-Component Mapping (MVP)

| Screen           | Element                | UI Kit Component         | Props/State/Variant           |
|------------------|------------------------|--------------------------|-------------------------------|
| Main List        | Header                 | HeaderBar                | user, onSettings              |
| Main List        | Shopping List          | ShoppingList             | items, onEdit, onDelete, ...  |
| Main List        | Add Item               | AddItemForm              | onAdd, categories, units      |
| Main List        | Item Card              | ShoppingListItemCard     | item, onEdit, onDelete, ...   |
| Main List        | Footer Nav             | FooterNav                | activeTab, onTabChange        |
| Main List        | Reminder Banner        | ReminderBanner           | reminders, onAdd              |
| Main List        | AI Suggestion Button   | AISuggestionButton       | onClick                       |
| Main List        | AI Suggestion Card     | AISuggestionCard         | suggestion, onAdd             |
| Main List        | Purchased History      | PurchasedHistory         | items, onRestore              |
| Main List        | Analytics Panel        | AnalyticsPanel           | analytics, isCollapsed        |
| Main List        | Activity Log           | ActivityLog              | activities, isCollapsed       |
| History          | History View           | HistoryView              | groups, analytics, onRestore  |
| Settings         | Settings Panel         | SettingsPanel            | theme, onThemeChange, ...     |
| Settings         | User Profile Dropdown  | UserProfileDropdown      | user, onLogout, onProfile     |
| Add/Edit Modal   | AddEditItemModal       | AddEditItemModal         | item, onSave, onCancel, ...   |

# (Add more as needed for other screens) 