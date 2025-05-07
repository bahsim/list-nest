### Prompt

Act as a Senior Business Analyst with ability of using Gen AI

As a Senior Software Developer what approach should I choose to gather requirements and develop User Stories in BA style with only GenAI tools and without advanced skills in BA?
Propose how can we do it forMVP to provide deveopers
Consider all information in the project
Analyze and learn all md files in the project and be specific
I have all Exalidraw screens exported in PNG files

Define all requirments to start developing design for MVP
Take in account what is defined all ready throughout the project
There is a logo logo.png  
There is a brand colors palette @02 - brand colors palette.md 
There is a font stack@03 - typography.md 
There is a brand style @04 - brand style.md 
There is a atomic system @05 - atomic system.md 
There are sketches with UI details@03 - ui sketches 

Most of requited assets is exits - be accurant

### Result

You want a BA-style, GenAI-powered approach to gather requirements and write user stories for the MVP, using only the assets and docs you already have (logo, color palette, font stack, brand style, atomic system, and detailed UI sketches in PNG/MD). You want a specific, actionable requirements list and a process for generating user stories, so devs can start building the MVP design.

Here’s the direct answer, with no fluff:

---

## 1. Approach: GenAI-Driven BA Requirements & User Stories

- **Input all assets**: Feed your PNG UI screens, all brand/atomic docs, and any existing requirements into your GenAI tool (e.g., ChatGPT, Claude, Gemini).
- **Prompt for extraction**: Use prompts like “Extract all functional and non-functional requirements from these UI screens and docs. List them in BA format.”
- **Prompt for user stories**: “Write user stories in the format: As a [role], I want [feature], so that [benefit], based on the extracted requirements and UI screens.”
- **Iterate**: Refine prompts to get more granular stories, acceptance criteria, and edge cases.
- **Review & validate**: Manually check for gaps, ambiguities, or missing flows. Use the UI sketches as the source of truth for flows and edge cases.

---

## 2. Specific Requirements for ListNest MVP (from your assets)

### Functional Requirements

- **User can view the main task list** (see “main-list-mobile.png”, “main-list-laptop.png”)
- **User can add a new task** (see “add-edit-modal.png”, add/edit modal MDs)
- **User can edit an existing task**
- **User can delete a task**
- **User can mark a task as completed**
- **User can view task history** (see “history-view.png”, history view MDs)
- **User can filter/sort tasks** (if shown in UI)
- **User can see error, empty, and loading states** (see relevant MDs/sketches)
- **User can access settings** (theme, notifications, account, if present in UI)
- **Responsive UI**: Works on mobile and desktop (see both PNGs)

### Non-Functional Requirements

- **Branding**: Use only logo.png, brand colors, and font stack as per docs
- **Atomic design**: All UI built from atomic system (atoms → molecules → organisms → templates → pages)
- **Accessibility**: Contrast, font size, tap targets per brand style
- **Performance**: Fast load, smooth transitions
- **Consistency**: All components match brand style and atomic system

### Assets/Inputs

- **Logo**: logo.png
- **Colors**: 02 - brand colors palette.md
- **Fonts**: 03 - typography.md
- **Brand style**: 04 - brand style.md
- **Atomic system**: 05 - atomic system.md
- **UI sketches**: 03 - ui sketches (PNGs + MDs)

---

## 3. User Stories (BA Style, MVP)

- As a **user**, I want to **view my main task list**, so that I can see all my current tasks.
- As a **user**, I want to **add a new task**, so that I can track new items.
- As a **user**, I want to **edit a task**, so that I can update details.
- As a **user**, I want to **delete a task**, so that I can remove items I no longer need.
- As a **user**, I want to **mark a task as completed**, so that I can track progress.
- As a **user**, I want to **view my task history**, so that I can see what I’ve done.
- As a **user**, I want to **filter or sort tasks**, so that I can organize my list.
- As a **user**, I want to **see clear error, empty, and loading states**, so that I know what’s happening.
- As a **user**, I want the app to **look and feel consistent with the ListNest brand**, so that it’s familiar and professional.
- As a **user**, I want the app to **work on both mobile and desktop**, so that I can use it anywhere.

**(Add more based on any extra features in the UI sketches.)**

---

## 4. Acceptance Criteria (Example for “Add Task”)

- “Add” button is visible on main list view
- Clicking “Add” opens modal with input fields (see add-edit-modal.png)
- User can enter task details and save
- New task appears in main list
- Validation: Required fields, error messages shown as per brand style
- Modal closes on save or cancel

---

## 5. Process/Checklist for GenAI-Driven BA Work

1. **Gather all assets** (logo, colors, fonts, brand style, atomic system, UI PNGs/MDs)
2. **Prompt GenAI** to extract requirements and user stories from UI and docs
3. **Review and refine**: Check for missing flows, edge cases, and acceptance criteria
4. **Export**: Save requirements and user stories in a dev-friendly format (Markdown, Notion, Jira, etc.)
5. **Handoff**: Share with devs alongside UI assets and atomic system

---

## 6. What’s Missing/To Confirm

- Confirm all MVP features/screens (main, add/edit, history, error/empty/loading, settings)
- Confirm if any user roles beyond “user” (e.g., admin)
- Confirm if dark mode is in scope
- Confirm export/handoff format (Jira, Markdown, Notion, etc.)

---

**Summary:**  
You have almost everything. Use GenAI to extract and write requirements/user stories from your UI sketches and docs. Validate against the UI, atomic system, and brand style. Export in a dev-friendly format. You’re ready to go.

If you want a prompt template for GenAI, or a user story/acceptance criteria template, just ask.
