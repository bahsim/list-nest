### Prompt 

Act as a Pro and Lead Developer and refactor @MainListView.tsx  according to best practices and following coposition pattern with avoiding deep components nesting.
Reflect on current structure and propose your vision.

### Result

**Your prompts, reworded as a single request:**

> Refactor my MainListView page in a clean, scalable way using the composition pattern and best practices for a NestJS/TypeScript/React (with MUI) project. Avoid deep component nesting, extract all feature-specific components and utilities, and organize the codebase so that:
> - The page entry is in a `pages/` directory (not `components/`).
> - All feature logic, UI, and helpers are grouped in a dedicated `features/main-list/` directory.
> - All imports are updated accordingly.
> - The structure is idiomatic, modular, and ready for growth.
> 
> After the refactor, the code should be flat, readable, and easy to maintain, with each component and utility in its own file, and the page file only responsible for composition and top-level state.

---

**Summary of the result:**

- All feature components (`CategoryFilterChips`, `ShoppingListGroup`, `AddItemFab`) and utilities (`utils.ts`) were moved to `frontend/src/features/main-list/`.
- The main page entry was moved and renamed to `frontend/src/pages/main-list-page.tsx`.
- All imports in the page were updated to reference the new feature directory.
- The old `MainListView` directory was deleted.
- The resulting structure is:
  ```
  frontend/src/pages/main-list-page.tsx
  frontend/src/features/main-list/
    category-filter-chips.tsx
    shopping-list-group.tsx
    add-item-fab.tsx
    utils.ts
  ```
- The code is now idiomatic, modular, and ready for further scaling or feature work.  
- No deep nesting, no feature-specific code polluting global components, and the page is just a clean composition layer.
