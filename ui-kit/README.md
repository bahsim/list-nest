# Family Grocery App UI Kit

## Structure

- `ui-kit-reference.md` — Full code-oriented UI Kit reference
- `tokens/` — Design tokens in TS, JS, SCSS
- `components/` — React components (HeaderBar, ShoppingList, ShoppingListItemCard, AddItemForm, etc.)
- `.storybook/` — Storybook config for component previews

## Usage

### Design Tokens
- Import from `tokens/` in your app or stylesheets.
- Use SCSS variables for global styles, or JS/TS exports for JS-in-CSS or theme providers.

### React Components
- Import from `components/`.
- All components are typed and documented.
- If you see linter errors about React imports, add `import * as React from 'react';` to your entry or component (depends on your build setup).

### Storybook
- Run Storybook in this directory to preview and test components:
  ```sh
  npx storybook dev -p 6006
  # or
  npm run storybook
  ```
- Stories are in `components/*.stories.tsx`.

## Notes
- All tokens and components are mapped to the UI Kit reference.
- Extend components as needed for your app.
- If you want more components, tokens, or a Figma mapping, just ask. 