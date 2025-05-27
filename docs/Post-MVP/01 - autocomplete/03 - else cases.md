## Prompt 

How else should I make easier input for mobile user?
we work with general groups of products - milk, variation is 0,5/1 liter but not necassary, but not with certain brands

## Result

Here’s how to make input as easy as possible for mobile users, given you work with general product groups (not brands):

---

### 1. **One-Tap Suggestions**
- Show a horizontal scrollable list of most common items (chips/buttons) above the keyboard.
- Tap = instantly adds item (optionally with default quantity/unit).

---

### 2. **Smart Autocomplete**
- As user types, show top 3–5 matches in a dropdown.
- Highlight matching part, support typos/aliases.
- Allow “Add custom” if no match.

---

### 3. **Quick Quantity/Unit Picker**
- After item selection, show a small modal or inline picker for quantity/unit (e.g., “0.5 л”, “1 л”, “2 шт”).
- Preselect most common (e.g., “1 л” for milk).
- Allow skipping (default to 1).

---

### 4. **Recent/Frequent Items**
- Show user’s recent or most frequently added items at the top of suggestions.
- Tap to re-add instantly.

---

### 5. **Voice Input**
- Add a mic button for speech-to-text (native mobile API).
- Parse result and match to product list.

---

### 6. **Barcode/Photo Scan (Optional)**
- For advanced: allow barcode or photo scan to suggest product group (not brand).

---

### 7. **Minimal Taps**
- Default to “add” on Enter/Done key.
- Allow swipe-to-delete/edit in the list.

---

### 8. **Big Touch Targets**
- All buttons/chips at least 44x44px for easy tapping.

---

### 9. **Localized Keyboard**
- Use `inputmode="text"` and `autocomplete="on"` for product name.
- For quantity: `inputmode="decimal"`.

---

### 10. **No Required Brand/Details**
- Only ask for product group and (optionally) quantity/unit.
- Never require brand, package, or extra details.

---

**Summary:**  
- One-tap chips for common items  
- Smart, typo-tolerant autocomplete  
- Quick quantity/unit picker  
- Recent/frequent items  
- Voice input  
- Minimal required fields, big touch targets

If you want a UI wireframe or code for any of these, just say so.
