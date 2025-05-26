### Prompt 

Box wrapper in to be used on other pages too so it seems better to move it in FooterNav compoenent - consider as a pro

### Result

Absolutely, that’s a pro move.

**Reasoning:**
- If every page that uses `FooterNav` needs the same `<Box>` wrapper (positioning, height, zIndex, etc), it’s a sign that this layout concern is part of the footer’s contract—not the page’s.
- By moving the wrapper into `FooterNav`, you:
  - DRY up your code (no more copy-paste of the same Box everywhere).
  - Make the page code cleaner and less error-prone.
  - Make it easier to update footer layout globally (just change FooterNav).

**How to do it:**
- Move the `<Box ...>` wrapper (with its sx props) inside the `FooterNav` component.
- The page just uses `<FooterNav ... />` directly, no wrapper needed.
- If you want to allow for custom overrides, accept a `sx` prop and merge it.

**Pro tip:**  
- Document in the FooterNav JSDoc that it is “absolutely positioned at the bottom of the viewport by default.”

**Want me to generate the code for the FooterNav refactor?**  
Just say so.
