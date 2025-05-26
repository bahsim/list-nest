### Prompt

Act as a Senior Designer with ability of using Gen AI

As a Senior Software Developer what approach should I choose to develop design with only GenAI tools and without advanced skills in UI/UX?
Propose how can we develop design for MVP to provide deveopers with it
Consider all information in the project
Analyze and learn all md files in the project and be specific
I have all Exalidraw screens exported in PNG files

### Result

```
Read file: pre-development/2 - planning/02 - MVP scope.md
Read file: pre-development/2 - planning/03 - sketch UI-UX.md
Read file: pre-development/3 - execution/03 - design reqs.md
Read file: pre-development/3 - execution/03 - mvp sprint 1.md
Read file: pre-development/2 - planning/05 - plan iterations.md
Read file: pre-development/3 - execution/01 - next steps.md
Read file: pre-development/2 - planning/04 - project repo.md
Read file: pre-development/01 - discovery/03 - tech stack.md
Read file: pre-development/01 - discovery/01 - app idea v2.md
Read file: pre-development/01 - discovery/02 - naming.md
Read file: pre-development/2 - planning/01 - next steps.md
```

You want a concrete, step-by-step approach for developing an MVP design using only GenAI tools (no advanced UI/UX skills), with Excalidraw PNGs as your starting point, and you want it tailored to your project context (ListNest, GenAI-powered grocery app). Here’s the direct, actionable plan:

---

**1. Prep: Gather All Inputs**
- Collect all Excalidraw PNGs (screens/flows).
- Have your markdown docs handy (MVP scope, user stories, requirements, etc.).

---

**2. Use GenAI for Design Extraction & Enhancement**
- Use a GenAI tool that can process images (e.g., GPT-4 Vision, Claude, Gemini, or a specialized Figma plugin like Magician or Galileo AI).
- For each PNG:
  - Upload the PNG and prompt:  
    “Extract all UI components, layout, and flows from this wireframe. Output as a Figma/JSON/HTML structure. Annotate with component names and states.”
  - If the tool supports it, ask for:
    - Color/typography suggestions (based on accessibility and your brand, or just “neutral, modern, readable”).
    - Component breakdown (Button, Input, Modal, List, etc.).
    - Mobile-first layout, then desktop adaptation.

---

**3. Generate a UI Kit and Component Library**
- Use GenAI to generate a UI kit:
  - Prompt:  
    “Based on the extracted components, generate a minimal UI kit: color palette, font stack, spacing, button/input states. Output as Figma tokens or CSS variables.”
- Ask for atomic components (Button, Input, Checkbox, Modal, ListItem) with all states (default, hover, active, disabled, error).
- If you want, ask for MUI-compatible code snippets for each component.

---

**4. Generate High-Fidelity Screens**
- For each user story/flow (from your markdowns), prompt GenAI:
  - “Generate a high-fidelity screen for [Add Item Modal/Main List/History], using the UI kit and component library above. Annotate with specs (margins, font sizes, etc.) and interaction notes (e.g., ‘mark as bought = strikethrough + fade’).”
- Export screens as Figma files, or if not possible, as PNG/SVG with a JSON/CSS spec.

---

**5. Export Assets**
- Ask GenAI to export all icons/images as SVG/PNG, organized by usage.
- If you need a logo, prompt:  
  “Generate a simple, friendly logo for ‘ListNest’ (cozy, collaborative, grocery theme).”

---

**6. Create a Design Handoff Doc**
- Use GenAI to draft a 1-pager:
  - Figma/asset links
  - List of components/screens
  - Interaction notes
  - Contact for questions

---

**7. Review & Iterate**
- Review GenAI outputs for obvious errors or weirdness.
- If something’s off, re-prompt with corrections (“Make buttons bigger”, “Use higher contrast”, etc.).
- Minimal manual tweaks in Figma or MUI code if needed.

---

**8. Deliver to Devs**
- Provide:
  - Figma file (or PNGs + JSON/CSS if no Figma)
  - Assets folder (SVG/PNG)
  - Handoff doc

---

**Tips:**
- Don’t overthink branding—use defaults or ask GenAI for “neutral, modern, accessible.”
- Focus on clarity and consistency, not pixel-perfection.
- If you want code, ask GenAI to output MUI/React code for each component.

---

**Summary:**  
You can go from Excalidraw PNGs to a dev-ready design using GenAI for extraction, enhancement, and asset generation. No advanced UI/UX skills needed—just prompt, review, and hand off. This fits your MVP scope, user stories, and process exactly.

If you want prompt templates for any step, or a list of GenAI tools/plugins that work best for this, just ask.
