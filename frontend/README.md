# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# UI Kit (Family Grocery App)

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

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
