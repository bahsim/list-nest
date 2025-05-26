### Prompt

Prepare enriched user story according to best practices
- As a **user**, I want to **view my main task list**, so that I can see all my current tasks.

### Result

**User Story:**  
As a **user**, I want to **view my main task list**, so that I can see all my current tasks.

---

**Acceptance Criteria:**
1. The main list view displays all current tasks/items in a scrollable, responsive list.
2. Each task shows: name, quantity, estimated price, category, focus/star status, bought/checkbox, user avatar, edit and delete icons.
3. The list is viewable and fully functional on both mobile and desktop devices.
4. The list updates in real time after add, edit, or delete actions.
5. Tasks can be filtered and sorted (e.g., by due date, priority, category).
6. Empty state is shown if there are no tasks.
7. Bulk actions (e.g., select multiple, delete) are available if more than one task exists.
8. The list persists between sessions (local storage or backend).
9. Accessibility: All list elements are keyboard navigable and have appropriate ARIA labels.
10. Marking a task as bought moves it to the purchased history section.
11. The UI matches the brand’s color palette, typography, and atomic design system.

---

**Test Cases:**
- Given a user with tasks, when they open the main list view, then all tasks are displayed with correct fields and actions.
- Given no tasks, when the user opens the main list view, then an empty state message is shown.
- Given multiple tasks, when the user selects a sort/filter, then the list updates accordingly.
- Given a task, when the user marks it as bought, then it disappears from the main list and appears in purchased history.
- Given a session reload, when the user returns, then the list state is preserved.

---

**Notes:**
- Real-time updates must support multi-user collaboration.
- All UI/UX must comply with the atomic system and brand guidelines.
- Edge cases: very long lists (pagination/infinite scroll), offline mode, error/loading states.

---

**To Clarify:**
- What bulk actions are required?
- Are there any limits on the number of tasks?
- Any special accessibility or animation requirements?
