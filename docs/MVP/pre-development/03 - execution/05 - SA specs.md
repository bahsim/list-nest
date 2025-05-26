### Prompt 

As a Senior Prompt Engineer, prepare a prompt to gather screens related information in one place - list sources for Solution Architect
Example @02 - main list view.md @06 - add-edit modal.md @09 - history view.md  
"Act as a Solution Architect"

### Result

Prompt for Solution Architect: Gather All UI Screens Information

Act as a Solution Architect. Your task is to collect and centralize all information about the UI screens for this project. For each screen, provide:

- The screen name and a concise description.
- The source file(s) where its breakdown, data model, and UI/UX details are documented.
- A summary of the main interactive elements, data points, and user flows for each screen.
- Any anticipated backend/API or service needs mentioned for that screen.

List each screen in the following format:

1. **Screen Name:**  
   - **Description:**  
   - **Source(s):** `@<filename>.md`
   - **Key Elements:**  
     - [List of main UI components, interactions, and data points]
   - **Anticipated Needs:**  
     - [APIs, services, or backend requirements]

Example:

1. **Main List View**
   - **Description:** The primary shopping list interface for users to add, edit, and manage items.
   - **Source(s):** `@02 - main list view.md`
   - **Key Elements:**
     - ShoppingListItemCard, AddItemForm, PurchasedHistory, AnalyticsPanel, etc.
     - Interactions: add/edit/remove item, mark as bought, restore purchased, AI suggestions, etc.
   - **Anticipated Needs:**
     - WebSocket/Realtime API, Autocomplete API, AI Suggestion Service, Analytics Service, Notification/Reminder Service, Role-based access, Unit/E2E tests

2. **Add/Edit Item Modal**
   - **Description:** Modal for adding or editing a shopping list item, with validation and AI suggestions.
   - **Source(s):** `@06 - add-edit modal.md`
   - **Key Elements:**
     - ItemNameInput, QuantityInput, UnitDropdown, CategoryDropdown, FocusToggle, AISuggestionBanner, etc.
     - Interactions: autocomplete, voice input, validation, save/cancel, AI autofill, etc.
   - **Anticipated Needs:**
     - Autocomplete API, AI Suggestion Service, Speech-to-text, Validation logic, Test coverage

3. **History View**
   - **Description:** View for browsing and restoring previously purchased items, with analytics.
   - **Source(s):** `@09 - history view.md`
   - **Key Elements:**
     - SearchBar, FilterBar, HistoryList (grouped by date), AnalyticsSummaryPanel, RestoreButton, etc.
     - Interactions: search/filter, expand/collapse groups, restore item, analytics panel, back navigation, etc.
   - **Anticipated Needs:**
     - History API, Analytics Service, Voice search, Expand/collapse logic, Restore confirmation, Unit/E2E tests

Repeat for all other screens.  
List all sources as `@<filename>.md` for easy reference.  
Be exhaustive and terse.  
Output in markdown.
