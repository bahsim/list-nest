### Prompt

1. Identify all shared logic in `useMainList` and `useHistoryList` (e.g., category filtering, unique categories, item grouping, expanded item state).

### Result

Here’s the shared logic between `useMainList` and `useHistoryList`:

**1. Category Filtering**
- Both use `filterByCategory` to filter items by selected categories.
- Both manage `selectedCategories` state and a handler to toggle categories.

**2. Unique Categories**
- Both use `getUniqueCategories` to compute the list of unique categories from items.

**3. Expanded Item State**
- Both manage `expandedItem` state and a handler to expand/collapse an item.

**4. Grouping/Grouping by Date**
- Both group items for display (main list: by current/all, history: by date).
- Both use a grouping utility (`groupByDate` in history, filteredCurrentItems in main).

**5. Editing State**
- Both manage `editingItem` state for editing a list item.

**6. Item List State**
- Both manage the main `items` state and a `setItems` handler.

**Summary Table:**

| Concern              | useMainList         | useHistoryList      | Shared? |
|----------------------|---------------------|---------------------|---------|
| items state          | yes                 | yes                 | yes     |
| selectedCategories   | yes                 | yes                 | yes     |
| uniqueCategories     | yes                 | yes                 | yes     |
| expandedItem         | yes                 | yes                 | yes     |
| editingItem          | yes                 | yes                 | yes     |
| category filtering   | yes                 | yes                 | yes     |
| grouping by date     | no (current/all)    | yes                 | partial |
| modal/dialog state   | yes                 | no                  | no      |

**Conclusion:**  
The core list state, category filtering, unique categories, expanded item, and editing item logic are all shared and can be extracted to generic hooks/utilities.  
Grouping logic is partially shared and can be parameterized.  
Modal/dialog state is feature-specific.
