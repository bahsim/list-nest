### Prompt

I am holding and moving item left, see delete icon and then items marked as deleted without done mark

### Result

You’re describing a **swipe-to-delete** or **slide-to-reveal-action** pattern, common in mobile UIs:

- When you drag (swipe/hold and move) a list item to the left, the delete icon appears.
- If you release, the item is marked as deleted (often visually removed or faded), but not “done” (not checked/bought).

**What’s happening:**
- This is not default MUI List behavior. It’s a custom interaction, usually implemented with gesture libraries (e.g., `react-swipeable-list`, `react-spring`, or custom handlers).
- The “deleted” state is likely a flag in your data (e.g., `isDeleted`), and the UI updates to reflect this (e.g., item fades, delete icon stays, no checkmark).

**Why you see this:**
- Your app or a library is handling the swipe gesture and updating the item state.
- The “done”/“bought” mark is separate from the “deleted” state.

---

**If you want to implement, customize, or fix this:**
- Use a swipeable list library (e.g., [mui-swipe-list-item](https://www.npmjs.com/package/mui-swipe-list-item), [react-swipeable-list](https://sandstreamdev.github.io/react-swipeable-list/)).
- Add an `isDeleted` property to your item type and handle the UI accordingly.
- Show the delete icon only on swipe, and visually distinguish deleted items (e.g., fade, strikethrough, or remove).

**If you want code for swipe-to-delete with MUI, or want to fix the “deleted but not done” state, let me know your exact goal!**  
- Do you want to implement swipe-to-delete?
- Do you want to visually distinguish deleted vs. done?
- Or do you want to prevent accidental deletes?

Just clarify your intent and I’ll give you the code or solution!
