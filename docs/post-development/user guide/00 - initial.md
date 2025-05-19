### Prompt 1

Act as an exprienced Lead User Guide Writer
I need create user guide for the frontend
First reword me

 ### Result 1

 You want to create a user guide for the frontend. First, you want me to restate your request in my own words.

Restated:  
You’re asking for a user guide for the frontend part of your project. Before I start writing it, you want me to rephrase your request to confirm my understanding.

Let me know if you want a specific format (e.g., Markdown, PDF, in-app help), target audience (devs, end-users, QA), or if you want it focused on setup, usage, troubleshooting, or all of the above.

---

### Prompt 2

just how to use it, in pdf
there should be a images with screens

### Result 2

You want a user guide (PDF) for the frontend, focused on how to use it, with screenshots of the screens included.

Restated:  
You need a step-by-step usage guide for your frontend, delivered as a PDF, with annotated screenshots for each main screen.

Next steps:
1. I’ll need to know what the main user flows/screens are (or I can infer from the app if you give me access).
2. I’ll generate the text and image placeholders (or real screenshots if you provide them or let me run the app).
3. I’ll assemble everything into a PDF.

Let me know if you want to provide screenshots or want me to generate them. If you want me to run the app and take screenshots, tell me how to start the frontend.

---

### Prompt 3

Aditionally act as a Lead Developer and BA and Project Manager and get all requried information in the project codebase, md-files in @docs @frontend 
So feel free to answer your questions first of all by yourself by gathering required info and sumarizing as result

### Result 3

**App Purpose:**  
ListNest is a GenAI-powered collaborative grocery shopping app for families. It supports manual and AI-suggested items, quantity/price tracking, analytics, and real-time collaboration.

**Main Screens (from `src/pages/`):**
- Main List: Add/edit/remove/mark items, filter by category, use AI suggestions, modal for add/edit.
- History: View past items, filter by date/category, group by date, view item details.
- Settings: Edit categories, (currency/language/reset coming soon).
- Analytics: Placeholder (not implemented yet).

**UI/UX:**
- MUI-based, mobile-friendly, modern, with a bottom nav (FooterNav).
- Uses modals for add/edit/view.
- Category and date filters.
- All main actions are accessible via buttons/icons.

**UI Kit:**  
Reusable components for lists, items, modals, analytics, navigation, etc. (see `ui-kit-reference.md`).

**How to Use (high-level):**
1. Open the app (URL or local run).
2. Main List: Add items, edit, mark as bought, filter by category, use AI suggestions.
3. History: See what you bought, filter by date/category, restore items.
4. Settings: Manage categories.
5. Navigation: Use bottom nav to switch screens.

**Screenshots:**  
You’ll need to run the app and take screenshots of:
- Main List (with items, add modal open)
- History (grouped by date, view modal open)
- Settings (category editor open)
- FooterNav (bottom navigation)

**Next steps:**  
- If you want me to generate the PDF, I’ll need the screenshots (or permission to run the app and take them).
- I can draft the text for each section and provide image placeholders if you want to fill them in later.

Let me know if you want the draft text now, or want to provide/generate screenshots first.
