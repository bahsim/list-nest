### Prompt

Act as a Senior Business Analyst with experience in digital product delivery and user story writing.
You are given:
A detailed, structured requirements list (see @04 - extraction.md)
A full set of UI screens and flows (PNGs and Markdown, see @01 - extraction.md for asset list)
Task:
Analyze all requirements and UI screens.
Write user stories in the format: As a [role], I want [feature], so that [benefit].
Base each story on the extracted requirements and UI screens.
Be specific and actionable.
Group stories by feature or area (e.g., Task List, Add/Edit Modal, History View, Branding, Accessibility, etc.).
For each story, add at least one acceptance criterion in Gherkin style (Given/When/Then) or clear bullet points.
If you find missing or ambiguous requirements, flag them as “To Clarify.”
Output only the user stories and acceptance criteria—no explanations or summaries.
Feed this prompt, the requirements from @04 - extraction.md, and the asset list from @01 - extraction.md into GenAI.
You’ll get a dev-ready, actionable user story set for your MVP.

### Result

Task List

User Story 1  
As a user, I want to view a list of all my tasks, so that I can see what needs to be done.

Acceptance Criteria:
- Given I am on the main list view, When I open the app, Then I see all existing tasks displayed in a list.
- Each task shows its title, status, and due date.

User Story 2  
As a user, I want to mark a task as completed, so that I can track my progress.

Acceptance Criteria:
- Given a task is displayed, When I click the complete button, Then the task is marked as completed and visually updated.

User Story 3  
As a user, I want to filter tasks by status (active/completed), so that I can focus on relevant tasks.

Acceptance Criteria:
- Given the main list view, When I select a status filter, Then only tasks matching that status are shown.

User Story 4  
As a user, I want to sort tasks by due date or priority, so that I can prioritize my work.

Acceptance Criteria:
- Given the main list view, When I select a sort option, Then the list updates accordingly.

Add/Edit Modal

User Story 5  
As a user, I want to add a new task, so that I can keep track of new work items.

Acceptance Criteria:
- Given the main list view, When I click the add button, Then an add/edit modal appears.
- When I fill in the required fields and save, Then the new task appears in the list.

User Story 6  
As a user, I want to edit an existing task, so that I can update its details.

Acceptance Criteria:
- Given a task in the list, When I click the edit button, Then the add/edit modal opens pre-filled with the task’s details.
- When I update fields and save, Then the changes are reflected in the list.

User Story 7  
As a user, I want to cancel adding or editing a task, so that I can exit without saving changes.

Acceptance Criteria:
- Given the add/edit modal is open, When I click cancel, Then the modal closes and no changes are saved.

History View

User Story 8  
As a user, I want to view the history of changes to my tasks, so that I can track modifications over time.

Acceptance Criteria:
- Given the main list view, When I open the history view, Then I see a chronological list of changes for each task.

User Story 9  
As a user, I want to filter the history by date or task, so that I can find specific changes.

Acceptance Criteria:
- Given the history view, When I apply a filter, Then only matching history entries are shown.

Branding

User Story 10  
As a user, I want the app to use the defined brand colors, typography, and logo, so that the experience is visually consistent with the brand.

Acceptance Criteria:
- Given any screen, When the app loads, Then the brand colors, typography, and logo are applied as per the brandbook.

User Story 11  
As a user, I want the UI to follow the atomic design system, so that components are consistent and reusable.

Acceptance Criteria:
- Given any UI component, When I interact with the app, Then components follow the atomic design guidelines.

Accessibility

User Story 12  
As a user with accessibility needs, I want the app to be navigable via keyboard and screen readers, so that I can use it without barriers.

Acceptance Criteria:
- All interactive elements are reachable and usable via keyboard.
- All UI elements have appropriate ARIA labels and roles.

To Clarify

- Task priorities: Are there specific priority levels and how are they defined?
- Task fields: What fields are required for a task (e.g., description, tags)?
- User roles: Is there more than one user role (e.g., admin, regular user)?
- History details: What specific changes are tracked (e.g., edits, deletions)?
- Accessibility: Are there specific accessibility standards to follow (e.g., WCAG 2.1 AA)?
- Notifications: Should users receive notifications for task changes?
- Error handling: How are errors displayed to users?
