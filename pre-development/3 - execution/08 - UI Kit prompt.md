### Prompt

As a Senior Prompt Engineer, prepare a prompt to create UI Kit
Take in account what is defined all ready throughout the project
Most of requited assets is exits - be accurant
Consider all information in the project
Analyze and learn all md files in the project and be specific
I have all Exalidraw screens exported in PNG files

Sources
pre-development\3 - execution\07 - SA specs.md
There is a logo logo.png  
There is a brand colors palette @02 - brand colors palette.md 
There is a font stack@03 - typography.md 
There is a brand style @04 - brand style.md 
There is a atomic system @05 - atomic system.md 
There are sketches with UI details@03 - ui sketches 


"Act as a UI Kit expert senior creator/ developer"

### Result

Prompt for UI Kit Creation (for Solution Architect/Dev Handoff)

Act as a UI Kit expert senior creator/developer.

Your task:  
Aggregate and specify all UI Kit assets, design tokens, and reusable components for the family grocery app, using the following sources and all relevant project information:

Sources:
- pre-development\3 - execution\07 - SA specs.md
- logo.png
- @02 - brand colors palette.md
- @03 - typography.md
- @04 - brand style.md
- @05 - atomic system.md
- @03 - ui sketches (Exalidraw PNGs and notes)
- All other relevant .md files in the project

Instructions:
- Analyze all provided markdown files and assets for existing definitions, styles, and UI patterns.
- For each UI Kit element, extract and summarize:
  - Brand assets: logo, color palette (with hex/RGB/usage), font stack (with weights, fallbacks, usage), and style guidelines.
  - Atomic system: list atoms, molecules, organisms, templates, and pages as defined; include code-level structure and naming conventions.
  - UI components: for each, specify props, states, variants, and usage notes; reference sketches and PNGs for visual details.
  - Design tokens: colors, typography, spacing, radii, shadows, etc. (with code-ready names/values).
  - Accessibility: document contrast, focus, keyboard, and ARIA requirements.
  - Brand/style: summarize tone, imagery, iconography, and motion guidelines.
  - Asset references: for each element, list the source file(s) and PNG/sketch references.
- Be specific and code-focused; avoid generic advice.
- Output should be ready for dev handoff, with clear mapping from design to code.
- Highlight any missing assets or ambiguities for follow-up.

Goal:  
Deliver a single, comprehensive, code-oriented UI Kit reference, fully aligned with the project’s brand, atomic system, and existing assets, to accelerate UI development and ensure consistency.

---
Restated:  
You want a prompt that instructs a UI Kit expert to analyze all project markdowns and assets, extract and specify every relevant UI Kit element (brand, tokens, atomic components, etc.), and output a dev-ready, code-focused reference, with all sources and PNGs mapped, and no generic advice.

Put result in the directory pre-development\3 - execution\08 - UI Kit