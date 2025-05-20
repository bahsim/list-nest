### Prompt 1

Act as a Lead deveoper with experience in refactoring.
Go through the code base and find logic which potentially should be moved in shared or local utility files @frontend 

### Result 2

**Findings: logic that should be moved to shared or local utility files in your frontend codebase**

#### Already in shared/utils (good, leave as is)
- `filterByCategory`, `getUniqueCategories`, `getCategoryValue`, `getGroupSum`, `isBought`, `isDeleted` (`src/shared/utils/list-utils.ts`)
- `isSameDay`, `getDefaultRange` (`src/shared/utils/date.ts`)
- `groupByDate` (`src/shared/utils/group-by-date.ts`)
- `formatDateShort` (`src/shared/utils/format-date.ts`)
- Navigation helpers (`src/shared/utils/navigation.ts`)

#### Candidates for refactor/move

##### 1. `isItemExpanded` (`src/entities/list/base-list/utility.ts`)
- **Move to**: `src/shared/utils/list-utils.ts` or a new `src/shared/utils/list-expansion.ts`
- **Why**: Generic logic, not entity-specific, used for UI state.

##### 2. `getPriority` and `sortListItemsByPriority` (`src/entities/list/utils/sort-list-items-by-priority.ts`)
- **Keep as local entity util**: These are domain-specific (list item priority), so keeping them in `entities/list/utils/` is correct per FSD/FCA.

##### 3. Dialog content functions (`src/widgets/main-list-widget/dialog-config.tsx`)
- `getRestoreContent`, `getDeleteContent`
- **Keep as local widget util**: These are UI-specific, not pure logic, so keeping them in the widget slice is correct.

##### 4. Any logic in UI components (not found in the sampled files)
- **Rule**: If you find mapping, filtering, or calculation logic in a component, move it to a colocated `utils/` or `hooks/` folder, or to `shared/utils/` if it's generic.

---

**Summary of what to move:**
- Move `isItemExpanded` to `shared/utils` (it's not entity-specific).
- Leave domain-specific and UI-specific logic in their local `utils/` or config files.
- Audit your components for any business logic or non-trivial calculations and move them to local utils/hooks.

**Let me know if you want a code move for `isItemExpanded` or want to check a specific file for hidden logic.**

---

### Prompt 2

- Audit your components for any business logic or non-trivial calculations and move them to local utils/hooks.

### Result 2

**Audit results: business logic or non-trivial calculations in components**

### 1. `frontend/src/pages/main-list-page.tsx`
- **Business logic in component:**
  - `filteredCurrentItems` (filtering logic)
  - `handleSaveItem` (merges/creates items, assigns ids/dates)
- **Move to:**  
  - Filtering logic → custom hook or colocated `utils/`
  - Save logic → custom hook (e.g., `useMainListSave`)

### 2. `frontend/src/pages/history-list-page.tsx`
- **Business logic in component:**
  - `itemsGroupedByDate` (grouping by date, formatting)
- **Move to:**  
  - Grouping logic → custom hook or colocated `utils/`

### 3. `frontend/src/features/category-editor/category-editor.tsx`
- **Business logic in component:**
  - All category state management, add/edit/delete logic
- **Move to:**  
  - Custom hook: `useCategoryEditor` (encapsulate all state and handlers)

---

**Summary of what to move:**
- Move all filtering, mapping, and stateful business logic out of components into hooks or colocated utils.
- UI should only call hooks and render.

**Want me to refactor one of these as an example? If so, which file/hook do you want first?**
