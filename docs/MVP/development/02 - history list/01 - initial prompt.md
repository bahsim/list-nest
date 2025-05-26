### Prompt

Act as a Lead Developer and consider how to develop history-list page.
It is pretty similar to Main List Page but with some changes
- empty state with different props
- instead of current group and all group, list items divided by date for each date own group
- beside filtering by category, there is a filtering by date range - some presets and custom range
- date presets - week, month, 3 months, half an year, 1 year

### Result

**You want to design a `history-list` page, similar to your Main List Page, but with:**
- Empty state with different props
- List items grouped by date (not by group)
- Filtering by category and by date range (presets + custom)
- Date presets: week, month, 3 months, half year, 1 year

---

**How to approach this (FSD/FCA, MUI, TypeScript, hooks, etc):**

---

### 1. Directory Structure

- `pages/history-list-page/` (route entry)
- `widgets/history-list/` (main UI, handles grouping, empty state)
- `features/history-list-filters/` (category + date range filter UI/logic)
- `entities/history-list-item/` (single item, grouped by date)
- `shared/constants/date-presets.ts` (presets)
- `shared/types/` (date range, item, etc)

---

### 2. Data Grouping

- Instead of grouping by "group", group by date (e.g., `YYYY-MM-DD`)
- Use a util: `groupItemsByDate(items: Item[]): Record<string, Item[]>`
- Each date group renders a header (date) and its items

---

### 3. Filtering

- Category filter: same as main list
- Date range filter:
  - Presets: week, month, 3 months, half year, 1 year
  - Custom: date picker (MUI)
- Store filter state in a hook/context in `features/history-list-filters/`
- Filtering logic: filter items by category, then by date range

---

### 4. Empty State

- Different props: pass a custom message/illustration to the widget
- Use a component: `EmptyState` in `shared/ui/empty-state/`

---

### 5. UI

- Use MUI Accordion/List for date groups
- Filters at top (category + date range)
- Responsive, accessible

---

### 6. Types

- `HistoryListItem` (extends base item type)
- `DateRange` (`{ from: Date; to: Date }`)
- `DatePreset` (enum or union)

---

### 7. Constants

- `DATE_PRESETS` in `shared/constants/date-presets.ts`:
  ```ts
  export const DATE_PRESETS = [
    { label: 'Week', getRange: () => ... },
    { label: 'Month', getRange: () => ... },
    { label: '3 Months', getRange: () => ... },
    { label: 'Half Year', getRange: () => ... },
    { label: 'Year', getRange: () => ... },
  ] as const;
  ```

---

### 8. Testing

- Unit: grouping util, filter logic, filter UI, empty state
- E2E: filter flows, empty state, grouping

---

**Summary:**  
- New page, widget, features, entities as per FSD
- Group by date, not group
- Filters: category + date range (presets + custom)
- Empty state: custom props
- Use MUI, hooks, types, constants, tests

**Want a file/folder scaffold, code snippets, or more detail on any part?**

---

### Prompt

Don't invent one more wheel - just deep clone main-list-page and make required changes

### Result

Read file: frontend/src/entities/history-list/types.ts
You want to avoid unnecessary work and just deep-clone the main-list-page and its logic, then adapt for history-list specifics.

**Here’s the plan:**
- Clone `main-list-page.tsx` → `history-list-page.tsx` (already exists, but should be replaced with a real clone)
- Clone `widgets/main-list-widget` → `widgets/history-list-widget`
- Clone `features/main-list` → `features/history-list` (or just the relevant logic/hooks/components)
- Adapt all imports/types to use `history-list` domain and types (e.g., `HistoryItem`, group by date, etc.)
- Change grouping logic: instead of current/all group, group by date (using `HistoryGroup`)
- Add date range filter and presets (if not present)
- Change empty state props/message
- Remove/replace any logic that is not relevant for history (e.g., "current" group, "restore" if not needed, etc.)

**You already have:**
- `entities/history-list/types.ts` (with `HistoryItem`, `HistoryGroup`)
- Some history-list files (but not a full widget/feature set)

**Next steps:**
1. Delete the current `history-list-page.tsx` (it’s a stub, not a real clone).
2. Deep copy `main-list-page.tsx` to `history-list-page.tsx`.
3. Deep copy `widgets/main-list-widget` to `widgets/history-list-widget`.
4. Deep copy relevant `features/main-list` logic to `features/history-list`.
5. Update all imports/types/logic to use `history-list` domain and group by date.
6. Add/replace date range filter and empty state as needed.

**Ready to execute steps 1–4? (delete stub, deep copy, then adapt)**  
If yes, I’ll start with the file operations.  
If you want to skip any step or want a specific adaptation, let me know.


---

### Prompt

@history-list-page.tsx 
@01 - initial prompt.md 
Pass once more time, find not cloned files and finish deep-cloning
clue: name or path contain "main list" phrase in various combinations

let's break on several steps
first step - define not cloned files 
start from @history-list-page.tsx  and go on though children and other imports

### Result

Here’s a **precise, pro-level breakdown** of all main-list dependencies in `history-list-page.tsx` and its children, including every import and usage:

---

### 1. **Direct Imports in `history-list-page.tsx`**
- `@/features/main-list/utils/mock-data` → mockCategories, mockUnits
- `@/features/main-list/hooks/use-main-list` → useMainList
- `@/widgets/main-list-widget/main-list-widget` → MainListWidget
- `@/features/main-list/providers/main-list-data-provider` → MainListDataProvider, useMainListData

---

### 2. **Children/Widget Imports in `main-list-widget` (now `history-list-widget`)**
- `@/features/main-list/components/add-item-fab` → AddItemFab
- `@/features/main-list/components/add-edit-item-modal` → AddEditItemModal
- `@/features/main-list/components/restore-dialog` → RestoreDialog
- `@/features/main-list/components/delete-dialog` → DeleteDialog
- `@/entities/list/main-list-context` → MainListProvider
- `@/features/main-list/main-list` → MainList (used in group sections)
- `@/features/main-list/components/category-filter-chips` → CategoryFilterChips

---

### 3. **Types/Props**
- `@/entities/list/types` → MainListItem (used in types and props)
- `MainListWidgetProps`, `ListBag`, etc. (all types in main-list-widget/types.ts)

---

### 4. **Constants**
- `main-list-widget/constants.ts` → MODAL_TITLES, MODAL_ACTION_LABELS

---

### 5. **Sections**
- `sections/current-group.tsx` (uses MainList, MainListItem, GroupHeader)
- `sections/all-group.tsx` (uses MainList, MainListItem, GroupHeader)
- `sections/category-chips-section.tsx` (uses CategoryFilterChips)
- `sections/group-header.tsx` (no main-list dependency, but used by above)

---

### 6. **Provider**
- `main-list-data-provider.tsx` (exports MainListDataProvider, useMainListData, uses MainListItem, mockItems)

---

### 7. **Utils**
- `main-list/utils/mock-data.ts` (mockItems, mockCategories, mockUnits)

---

### 8. **Summary Table (with useMainListData included)**

| Main List Path/Name                                         | History List Path/Name (should be)                | Used In                        |
|-------------------------------------------------------------|---------------------------------------------------|--------------------------------|
| features/main-list/utils/mock-data                          | features/history-list/utils/mock-data             | history-list-page, provider    |
| features/main-list/hooks/use-main-list                      | features/history-list/hooks/use-history-list      | history-list-page              |
| widgets/main-list-widget/main-list-widget                   | widgets/history-list-widget/history-list-widget   | history-list-page              |
| features/main-list/providers/main-list-data-provider        | features/history-list/providers/history-list-data-provider | history-list-page, provider    |
| features/main-list/components/add-item-fab                  | features/history-list/components/add-item-fab     | widget                         |
| features/main-list/components/add-edit-item-modal           | features/history-list/components/add-edit-item-modal | widget                      |
| features/main-list/components/restore-dialog                | features/history-list/components/restore-dialog   | widget                         |
| features/main-list/components/delete-dialog                 | features/history-list/components/delete-dialog    | widget                         |
| entities/list/main-list-context                             | entities/history-list/history-list-context        | widget                         |
| features/main-list/main-list                                | features/history-list/history-list                | widget sections                |
| features/main-list/components/category-filter-chips         | features/history-list/components/category-filter-chips | widget sections           |
| entities/list/types                                         | entities/history-list/types                       | types, props                   |
| widgets/main-list-widget/types.ts                           | widgets/history-list-widget/types.ts              | widget                         |
| widgets/main-list-widget/constants.ts                       | widgets/history-list-widget/constants.ts          | widget                         |
| widgets/main-list-widget/sections/current-group.tsx         | widgets/history-list-widget/sections/date-group.tsx | widget sections             |
| widgets/main-list-widget/sections/all-group.tsx             | widgets/history-list-widget/sections/date-group.tsx | widget sections             |
| widgets/main-list-widget/sections/category-chips-section.tsx| widgets/history-list-widget/sections/category-chips-section.tsx | widget sections      |
| widgets/main-list-widget/sections/group-header.tsx          | widgets/history-list-widget/sections/group-header.tsx | widget sections           |

---

**All of these must be cloned/renamed and all imports in the new history-list files must be updated accordingly.**

**Ready for step 2:**
- Clone/rename all the above files/folders for history-list if not already done.
- Update all imports in the new history-list files to use the new paths/types.

Want to proceed with the cloning and import update for all these files?
