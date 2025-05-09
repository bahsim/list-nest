### Prompt

Previous result

### Result


Read file: @02 - main list view.md
Read file: pre-development/2 - planning/03 - ui sketches/02 - main list view.md
Read file: pre-development/2 - planning/03 - ui sketches/06 - add-edit modal.md
Read file: pre-development/2 - planning/03 - ui sketches/09 - history view.md

**Family Grocery App – UI Screens & Code-Relevant Details**

---

## Main List View  
_Source: `pre-development/2 - planning/03 - ui sketches/02 - main list view.md`_

### Data Models
```typescript
export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice: number;
  category: string;
  isFocused: boolean;
  isBought: boolean;
  addedBy: string;
  addedAt: Date;
  boughtAt?: Date;
}

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface AISuggestion {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice: number;
  category: string;
}
```

### UI Component Structure
- `HeaderBar` (AppLogo, UserProfileDropdown, SettingsButton)
- `ShoppingList`
  - `ShoppingListItemCard[]` (Name, Quantity, EstimatedPrice, CategoryTag, FocusIcon, Checkbox, Edit/Delete, UserAvatar)
  - `AISuggestionButton`
  - `AISuggestionCard[]`
- `AddItemForm` (AutocompleteInput, QuantityInput, CategoryDropdown, AddButton)
- `PurchasedHistory` (PurchasedItemCard[], faded, restore)
- `AnalyticsPanel` (collapsible)
- `ReminderBanner` (LowStockAlert, OneTapAdd)
- `ActivityLog` (collapsible/tab)
- `FooterNav` (ShoppingList, Analytics, History, Settings)

### Key Interactions
- Add/Edit/Remove item (form, icons)
- Mark as bought (checkbox)
- AI suggestions (fetch, add)
- Focus item (toggle)
- Categorize (dropdown)
- Restore purchased
- Analytics (panel)
- Reminders (banner)
- Multi-user (real-time, avatars, activity log)

### UI/UX Notes
- Pastel color palette, sans-serif fonts, minimal SVG icons

### Anticipated Backend/Services
- WebSocket/Realtime API
- Autocomplete API
- AI Suggestion Service
- Analytics Service
- Notification/Reminder Service
- Role-based access
- Full test coverage

---

## Add/Edit Modal  
_Source: `pre-development/2 - planning/03 - ui sketches/06 - add-edit modal.md`_

### Data Model
```typescript
export interface AddEditItemInput {
  id?: string;
  name: string;
  quantity: string;
  unit: string;
  estimatedPrice?: number;
  currency?: string;
  category: string;
  isFocused: boolean;
}
```

### UI Component Structure
- `AddEditItemModal`
  - `ModalOverlay`
  - `ModalContainer`
    - `Header` (Title, CloseButton)
    - `Form`
      - `ItemNameInput` (autocomplete, voice, error)
      - `QuantityInput`
      - `UnitDropdown`
      - `EstimatedPriceInput`
      - `CurrencyDropdown`
      - `CategoryDropdown` (add-new)
      - `FocusToggle`
    - `AISuggestionBanner` (suggestions, click to autofill)
    - `ActionButtons` (Save, Cancel)

### Key Interactions
- Open modal (add/edit)
- Autocomplete (history, AI)
- Voice input (mic)
- Dropdowns (unit, category, currency)
- AI suggestions (autofill)
- Validation (required fields)
- Save/Cancel
- Accessibility (tab, aria-labels)

### UI/UX Notes
- Centered modal, rounded, shadow
- Vertical fields, clear labels
- Primary/secondary buttons
- Subtle AI suggestion banner
- Minimal icons, inline errors

### Anticipated Backend/Services
- Autocomplete API
- AI Suggestion Service
- Speech-to-text
- Unit/category/currency management
- Validation logic
- Test coverage

---

## History View  
_Source: `pre-development/2 - planning/03 - ui sketches/09 - history view.md`_

### Data Models
```typescript
export interface HistoryItem {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice?: number;
  category: string;
  isFocused: boolean;
  purchasedAt: Date;
  checkedOffBy: string;
}

export interface HistoryGroup {
  date: string;
  items: HistoryItem[];
}

export interface HistoryAnalytics {
  totalItems: number;
  totalSpending: number;
  frequentItems: { name: string; count: number }[];
  categoryBreakdown: { category: string; percent: number }[];
}
```

### UI Component Structure
- `HistoryView`
  - `Header` (BackButton, Title, SearchBar w/ voice)
  - `FilterBar` (CategoryFilterDropdown, DateRangePicker, FocusToggle)
  - `HistoryList`
    - `HistoryGroup[]` (DateHeader, expand/collapse)
    - `HistoryItemRow[]` (Name, Quantity, Price, CategoryTag, FocusIndicator, UserAvatar, RestoreButton)
  - `AnalyticsSummaryPanel` (collapsible)

### Key Interactions
- Search (text/voice)
- Filter (category, date, focus)
- Expand/collapse date groups
- Restore item (confirmation)
- Analytics panel (expand/collapse)
- Back navigation

### UI/UX Notes
- Grouped by date, expandable
- Item: bold name, small price, colored tags, focus icon, avatar, restore
- Search bar: placeholder, mic
- Filters: dropdowns, toggles
- Analytics: pie/bar, collapsible
- Restore: confirmation dialog
- Accessibility: tab/arrow, voice, high-contrast

### Anticipated Backend/Services
- History API (fetch, filter, restore)
- Analytics Service
- Voice search
- Expand/collapse logic
- Restore confirmation
- Full test coverage

---

**This is a single, code-focused reference for all three screens. Ready for dev handoff or further architecture planning.**
