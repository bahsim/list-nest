## **Brand & Visual Identity**

### **Logo**
- Circular logo with a house/nest motif.
- Variants: full color, monochrome, icon-only.
- Used in app header, favicon, splash, app icon.

---

### **Color Palette**
| Name           | Hex      | RGB                | Usage                | Token Name                |
|----------------|----------|--------------------|----------------------|---------------------------|
| Coral Red      | #F76C5E  | 247,108,94         | Primary, buttons     | `color-primary`           |
| Sky Blue       | #4A90E2  | 74,144,226         | Secondary, accents   | `color-secondary`         |
| Midnight Navy  | #2A2E35  | 42,46,53           | Text, icons, dark BG | `color-dark`              |
| Golden Yellow  | #F9C74F  | 249,199,79         | Accent, highlights   | `color-accent`            |
| Soft Beige     | #FEF4DB  | 255,246,229        | BG, cards, modals    | `color-bg`                |
| Dark Blue      | #1C394B  | 28,57,75           | Alt. dark, contrast  | `color-dark-alt`          |
| Cream          | #FBF3DB  | 251,243,219        | Alt. BG, highlights  | `color-bg-alt`            |
| Coral          | #F17856  | 241,120,86         | Alt. primary         | `color-primary-alt`       |
| Sage           | #99A49A  | 153,164,154        | Category tag         | `color-category-sage`     |
| Mauve          | #927A7D  | 146,122,125        | Category tag         | `color-category-mauve`    |

- **All colors are available as CSS custom properties, SCSS variables, and TS constants.**
- **No color is used as the only means of conveying information.**

---

### **Typography**
- **Primary Font:** Nunito (headings, titles, key UI)
- **Secondary/Accent Font:** Quicksand (body, labels, buttons, icons, interactive)
- **Font Weights:** 300 (Light), 400 (Regular), 700 (Bold)
- **Font Sizes:** 12px (caption), 16/18px (body), 24/32px (heading)
- **Font tokens:** `font-primary`, `font-accent`, `font-heading`, `font-size-body`, etc.
- **Fonts loaded from Google Fonts.**

---

### **Iconography**
- Line-based, rounded edges.
- Colors: Midnight Navy (base), Coral Red/Sky Blue (accents).
- All icons are line-based, rounded, and use navy/coral/blue.

---

### **Imagery**
- Flat, minimal, rounded, playful.
- No corporate stock.
- Illustrations: use brand palette, rounded shapes.

---

### **Motion**
- Subtle, e.g., button hover = color darken, shadow pop.
- All interactive elements have subtle motion/animation.

---

### **Tone of Voice**
- Friendly, clear, encouraging, modern.
- Speak to users as a helpful companion, not a formal assistant.
- Motivate users to stay organized and productive.
- Avoid jargon; use everyday terms.

---

### **Tagline**
- "Nest Your Lists, Simplify Your Life."

---

### **Brand Personality**
- Modern, approachable, organized.

---

## **UI/UX Design System**

### **Atomic Design**
- **Atoms:** Colors, typography, button, input, checkbox, icon, card.
- **Molecules:** Input field, button with icon, checkbox, card.
- **Organisms:** Header, task list, footer.
- **Templates:** Home, task management.
- **Pages:** Home, task management, settings.

---

### **Component States & Variants**
| Component             | State/Variant         | Description/Usage                        |
|-----------------------|----------------------|------------------------------------------|
| HeaderBar             | —                    | Static                                   |
| ShoppingList          | —                    | Static                                   |
| ShoppingListItemCard  | isEditing            | Edit mode                                |
|                       | isHovered            | Mouse hover                              |
|                       | Focused              | Highlighted/focused item                 |
|                       | Bought               | Marked as bought                         |
| AddItemForm           | isFocused            | Input focused                            |
|                       | errors               | Validation error                         |
| AddEditItemModal      | Add                  | Add mode                                 |
|                       | Edit                 | Edit mode                                |
|                       | aiSuggestions        | AI suggestions visible                   |
| FooterNav             | activeTab            | Current tab highlighted                  |
| ReminderBanner        | —                    | Static                                   |
| AISuggestionButton    | —                    | Static                                   |
| AISuggestionCard      | —                    | Static                                   |
| PurchasedHistory      | Faded                | Item is faded (archived)                 |
| AnalyticsPanel        | isCollapsed          | Collapsed/expanded                       |
| ActivityLog           | isCollapsed          | Collapsed/expanded                       |
| HistoryView           | search, filters      | Search/filter active                     |
|                       | expandedGroups       | Group expanded/collapsed                 |
| SettingsPanel         | theme                | Light/dark mode                          |
| UserProfileDropdown   | —                    | Static                                   |

---

### **Content Guidelines**
- **General:** Clear, concise, friendly language. Use placeholder text where real data is not available.
- **Main List:** Title: "My Shopping List", realistic item names, common units/categories, button labels: "Add", "Edit", "Delete", "Mark as Bought", empty state: "No items yet. Add your first item!"
- **Add/Edit Modal:** Field labels: "Item Name", "Quantity", "Unit", "Category", placeholder: "e.g., Apples", error: "Please enter a valid item name."
- **History:** Title: "Purchase History", restore button: "Restore"
- **Settings:** Titles: "Theme", "Notifications", "Account", toggles: "Enable Dark Mode", "Email Notifications"
- **Analytics:** Title: "Your Shopping Stats", chart labels: "Total Spent", "Most Bought Items"
- **Use realistic sample data everywhere**

---

### **Layout & Spacing Guidelines**
- **Grid:** 8pt base, max width 1200px, 12 columns (desktop), 4 (mobile), gutter 16px
- **Spacing tokens:** XS: 4px, SM: 8px, MD: 16px, LG: 24px, XL: 32px
- **Breakpoints:** Mobile: 0–599px, Tablet: 600–1023px, Desktop: 1024px+
- **Section spacing:** 32px vertical (desktop), 24px (mobile), 16px between cards/items
- **Alignment:** left-aligned except centered hero/CTA
- **Use spacing tokens for all margin/padding**

---

### **Component/Theme Specifics**
- **MUI theme overrides:** AppBar, IconButton, Divider (see `theme-listnest.ts`)
- **Main background:** var(--color-bg) (#FEF4DB)
- **Empty state accent:** var(--color-accent) (#F9C74F)
- **FooterNav:** fixed, full width, z-index 10

---

## **Design Tokens (TS/SCSS/CSS)**
- **Colors:** See above palette, available as CSS vars, SCSS, and TS constants.
- **Fonts:** See above, available as SCSS and TS constants.
- **Spacing:** XS: 4, SM: 8, MD: 16, LG: 24, XL: 32
- **Radii:** SM: 4, MD: 8, LG: 16, FULL: 9999
- **Shadows:** Card: 0 2px 8px rgba(42,46,53,0.08), Modal: 0 4px 24px rgba(42,46,53,0.16), Button: 0 1px 4px rgba(42,46,53,0.12)

---

## **Accessibility**
- WCAG AA contrast (4.5:1 normal, 3:1 large)
- Visible focus ring (2px, color-secondary/accent)
- Keyboard navigation for all forms/modals
- ARIA roles/labels for all custom components
- Alt text or aria-label for all images/icons
- Error messages use `role="alert"`
- High-contrast mode toggle in settings
- Voice input/search accessible
- No color as sole info carrier
- Screen reader tested (NVDA, VoiceOver, etc.)

---

## **Brand/Style Compliance Checklist**
- Only defined brand colors/tokens
- Typography matches font stack, weights, sizes
- Icons: line-based, rounded, navy/coral/blue
- Imagery: flat, minimal, playful (no stock)
- Buttons: correct color, radius, hover/active
- Cards/modals: soft beige/defined backgrounds
- Spacing/radii: use tokens
- Tone: friendly, clear, modern
- Subtle motion/animation for interactive elements
- Style review before handoff

---

## **Design Handoff**
- **Tokens:** `/ui-kit/tokens/colors.ts`, `typography.ts`, `spacing.ts`, `radii.ts`, `shadows.ts`
- **Assets:** logo(s), Excalidraw PNGs
- **Component mapping:** see `screen-component-mapping.md`, `component-states-variants.md`
- **Layout/Spacing:** see `layout-guidelines.md`
- **Content:** see `content-guidelines.md`
- **Accessibility:** see `accessibility-checklist.md`
- **Brand/Style:** see `brand style.md`, `atomic system.md`
- **Storybook:** `/ui-kit/.storybook/`
- **Annotated screens:** overlays on Excalidraw PNGs
- **Contact:** ping design/dev lead

---

## **GenAI Workflow**
- Use GenAI for: screen-to-component mapping, content generation, accessibility review, annotated screens, documentation, iteration
- Prompts and process for each step included

---

**If you want the full text of any file, or a specific format (like a checklist, JSON, or Figma tokens), just say so.**
