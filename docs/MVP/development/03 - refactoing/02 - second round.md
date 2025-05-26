### Prompt

@use-main-list.ts @@use-history-list.ts 
Act as a Experienced Advanced Developer and advice on how to be with these hooks
On one hand they are a bit similar, on another hand there is a violation of single responsibility principle
Check each file accurately

### Result

**Direct answer:**

Both `useMainList` and `useHistoryList` are "fat" feature hooks with overlapping logic and clear SRP violations. Here’s a breakdown of what’s wrong and what to do, with code-level specifics:

---

**What’s wrong:**

- **Duplication:** Both hooks use category filtering, expansion, and editing logic, but each implements/uses them separately.
- **SRP Violation:** They mix domain logic (list ops), UI state (modals, expanded), and dialog state.
- **Poor Composability:** Hard to test or reuse parts in isolation; changes in one often require copy-paste to the other.

---

**What to do (step-by-step, code-level):**

1. **Identify shared logic:**
   - Category filtering (`useCategoryFilter`)
   - Expanded item state (`useExpandedItem`)
   - Editing item state (`useEditingItem`)
   - List state (`useListState`)
   - Grouping by date (in history, but could be generic)
   - Dialog state (in main, could be generic)

2. **Extract shared logic into small hooks/utils:**
   - If not already, move `useCategoryFilter`, `useExpandedItem`, `useEditingItem`, `useListState`, and `groupByDate` to `shared/` and ensure they are generic.
   - If you see any logic repeated (e.g., filtering by category, grouping), extract to a util/hook.

3. **Parameterize differences:**
   - For example, in `useHistoryList`, grouping is by `boughtAt` or `deletedAt`. Make `groupByDate` accept a field accessor.
   - In `useMainList`, modal/dialog state is more complex. Keep this in the feature hook or move to the widget if it’s UI-only.

4. **Compose feature hooks from these building blocks:**
   - `useMainList` and `useHistoryList` should just wire up the generic hooks and add only feature-specific logic (e.g., modals, dialogs).
   - Example:  
     ```ts
     // Pseudocode
     const { filteredItems, ... } = useCategoryFilter(items, getCategory);
     const { expandedItem, ... } = useExpandedItem(...);
     // etc.
     ```

5. **Keep UI state out of domain hooks:**
   - Modal open/close, dialog state, etc., should be managed in the widget/component or a dedicated UI state hook, not mixed with list logic.

6. **Test and refactor:**
   - After refactoring, ensure both hooks still provide the same API to their consumers.
   - Write unit tests for the new small hooks.

---

**Summary of your query in my words:**  
You asked for an expert-level, code-accurate review of `useMainList` and `useHistoryList`, focusing on their similarity and SRP violations. The answer: they’re too fat, mix concerns, and duplicate logic. Solution: extract shared logic into small, generic hooks/utils, compose feature hooks from these, and keep UI state separate. This will make your code DRY, testable, and SRP-compliant.

**Extra tip:**  
If you find yourself passing a lot of props between these hooks, consider a context for shared state, but only if it’s truly cross-cutting.

**Speculative:**  
If you want to go further, you could make a generic "list feature hook" that takes config for the differences (fields, grouping, etc.), and use it to build both main/history hooks with minimal glue code.

---

### Prompt

Break this down into the required steps, only include the truly necessary steps

### Result

**Absolutely necessary steps to refactor `useMainList` and `useHistoryList` for SRP and DRY:**

1. **List all shared logic**  
   (category filtering, expanded item, editing, grouping, dialog/modal state, etc.)

2. **Extract each shared concern into a generic hook or util**  
   (e.g., `useCategoryFilter`, `useExpandedItem`, `useEditingItem`, `groupByDate`)

3. **Refactor both hooks to use these new hooks/utils**  
   (remove duplicated logic, only keep feature-specific stuff in each hook)

4. **Move UI-only state (modals/dialogs) out of domain hooks**  
   (keep in widget/component or a dedicated UI state hook)

5. **Test both hooks’ API and behavior**  
   (make sure nothing breaks for consumers)

That’s it. No fluff, just what’s required.
