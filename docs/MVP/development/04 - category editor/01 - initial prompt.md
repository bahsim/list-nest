### Prompt

Act as Lead Designer and
Develop Category Editor on Settings Page @settings-page.tsx
There should be predefined set of colors to bind with groups and set to background for items according to its group
@03 - categories.md @theme-listnest.ts
reword it first

### Result

**Reworded Query:**  
Design and implement a Category Editor on the Settings Page (`settings-page.tsx`). The editor should allow users to manage item categories (e.g., Produce, Bakery, Dairy, Meat, Snacks), each with a predefined color. Users can assign a color to each category, and this color will be used as the background for items belonging to that category throughout the app. Use the color palette from `theme-listnest.ts` and the category logic from `03 - categories.md`.

---

**What you want:**

- A UI on the Settings Page to view/edit categories and their colors.
- Predefined color set (from theme).
- Each category can be assigned a color.
- Items in lists use the category’s color as their background.
- All code in FSD/FCA structure, TypeScript, MUI, SCSS modules.

---

**Next steps (detailed, actionable):**

1. **Define category color constants**  
   In `shared/constants/category-colors.ts` (or similar), export a mapping of color names to hex values, using colors from `theme-listnest.ts`.

2. **Category type**  
   In `shared/types/category.ts`, define a `Category` type with `name` and `color`.

3. **Category Editor UI**  
   In `features/category-editor/`, create:

   - `CategoryEditor.tsx`: List categories, show color, allow color selection (MUI Select/ColorPicker).
   - Use MUI components, SCSS module for styling.

4. **Settings Page Integration**  
   Import and render `CategoryEditor` in `settings-page.tsx`.

5. **Category color usage**  
   In list item card (e.g., `base-list-item-card.tsx`), set background to the category’s color.

---

**Extra:**

- Persist category-color mapping (localStorage or backend).
- Add tests for editor and color assignment.
- Document public APIs.

---

**Let me know if you want code for all steps or just a specific part.**  
Ready to start with step 1?

### Result Step 1

**Done.**  
You now have:
- `CATEGORY_COLORS` and type in `shared/constants/category-colors.ts`
- `Category` type in `shared/types/category.ts`
- `CategoryEditor` feature (UI, color picker, MUI, SCSS)
- `SettingsPage` renders the editor
- `BaseListItemCard` can take a `categoryColor` prop for background

**How to use category color for items:**  
When rendering a list item, pass the color from the category (using the mapping) as `categoryColor` to `BaseListItemCard`.

**Next steps you might want:**
- Persist category-color mapping (localStorage/api)
- Use the mapping in your list rendering logic
- Add tests for the editor and color logic

Want code for persistence or wiring up list items?
