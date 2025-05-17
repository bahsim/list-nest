### Prompt

@use-main-list.ts @use-history-list.ts 
Act as a Experienced Advanced Developer and advice on how to be with these hooks
On one hand they are a bit similar, on another hand there is a violation of single responsibility principle

### Result

**Analysis:**

- Both `useMainList` and `useHistoryList` are “fat” hooks: they manage state, handlers, and derived data for their respective list UIs.
- They share a lot of logic: category filtering, expansion, selection, and item grouping.
- They violate SRP because they mix domain logic (list operations), UI state (modals, expanded items), and even some dialog state.
- They are not easily composable or testable in isolation, and changes to one often require copy-pasting to the other.

**Advice:**

1. **Extract Shared Logic to Smaller Hooks/Utils:**  
   - Move category filtering, unique category calculation, and grouping to small, generic hooks or utilities (e.g., `useCategoryFilter`, `useExpandableList`, `useGroupedByDate`).
   - This makes each concern testable and reusable.

2. **Compose Feature Hooks from Smaller Hooks:**  
   - `useMainList` and `useHistoryList` should just compose these smaller hooks and add only the feature-specific logic (e.g., modal state, dialog state).
   - This keeps each hook focused and SRP-compliant.

3. **Keep UI State Separate from Domain State:**  
   - UI state (modals, expanded items) should be managed in the widget/component or in a dedicated UI state hook, not mixed with domain logic.

4. **Parameterize Differences:**  
   - If the only difference is which fields are used (e.g., `boughtAt` vs. `deletedAt`), parameterize the field accessors and reuse the same logic.

**Summary:**  
Refactor both hooks to extract and reuse shared logic as small, focused hooks/utilities.  
Compose feature hooks from these building blocks, keeping UI state and domain logic separate.  
This will make your codebase more DRY, testable, and maintainable, and will strictly follow the single responsibility principle.

---

### Prompt

Break this down into the required steps, only include the truly necessary steps

### Result

1. Identify all shared logic in `useMainList` and `useHistoryList` (e.g., category filtering, unique categories, item grouping, expanded item state).
2. Extract each shared concern into its own small, generic hook or utility (e.g., `useCategoryFilter`, `useExpandableItem`, `useGroupedByDate`).
3. Refactor `useMainList` and `useHistoryList` to use these new hooks/utilities, removing duplicated logic.
4. Keep feature-specific logic (e.g., modal/dialog state) in the feature hook or move to the widget if it’s purely UI state.
5. Test that both hooks still provide the required API and behavior for their consumers.

