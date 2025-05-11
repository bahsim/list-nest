### Prompt 

Let's implement 2 groups of list items - focused and all others with subtitles above each list. in the right of subtitles there are total sums of cost in the group

### Result

Here’s how to do it, clean and scalable:

**1. Group your items:**  
- Focused: `isFocused === true && !isDeleted`
- Others: `isFocused === false && !isDeleted`
- (You can add more groups later if needed.)

**2. Calculate group sums:**  
- For each group, sum `estimatedPrice` for items in that group.

**3. Render:**  
- For each group, render a subtitle (e.g., “Focused”, “Others”) with the sum on the right.
- Render the items for that group below the subtitle.

**4. UI:**  
- Use MUI’s `Typography` for subtitles, `Box` for layout.
- Subtitle row: left = label, right = sum (use `display: flex; justifyContent: space-between; alignItems: center;`).

---

**Example code for your MainListView:**

```tsx
// Grouping and sum logic
const focusedItems = items.filter(item => item.isFocused && !item.isDeleted);
const otherItems = items.filter(item => !item.isFocused && !item.isDeleted);

const getGroupSum = (group: ShoppingListItem[]) =>
  group.reduce((sum, item) => sum + (item.estimatedPrice || 0), 0);

// In your render:
<>
  {/* Focused group */}
  {focusedItems.length > 0 && (
    <>
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          px: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
          mb: 1,
        }}
      >
        <Typography variant="subtitle1" fontWeight={700}>Focused</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          ${getGroupSum(focusedItems)}
        </Typography>
      </Box>
      <ShoppingList
        items={focusedItems}
        sx={{ width: '100%', maxWidth: 600, px: 1 }}
        onEdit={() => {}}
        onDelete={() => {}}
        onToggleBought={() => {}}
        onToggleFocus={() => {}}
      />
    </>
  )}

  {/* Others group */}
  {otherItems.length > 0 && (
    <>
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          px: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
          mb: 1,
        }}
      >
        <Typography variant="subtitle1" fontWeight={700}>Others</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          ${getGroupSum(otherItems)}
        </Typography>
      </Box>
      <ShoppingList
        items={otherItems}
        sx={{ width: '100%', maxWidth: 600, px: 1 }}
        onEdit={() => {}}
        onDelete={() => {}}
        onToggleBought={() => {}}
        onToggleFocus={() => {}}
      />
    </>
  )}
</>
```

**How to integrate:**  
- Replace your single `<ShoppingList ... />` with the above grouped rendering inside your scrollable area.
- If you want to show a group even if it’s empty, just remove the `length > 0` check.

**Let me know if you want this applied as an edit, or want to customize group names, currency, or add more groups!**
