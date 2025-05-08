# Accessibility Checklist (MVP)

- [ ] All text meets WCAG AA contrast (4.5:1 normal, 3:1 large)
- [ ] All interactive elements have visible focus ring (2px, color-secondary/accent)
- [ ] All forms and modals are keyboard navigable (Tab, Shift+Tab, Enter, Esc)
- [ ] All custom components use ARIA roles/labels (aria-label, aria-modal, aria-expanded, etc.)
- [ ] All images/icons have alt text or aria-label
- [ ] Error messages use role="alert"
- [ ] High-contrast mode toggle in settings
- [ ] Voice input/search has accessible label and instructions
- [ ] No color is used as the only means of conveying information
- [ ] All components tested with screen reader (NVDA, VoiceOver, etc.) 