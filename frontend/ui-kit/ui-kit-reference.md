# UI Kit Reference – Family Grocery App

## 1. Brand Assets

### Logo
- **Primary:** `logo.png` ([brandbook dir](../../2%20-%20planning/03%20-%20brandbook/logo.png)), abstract house-in-circle, no background.
- **Variants:** `logo-alt1.png`, `logo-alt2.png` (monochrome, icon-only).
- **Usage:** App header, favicon, splash, app icon.
- **Source:** `03 - brandbook/01 - logo generator.md`, PNGs.

### Color Palette (Design Tokens)
| Name           | Hex      | RGB                | Usage                | Token Name                | Source File |
|----------------|----------|--------------------|----------------------|---------------------------|-------------|
| Coral Red      | #F76C5E  | 247,108,94         | Primary, buttons     | `color-primary`           | 04 - brand style.md, 05 - atomic system.md |
| Sky Blue       | #4A90E2  | 74,144,226         | Secondary, accents   | `color-secondary`         | 04 - brand style.md, 05 - atomic system.md |
| Midnight Navy  | #2A2E35  | 42,46,53           | Text, icons, dark BG | `color-dark`              | 04 - brand style.md, 05 - atomic system.md |
| Golden Yellow  | #F9C74F  | 249,199,79         | Accent, highlights   | `color-accent`            | 04 - brand style.md, 05 - atomic system.md |
| Soft Beige     | #FEF4DB  | 255,246,229        | BG, cards, modals    | `color-bg`                | 04 - brand style.md, 05 - atomic system.md |
| Dark Blue      | #1C394B  | 28,57,75           | Alt. dark, contrast  | `color-dark-alt`          | 02 - brand colors palette.md |
| Cream          | #FBF3DB  | 251,243,219        | Alt. BG, highlights  | `color-bg-alt`            | 02 - brand colors palette.md |
| Coral          | #F17856  | 241,120,86         | Alt. primary         | `color-primary-alt`       | 02 - brand colors palette.md |
| Sage           | #99A49A  | 153,164,154        | Category tag         | `color-category-sage`     | 02 - brand colors palette.md |
| Mauve          | #927A7D  | 146,122,125        | Category tag         | `color-category-mauve`    | 02 - brand colors palette.md |

**Note:** Use CSS custom properties or design tokens for all colors.

### Typography (Design Tokens)
- **Primary Font:** `Quicksand`, fallback: `system-ui, Arial, sans-serif`
  - Use: Body, labels, descriptions.
- **Accent Font:** `Quicksand`, fallback: `system-ui, Arial, sans-serif`
  - Use: Buttons, icons, interactive.
- **Headings:** `Nunito`, fallback: `Quicksand, system-ui, Arial, sans-serif`
  - Use: Titles, hero, key UI.
- **Font Weights:** 300 (Light), 400 (Regular), 700 (Bold)
- **Font Sizes:** 12px (caption), 16/18px (body), 24/32px (heading)
- **Token Names:** `font-primary`, `font-accent`, `font-heading`, `font-size-body`, etc.
- **Source:** `03 - typography.md`, `04 - brand style.md`, `05 - atomic system.md`

### Style Guidelines
- **Tone:** Friendly, clear, encouraging, modern.
- **Imagery:** Flat, minimal, rounded, playful. No corporate stock.
- **Iconography:** Line-based, rounded, navy as base, coral/blue for accent.
- **Motion:** Subtle, e.g., button hover = color darken, shadow pop.
- **Source:** `04 - brand style.md`

---

## 2. Atomic System

### Atoms
- **Color tokens** (see above)
- **Typography tokens** (see above)
- **Button:** Primary (coral), secondary (blue outline), hover = darken/shadow.
- **Input:** Label, rounded input, soft beige BG, light gray placeholder.
- **Checkbox:** Rounded, coral border, sky blue fill on check.
- **Icon:** SVG, line, rounded, navy/coral/blue.
- **Card:** Soft beige BG, icon, title, desc.

### Molecules
- **Input Field:** Label + input + placeholder.
- **Button with Icon:** Icon + label + BG.
- **Checkbox:** Box + checkmark + label.
- **Card:** BG + icon + title + desc.

### Organisms
- **Header:** Logo, nav links, search, profile.
- **Task List:** Card per task, checkbox, add button.
- **Footer:** Nav links, social icons, copyright.

### Templates
- **Home:** Header, hero, tagline, CTA, task list, footer.
- **Task Management:** Header, sidebar (nav, filters), main (task list, add button).

### Pages
- **Home:** Logo, tagline, preview, CTA.
- **Task Management:** View/add/edit/organize tasks, filters.
- **Settings:** Theme, notifications, account.

**Source:** `05 - atomic system.md`

---

## 3. UI Components (with Props, States, Variants, Usage)

### HeaderBar
- **Props:** `user: User`, `onSettings: () => void`
- **States:** None
- **Variants:** None
- **Usage:** Top of every page, logo left, user/profile right, settings icon.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### ShoppingList
- **Props:** `items: ShoppingListItem[]`, `onEdit`, `onDelete`, `onToggleBought`, `onToggleFocus`
- **States:** None
- **Variants:** None
- **Usage:** Main list, each item = ShoppingListItemCard.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### ShoppingListItemCard
- **Props:** `item: ShoppingListItem`, `onEdit`, `onDelete`, `onToggleBought`, `onToggleFocus`
- **States:** `isEditing`, `isHovered`
- **Variants:** Focused, bought, normal
- **Usage:** Shows name, qty, price, category, focus, bought, user avatar, edit/delete.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### AddItemForm
- **Props:** `onAdd: (AddEditItemInput) => void`, `categories: string[]`, `units: string[]`
- **States:** `inputValue`, `quantity`, `unit`, `category`, `isFocused`, `errors`
- **Variants:** None
- **Usage:** Autocomplete, quantity, category, add button.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### AddEditItemModal
- **Props:** `item?: AddEditItemInput`, `onSave`, `onCancel`, `categories`, `units`, `currencies`
- **States:** `fields`, `errors`, `aiSuggestions`
- **Variants:** Add, Edit
- **Usage:** Modal overlay, vertical fields, AI suggestion banner, save/cancel.
- **Source:** `06 - add-edit modal.md`, `add-edit-modal.png`

### AISuggestionButton / AISuggestionCard
- **Props:** `suggestions: AISuggestion[]`, `onSelect`
- **States:** None
- **Variants:** None
- **Usage:** Fetch/generate suggestions, display as cards, click to add.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### PurchasedHistory
- **Props:** `items: HistoryItem[]`, `onRestore`
- **States:** None
- **Variants:** Faded, normal
- **Usage:** Faded cards, restore button.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### AnalyticsPanel
- **Props:** `analytics: HistoryAnalytics`
- **States:** `isCollapsed`
- **Variants:** None
- **Usage:** Collapsible, shows stats, charts.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### ReminderBanner
- **Props:** `reminders: Reminder[]`, `onAdd`
- **States:** None
- **Variants:** None
- **Usage:** Banner, low stock, one-tap add.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### ActivityLog
- **Props:** `activities: Activity[]`
- **States:** `isCollapsed`
- **Variants:** None
- **Usage:** Collapsible/tab, recent actions.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### FooterNav
- **Props:** `activeTab: string`, `onTabChange`
- **States:** None
- **Variants:** None
- **Usage:** Bottom nav, icons for list, analytics, history, settings.
- **Source:** `02 - main list view.md`, `main-list-mobile.png`

### HistoryView
- **Props:** `groups: HistoryGroup[]`, `analytics: HistoryAnalytics`, `onRestore`
- **States:** `search`, `filters`, `expandedGroups`
- **Variants:** None
- **Usage:** Grouped by date, expandable, search, filter, analytics, restore.
- **Source:** `09 - history view.md`, `history-view.png`

---

## 4. Design Tokens

```ts
// colors.ts
export const COLORS = {
  PRIMARY: '#F76C5E',
  SECONDARY: '#4A90E2',
  DARK: '#2A2E35',
  ACCENT: '#F9C74F',
  BG: '#FEF4DB',
  DARK_ALT: '#1C394B',
  BG_ALT: '#FBF3DB',
  PRIMARY_ALT: '#F17856',
  CATEGORY_SAGE: '#99A49A',
  CATEGORY_MAUVE: '#927A7D',
} as const;

// typography.ts
export const FONTS = {
  PRIMARY: '"Quicksand", system-ui, Arial, sans-serif',
  ACCENT: '"Quicksand", system-ui, Arial, sans-serif',
  HEADING: '"Nunito", "Quicksand", system-ui, Arial, sans-serif',
  WEIGHTS: { LIGHT: 300, REGULAR: 400, BOLD: 700 },
  SIZES: { CAPTION: 12, BODY: 16, BODY_LG: 18, HEADING: 24, HERO: 32 },
} as const;

// spacing.ts
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
} as const;

// radii.ts
export const RADII = {
  SM: 4,
  MD: 8,
  LG: 16,
  FULL: 9999,
} as const;

// shadows.ts
export const SHADOWS = {
  CARD: '0 2px 8px rgba(42,46,53,0.08)',
  MODAL: '0 4px 24px rgba(42,46,53,0.16)',
  BUTTON: '0 1px 4px rgba(42,46,53,0.12)',
} as const;
```

---

## 5. Accessibility

- **Contrast:** All text/icons must meet WCAG AA (4.5:1 for normal, 3:1 for large). Test all color combos.
- **Focus:** All interactive elements get visible focus ring (2px, `color-secondary` or `color-accent`).
- **Keyboard:** Full tab/arrow navigation for all forms, lists, modals, history.
- **ARIA:** Use `aria-label`, `aria-modal`, `aria-expanded`, etc. for all custom components.
- **Voice:** Mic icon for voice input/search (see AddEditItemModal, HistoryView).
- **High-Contrast Mode:** Toggle in settings.
- **Error Handling:** Inline errors, role="alert" for error messages.
- **Source:** All UI/UX and sketch markdowns.

---

## 6. Brand/Style

- **Tone:** Friendly, clear, encouraging, modern.
- **Imagery:** Flat, minimal, rounded, playful. No corporate stock.
- **Iconography:** Line-based, rounded, navy as base, coral/blue for accent.
- **Motion:** Subtle, e.g., button hover = color darken, shadow pop.
- **Source:** `04 - brand style.md`

---

## 7. Asset References

| Element                | Source File(s) / PNGs                        |
|------------------------|----------------------------------------------|
| Logo                   | `logo.png`, `logo-alt1.png`, `logo-alt2.png`|
| Color Palette          | `02 - brand colors palette.md`, `04 - brand style.md` |
| Typography             | `03 - typography.md`, `04 - brand style.md` |
| Atomic System          | `05 - atomic system.md`                      |
| Main List View         | `02 - main list view.md`, `main-list-mobile.png`, `main-list-laptop.png` |
| Add/Edit Modal         | `06 - add-edit modal.md`, `add-edit-modal.png` |
| History View           | `09 - history view.md`, `history-view.png`   |
| All UI Sketches        | `03 - ui sketches/` (all PNGs, .mds)         |

---

## 8. Missing/Unclear

- **Logo SVG:** Only PNGs found; SVG or vector preferred for scaling.
- **Some color/typography tokens**: Slight mismatch between brandbook and style guide (e.g., Nunito vs. Quicksand/Quicksand). Clarify which is heading/body/accent.
- **Icon set:** No SVG icon files found, only style guidance.
- **Motion tokens:** No explicit motion tokens, only style notes.
- **Voice input:** No details on speech-to-text API, just UI/UX notes.
- **Category colors:** Only two (sage, mauve) defined; more may be needed for full category set.

---

**If you want this as a markdown file in the UI Kit directory, just say so.**  
If you want code for a specific component, token, or test, name it.  
If you want a Figma/Storybook mapping, say so.  
If you want a full CSS/SCSS/JS token export, say so. 