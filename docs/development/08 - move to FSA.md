### Prompt 

Proceed like a Proceed like a 10x lead engineer
So consider implementing FSA in the project. What step to do refactoring might be?

### Result


### Prompt

Let's implement it
Before every step, I need you to give me a summary of the current and what is left
Do not stop working on this until you've implemented this feature fully and completely
Use git bash instead of powershell terminal

### Result

Here’s a high-impact, stepwise refactor plan to start implementing FSA (Feature-Sliced Architecture) in your project, as a 10x lead engineer would do:

---

**1. Establish the FSA Directory Structure**
- At the `src` level, create the canonical FSA layers:  
  - `app/` (entry points, providers, global styles)
  - `processes/` (cross-page flows, e.g., auth, onboarding)
  - `pages/` (route-level components)
  - `widgets/` (composite UI blocks, e.g., header, sidebar)
  - `features/` (business features, e.g., main-list, list-item)
  - `entities/` (domain models, context, logic, e.g., user, item)
  - `shared/` (UI kit, utils, constants, hooks, types, themes)

---

**2. Move Shared Logic and Contexts**
- Move `main-list-context.tsx` and any other cross-feature context, types, or logic to `entities/` (if domain-specific) or `shared/` (if generic).
- Update all imports in features to use the new location.
- If you have domain models (e.g., `MainListItem`), move their types and logic to `entities/item/`.

---

**3. Decouple Features**
- Ensure no feature imports from another feature.  
  - If you find such imports, move the shared code to `entities/` or `shared/`.
- Refactor features to only depend on `entities/` and `shared/`.

---

**4. Modularize UI**
- Move atomic and molecular UI components (buttons, modals, fields) to `shared/ui-kit/`.
- Move composite UI blocks (e.g., list containers, toolbars) to `widgets/`.

---

**5. Update Entry Points**
- Move app-level providers, theme, and router setup to `app/`.
- Move route-level components to `pages/`.

---

**6. Document and Enforce Boundaries**
- Add a `README.md` or architecture doc explaining the FSA structure and dependency rules.
- Optionally, add lint rules or code reviews to enforce no feature-to-feature imports.

---

**Summary:**  
Start by creating the FSA structure, move shared/domain logic to `entities/` or `shared/`, decouple features, modularize UI, and update entry points.  
Do this incrementally—start with the most tangled/shared code (like context), then move on to features and UI.  
This will make your codebase scalable, maintainable, and ready for a big team or rapid growth.
