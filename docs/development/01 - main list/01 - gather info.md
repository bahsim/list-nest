### Prompt

Act as a Senior BA and gather all information regarding view main task list in the project files

### Result


Search files...
**All info about "view main task list" from project files, BA style, no fluff:**

---

### Functional Requirements

- System displays a list of tasks/items (a.k.a. main shopping list).
- List is viewable on both mobile and desktop (responsive).
- Each task shows: **name, quantity, estimated price, category, focus (star), bought (checkbox), user avatar, edit/delete**.
- User can:
  - Mark tasks as complete/incomplete (checkbox).
  - Edit/delete tasks (icons).
  - Filter/sort the list (by due date, priority, etc.).
  - Focus tasks (toggle star/flag).
  - Restore purchased items from history.
  - See empty state if no tasks exist.
  - See real-time updates after add/edit/delete.
  - Use bulk actions (e.g., select multiple, delete).
- List persists between sessions.
- Pagination or infinite scroll if list is long.
- Multi-user: real-time collaboration, avatars, activity log.

---

### Data Model (TypeScript)

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
```

---

### UI Components

- `HeaderBar` (logo, user, settings)
- `ShoppingList` (array of `ShoppingListItemCard`)
- `ShoppingListItemCard` (shows all fields, edit/delete/focus/bought)
- `AddItemForm` (autocomplete, quantity, category, add)
- `AISuggestionButton` / `AISuggestionCard` (AI-powered suggestions)
- `PurchasedHistory` (faded, restore)
- `AnalyticsPanel` (usage, frequency, budget)
- `ReminderBanner` (low stock, one-tap add)
- `ActivityLog` (recent actions)
- `FooterNav` (tabs: list, analytics, history, settings)

---

### UI/UX

- Mobile-first, single-column, touch-friendly.
- Pastel color palette, sans-serif fonts, minimal SVG icons.
- Empty state: clear message when no tasks.
- Accessibility: contrast, font size, tap targets.
- Consistent with brand style and atomic system.

---

### Acceptance Criteria (from user stories)

- Main list view shows all current tasks.
- Each task displays all required fields.
- Marking as bought moves item to history.
- Editing/deleting updates the list in real time.
- Filtering/sorting works as expected.
- Empty state shown if no tasks.
- List persists after reload.
- Bulk actions available.
- Responsive on mobile and desktop.

---

### To Clarify

- What bulk actions are supported (delete, mark as bought, etc.)?
- What fields are required for each task (name, quantity, price = required)?
- Are there limits on number of tasks/items?
- Any special accessibility or animation requirements?

---

**Summary:**  
"View main task list" = responsive, real-time, multi-user list with all task fields, edit/delete/focus/bought, filtering/sorting, bulk actions, history, and brand-consistent UI. Data model and UI structure are fully defined in code and docs.
