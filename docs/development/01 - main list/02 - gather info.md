### Prompt

gather without summarizing in raw format

### Result

**Raw, unsummarized info from project files about "view main task list":**

---

pre-development/3 - execution/04 - BA reqs.md:
```
- As a **user**, I want to **view my main task list**, so that I can see all my current tasks.
```

pre-development/3 - execution/04 - BA prompts/03 - extraction.md:
```
### Task List (Main List View)
- System must display a list of tasks/items.
- List must be viewable on both mobile and laptop screens.
- Each task must show key details (e.g., title, status, due date).
- User must be able to mark tasks as complete/incomplete.
- User must be able to delete tasks.
- User must be able to filter and/or sort the list.
- List must update in real time after add/edit/delete actions.
- System must display empty state when no tasks exist.
- System must persist list state between sessions.
- System must support pagination or infinite scroll if list exceeds screen size.
- To Clarify: What fields are shown per task? Are there bulk actions?
```

pre-development/3 - execution/04 - BA prompts/04 - extraction.md:
```
### Task List (Main List View)
- System must display a list of tasks/items.
- List must be viewable on both mobile and laptop screens.
- Each task must show the following fields: name, count, price.
- User must be able to mark tasks as complete/incomplete.
- User must be able to delete tasks.
- User must be able to filter and/or sort the list.
- List must update in real time after add/edit/delete actions.
- System must display empty state when no lists created.
- System must display empty state when no tasks exist.
- System must persist list state between sessions.
- System must support pagination or infinite scroll if list exceeds screen size.
- System must support bulk actions on tasks.
```

pre-development/3 - execution/04 - BA prompts/05 - user stories.md:
```
As a user, I want to sort tasks by due date or priority, so that I can prioritize my work.

Acceptance Criteria:
- Given the main list view, When I select a sort option, Then the list updates accordingly.
```

pre-development/2 - planning/03 - ui sketches/02 - main list view.md:
```
/** @typedef {Represents a shopping list item.} */
export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice: number;
  category: string;
  isFocused: boolean;
  isBought: boolean;
  addedBy: string; // userId
  addedAt: Date;
  boughtAt?: Date;
}

/** @typedef {Represents a user.} */
export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

/** @typedef {Represents an AI suggestion.} */
export interface AISuggestion {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice: number;
  category: string;
}
```
```
- `HeaderBar`
  - AppLogo
  - UserProfileDropdown
  - SettingsButton

- `ShoppingList`
  - `ShoppingListItemCard[]`
    - Name, Quantity (editable), EstimatedPrice, CategoryTag, FocusIcon, Checkbox, Edit/Delete
    - UserAvatar (who added)
  - `AISuggestionButton`
  - `AISuggestionCard[]` (if suggestions open)

- `AddItemForm`
  - AutocompleteInput (name)
  - QuantityInput
  - CategoryDropdown
  - AddButton

- `PurchasedHistory`
  - PurchasedItemCard[] (faded, with date, restore button)

- `AnalyticsPanel` (collapsible)
  - AverageUsage, Frequency, BudgetTrends

- `ReminderBanner`
  - LowStockAlert, OneTapAdd

- `ActivityLog` (collapsible/tab)
  - RecentActions
```

pre-development/2 - planning/03 - ui sketches/01 - main list view.md:
```
#### Main Shopping List View: Interface Description

The **Main Shopping List View** is designed to be intuitive, visually clean, and highly functional, catering to both manual input and AI-powered assistance. Here's a detailed breakdown of the interface:

#### **1. Header Section**
- **App Name/Logo**: Displayed prominently at the top for branding.
- **User Profile Icon**: A small avatar or initials of the logged-in user, with a dropdown for switching between family members or user accounts.
- **Settings Icon**: Access to app settings, including notifications, budget preferences, and AI customization.

#### **2. Shared Shopping List**
The core of the interface is the shared shopping list, where all family members can collaborate in real-time.

##### **Item Display**
Each item in the list is displayed as a card or row with the following details:
- **Item Name**: Large, bold text for easy readability.
- **Quantity**: A small editable field next to the item name (e.g., "Milk - 2 liters").
- **Estimated Price**: Displayed in smaller text below the item name (e.g., "$3.50").
- **Category Tag**: A small, color-coded label (e.g., "Dairy," "Vegetables") for easy categorization.
- **Focus Icon**: A star or flag icon to mark the item as "focused" (e.g., items that are urgent or high-priority).
- **Checkbox**: A checkbox to mark the item as "bought." Once checked, the item moves to the **Purchased History** section.
- **Edit/Delete Buttons**: Small icons (e.g., pencil for edit, trash can for delete) for quick modifications.

##### **AI Suggestions**
- **"GenAI Suggestion" Button**: A prominent button at the top or bottom of the list labeled "AI Suggestions." Clicking this button generates a list of recommended items based on past purchases, seasonal trends, or detected low-stock staples.
- **Suggestion Cards**: AI-suggested items appear as separate cards with an "Add to List" button for easy inclusion.

#### **3. Add Item Section**
At the bottom or top of the list, there’s a dedicated section for adding new items manually:
- **Autocomplete Search Bar**: As users type, the app provides autocomplete suggestions based on previous entries, popular items, or AI predictions.
- **Quantity Field**: A small input box to specify the quantity (e.g., "3 bananas").
- **Category Dropdown**: A dropdown menu to assign a category to the item (e.g., "Fruits," "Snacks").
- **Add Button**: A large, clear button labeled "Add Item" to finalize the entry.

#### **4. Purchased History Section**
At the bottom of the screen (or accessible via a tab), there’s a **Purchased History** section:
- **Checked-Off Items**: Items marked as "bought" are moved here, displayed in a faded or grayed-out style.
- **Date of Purchase**: Each item shows the date it was checked off.
```

ui-kit/pages/MainListPage.tsx:
```typescript
export const MainListPage: React.FC = () => {
  const [items, setItems] = React.useState<ShoppingListItem[]>([]);
  const [reminders, setReminders] = React.useState<Reminder[]>([]);
  const [activities, setActivities] = React.useState<Activity[]>([]);
  const [activeTab, setActiveTab] = React.useState('list');
  user: User = { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' };

  return (
    <div style={{ paddingBottom: 56 }}>
      <HeaderBar user={user} onSettings={() => {}} />
      <ReminderBanner reminders={reminders} onAdd={id => {}} />
      <AddItemForm onAdd={(input: AddEditItemInput) => {}} categories={['Dairy', 'Bakery']} units={['pcs', 'L']} />
      <ShoppingList
        items={items}
        onEdit={() => {}}
        onDelete={() => {}}
        onToggleBought={() => {}}
        onToggleFocus={() => {}}
      />
      <ActivityLog activities={activities} />
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
```

pre-development/3 - execution/09 - UI Kit Prompt.md:
```
### ShoppingList
- **Props:** `items: ShoppingListItem[]`, `onEdit`, `onDelete`, `onToggleBought`, `onToggleFocus`
- **States:** None
- **Variants:** None
- **Usage:** Main list, each item = ShoppingListItemCard.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### ShoppingListItemCard
- **Props:** `item: ShoppingListItem`, `onEdit`, `onDelete`, `onToggleBought`, `onToggleFocus`
- **States:** `isEditing`, `isHovered`
- **Variants:** Focused, bought, normal
- **Usage:** Shows name, qty, price, category, focus, bought, user avatar, edit/delete.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`
```

pre-development/3 - execution/07 - SA specs.md:
```
### Data Models
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
```

