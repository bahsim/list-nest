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
