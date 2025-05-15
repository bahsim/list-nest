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

---

# Feature-Sliced Architecture (FSA/FCA)

## Directory Structure

```
frontend/src/
  app/         # App entry, providers, global styles
  pages/       # Route-level components (one per route)
  processes/   # Cross-feature flows (e.g., auth, onboarding)
  widgets/     # Composite UI blocks (header, sidebar, etc.)
  features/    # Business features (main-list, list-item, etc.)
  entities/    # Domain models, context, logic (user, item, etc.)
  shared/      # UI kit, utils, constants, hooks, types, themes
```

## Slice Responsibilities
- **app/**: Only entry points, providers, and global setup.
- **pages/**: Only route-level components, no business logic.
- **processes/**: Orchestrate flows across features/entities.
- **widgets/**: Composite UI blocks, no business logic.
- **features/**: Feature logic/UI, no cross-feature imports.
- **entities/**: Domain logic, types, context, no business logic.
- **shared/**: UI kit, design system, utils, constants, types, themes.

## Import Rules
- Only import from another slice's public API (index.ts or public-api.ts).
- No cross-boundary imports (e.g., features → widgets, features → features).
- No business logic in UI components.
- All atomic/molecular UI in shared/ui-kit.
- All domain types/context in entities/ or shared/.

## Enforcement
- Use ESLint import rules to block cross-slice imports.
- Code review: check for public API usage and correct slice boundaries.
- All new UI components must have a Storybook story.

## Adding New Code
- Place new features in features/ and expose only via index.ts.
- Place new domain models/types in entities/.
- Place new UI atoms/molecules in shared/ui-kit/.
- Only import from public API of other slices.

---

For more, see [feature-sliced.design](https://feature-sliced.design/) or the docs/development/08 - move to FSA.md.

---

## Enforcing FSA/FCA Boundaries with ESLint

To prevent cross-slice imports and enforce public API usage, use [eslint-plugin-boundaries](https://github.com/SonarSource/eslint-plugin-boundaries):

1. Install:
   ```sh
   npm install --save-dev eslint-plugin-boundaries
   ```
2. Add to your ESLint config:
   ```js
   // .eslintrc.js
   module.exports = {
     plugins: ['boundaries'],
     rules: {
       'boundaries/element-types': [2, {
         default: 'disallow',
         rules: [
           { from: 'features', allow: ['entities', 'shared', 'features'] },
           { from: 'entities', allow: ['shared', 'entities'] },
           { from: 'widgets', allow: ['features', 'entities', 'shared', 'widgets'] },
           { from: 'app', allow: ['pages', 'processes', 'widgets', 'features', 'entities', 'shared', 'app'] },
           { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared', 'pages'] },
           { from: 'shared', allow: ['shared'] },
         ],
       }],
       'boundaries/no-private': [2, {
         allowUncles: false,
         allowSamePath: true,
       }],
     },
     settings: {
       'boundaries/elements': [
         { type: 'features', pattern: 'src/features/*' },
         { type: 'entities', pattern: 'src/entities/*' },
         { type: 'widgets', pattern: 'src/widgets/*' },
         { type: 'processes', pattern: 'src/processes/*' },
         { type: 'pages', pattern: 'src/pages/*' },
         { type: 'app', pattern: 'src/app/*' },
         { type: 'shared', pattern: 'src/shared/*' },
       ],
     },
   };
   ```
3. Run ESLint to check for violations:
   ```sh
   npx eslint .
   ```

This will block cross-slice imports and enforce public API boundaries as described above.
