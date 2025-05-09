# Design Tokens – Single Source of Truth

- Use `/ui-kit/tokens/*.ts` as the canonical source for all design tokens (colors, spacing, typography, radii, shadows).
- Do not edit JS/SCSS token files directly; generate them from the TS source if needed.
- Reference tokens in all components and styles via TypeScript imports.
- Example:
```ts
import { COLORS, SPACING, FONTS } from '../../tokens';
```
- Update tokens in TypeScript, then sync to other formats (SCSS, JSON) as needed for build tools. 