### Prompt

Shopping list would be used on History page but with differecnt swiping actions and maybe with slightly different info

### Result

Perfect use case for the **composition pattern** and “smart/dumb” component split.

### How to do it cleanly:

#### 1. **Extract a “dumb” presentational list and item card**
- Move all generic rendering logic (layout, displaying fields, etc) into a `BaseShoppingList` and `BaseShoppingListItemCard` (or just `List`/`ListItemCard` if you want to be generic).
- These components:
  - Take all actions (edit, delete, swipe, etc) as props.
  - Don’t know about business logic, just call the handlers.
  - Don’t hardcode which swipe does what—let the parent decide.

#### 2. **Feature-specific “smart” wrappers**
- In `main-list`, keep `ShoppingList` and `ShoppingListItemCard` that:
  - Compose the base components.
  - Provide the business logic, handlers, and props for the main list use case.
- In `history`, create `HistoryList` and `HistoryListItemCard` that:
  - Compose the base components.
  - Provide the business logic, handlers, and props for the history use case (different swipe actions, info, etc).

#### 3. **File structure example:**
```
src/features/shared-list/
  base-list.tsx
  base-list-item-card.tsx
  types.ts
src/features/main-list/
  shopping-list.tsx
  shopping-list-item-card.tsx
  ...
src/features/history/
  history-list.tsx
  history-list-item-card.tsx
  ...
```

#### 4. **Benefits:**
- No code duplication.
- Each feature can customize behavior (swipe, info, etc) without hacks.
- Shared UI logic is in one place, but business logic is feature-specific.

---

**TL;DR:**  
- Extract a generic, “dumb” list and item card to a shared feature folder.
- Compose them in each feature with the specific logic and actions you need.

**Want me to generate the base component extraction and show how to wire it up for both features?**  
Just say so.
