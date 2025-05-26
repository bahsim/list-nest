# Component States & Variants (MVP)

| Component             | State/Variant         | Description/Usage                        |
|-----------------------|----------------------|------------------------------------------|
| HeaderBar             | —                    | Static                                   |
| ShoppingList          | —                    | Static                                   |
| ShoppingListItemCard  | isEditing            | Edit mode                                |
|                       | isHovered            | Mouse hover                              |
|                       | Focused              | Highlighted/focused item                 |
|                       | Bought               | Marked as bought                         |
| AddItemForm           | isFocused            | Input focused                            |
|                       | errors               | Validation error                         |
| AddEditItemModal      | Add                  | Add mode                                 |
|                       | Edit                 | Edit mode                                |
|                       | aiSuggestions        | AI suggestions visible                   |
| FooterNav             | activeTab            | Current tab highlighted                  |
| ReminderBanner        | —                    | Static                                   |
| AISuggestionButton    | —                    | Static                                   |
| AISuggestionCard      | —                    | Static                                   |
| PurchasedHistory      | Faded                | Item is faded (archived)                 |
| AnalyticsPanel        | isCollapsed          | Collapsed/expanded                       |
| ActivityLog           | isCollapsed          | Collapsed/expanded                       |
| HistoryView           | search, filters      | Search/filter active                     |
|                       | expandedGroups       | Group expanded/collapsed                 |
| SettingsPanel         | theme                | Light/dark mode                          |
| UserProfileDropdown   | —                    | Static                                   |

# See Storybook for live examples and add more as needed. 