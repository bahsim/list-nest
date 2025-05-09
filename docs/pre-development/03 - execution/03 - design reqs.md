### Prompt

Act as a Senior Designer with ability of using Gen AI

As a Senior Software Developer what approach should I choose to develop design with only GenAI tools and without advanced skills in UI/UX?
Propose how can we develop design for MVP to provide deveopers with it
Consider all information in the project
Analyze and learn all md files in the project and be specific
I have all Exalidraw screens exported in PNG files

Define all requirments to start developing design for MVP
Take in account what is defined all ready throughout the project
There is a logo @logo.png  
There is a brand colors palette @02 - brand colors palette.md 
There is a font stack@03 - typography.md 
There is a brand style @04 - brand style.md 
There is a atomic system @05 - atomic system.md 

### Result

Here’s a full, specific requirements list to start developing the MVP design for ListNest, using everything already defined in your project:

---

**1. Inputs/Assets You Already Have**
- **Logo:** `logo.png` (use as primary app and favicon, see brand style for usage rules)
- **Brand Colors:** See `02 - brand colors palette.md` (use only these for UI, backgrounds, accents, etc.)
- **Font Stack:** See `03 - typography.md` (Inter for main text, Quicksand for accents/buttons)
- **Brand Style:** See `04 - brand style.md` (follow all logo, color, icon, imagery, and tone guidelines)
- **Atomic System:** See `05 - atomic system.md` (use atomic design for all UI components, from atoms to pages)

---

**2. What You Must Produce**
- **UI Kit:**  
  - Color tokens (from palette)
  - Font tokens (from typography)
  - Spacing, border radius, shadow tokens (consistent with brand style)
  - Button, input, checkbox, modal, card, icon atoms (all states: default, hover, active, disabled, error)
- **Component Library:**  
  - Molecules: input fields, button+icon, checkbox+label, card
  - Organisms: header, task list, footer, modals
- **Screen Templates:**  
  - Home page (logo, tagline, preview list, CTA)
  - Task management (main list, add/edit modal, history, error/empty/loading states)
  - Settings (theme, notifications, account)
- **Assets:**  
  - Export logo and all icons as SVG/PNG
  - Use only brand colors and icon style (line-based, rounded)
- **Design Handoff Doc:**  
  - Figma (or PNG+specs) with all screens, components, and redlines
  - Asset folder (SVG/PNG)
  - 1-pager: links, component list, interaction notes, contact

---

**3. Process/Checklist**
- Use atomic design system for all UI (atoms → molecules → organisms → templates → pages)
- Use only defined brand colors and fonts
- Follow brand style for all visual/interaction choices
- Annotate all screens with specs (margins, font sizes, color codes, etc.)
- Document all component states and interactions (e.g., “mark as bought = strikethrough + fade”)
- Ensure accessibility (contrast, font size, tap targets)
- Mobile-first, then desktop
- Export all assets and screens in dev-friendly formats (SVG, PNG, Figma, or JSON/CSS if code-first)
- Prepare a handoff doc with everything devs need (see above)

---

**4. What’s Missing/To Confirm**
- Confirm list of MVP screens (main, add/edit, history, error/empty/loading)
- Confirm if you want dark mode (brand style supports it)
- Confirm export format (Figma, PNG+specs, or code)
- Confirm review/handoff process (who signs off, where assets/docs live)

---

**Summary:**  
You have all the core brand/design assets and a full atomic system. Just build the UI kit, component library, and MVP screens using only those assets and rules, document everything, and hand it off in a dev-friendly format. No guessing, no off-brand stuff—just assemble and annotate.

If you want a checklist template or Figma starter structure, just say so.
