# ListNest

## Vision
A GenAI-powered collaborative grocery shopping app for families. All household members share a dynamic shopping list with both manually added and AI-suggested items, each with quantities and estimated prices. Features include autocomplete, smart suggestions, item editing, notes, focused view for large lists, optional categories, history, analytics, and real-time collaboration. GenAI tailors suggestions and insights based on usage and budget trends.

## Tech Stack
**Backend:**
- NestJS (TypeScript)
- MySQL
- Prisma ORM
- Redis (caching, real-time)
- OpenAI API or Ollama/local LLM
- WebSockets (NestJS built-in)

**Frontend:**
- React.js
- MUI (Material UI)
- React Query
- Zustand or Redux Toolkit
- Service Workers (PWA)
- Vite

**Other:**
- Auth: Clerk/Auth0 or custom JWT
- Deployment: Railway, Vercel, or Fly.io
- Testing: Vitest (frontend), Jest (backend)

## MVP Scope
- Single shopping list (no categories, no multi-list)
- Add/edit/remove items (name, quantity, optional price)
- Mark items as bought (move to history)
- Persistent list (local storage or simple backend)
- Basic GenAI suggestion (1-2 items from history)
- Simple UI: view, add, edit, remove, mark as bought

## MVP Description (User-Focused)

ListNest is a collaborative grocery shopping app designed for families. The MVP focuses on core list management, real-time collaboration, and simple organization. Users can add, edit, and categorize items, track what's bought, and view their shopping history. The interface is mobile-first, intuitive, and supports basic category management.

**Key MVP Features:**
- Add, edit, and delete grocery items
- Mark items as bought or restore them
- Organize items by custom categories
- View purchase history, filter by date/category
- Simple, responsive UI for mobile use

> See `/pre-development/Planning/02 - MVP scope.md` and `/pre-development/Discovery/01 - app idea v2.md` for more details. 

