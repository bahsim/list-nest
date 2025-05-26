### Prompt

Act as a Experienced Advanced Developer and advice on how to be with these hooks
On one hand they are a bit similar, on another hand there is a violation of single responsibility principle


@main-item-expanded.tsx @history-item-expanded.tsx 

don't create base-item-expanded because to much abstracted nesting
approach toward compsition and splitting on small components
in @main-item-expanded.tsx and @history-item-expanded.tsx we add own set of the components

### Result

You're right: both `MainItemExpanded` and `HistoryItemExpanded` share some structure (layout, cost, notes, dividers), but their logic and actions diverge. You want to avoid a "base" component because it would be too abstract and lead to prop hell or awkward composition. Good call.

**Best approach:**
- **Extract micro-components** for the truly shared UI bits (e.g., cost display, notes section, divider rows), but keep the "expanded" components as orchestrators.
- Each "expanded" component (`MainItemExpanded`, `HistoryItemExpanded`) composes its own set of micro-components, wiring up only the logic it needs.
- **Hooks:** If you have shared logic (e.g., note editing), extract a hook (`useEditableNote`). But don't force hooks to be shared if the logic is only used in one place.
- **SRP:** Each micro-component should do one thing (e.g., just display cost, just render notes, just render actions). The "expanded" component is responsible for layout and orchestration, not business logic.

**Example micro-components:**
- `ItemCostDisplay`
- `ItemNotesSection` (optionally with edit logic via hook)
- `ItemActionsRow` (customized per expanded type)
- `SectionDivider` (already extracted)

**How to split:**
- If a block is >20 lines or reused, extract it.
- If a block has its own logic (e.g., note editing), extract both a hook and a component.
- Pass only the props needed for each micro-component. No "base" prop bags.

**Hooks:**
- Only extract a hook if the logic is reused or complex (e.g., note editing, toggling state).
- Keep hooks colocated with their main usage unless truly shared.

**No base component:**  
- Avoids over-abstraction, keeps each expanded component focused and easy to reason about.
- Each "expanded" component can evolve independently.

**Summary:**  
- Extract micro-components for shared UI/logic.
- Compose them in each "expanded" component as needed.
- Extract hooks only for shared/complex logic.
- No base "expanded" component—keep orchestration local.

**Speculative tip:**  
If you ever need to add a third "expanded" type, this approach scales: just compose the micro-components you need, no inheritance or prop hell.

Let me know if you want a concrete refactor example or want to see how to split a specific block.
