### Prompt 

You are an Sinor Fullstack Developer and familiar with Nest.js, React.js. SQL DB, TypeORM, React Testing Library, Jest for Nest.js, MUI, PWA
Suggest me a tech stack

### Result

Stack for a GenAI-powered grocery app (PWA, collaborative, analytics):

*** Backend: ***
- NestJS (TypeScript, modular, scalable)
- MySQL (analytics, JSON for flexible data)
- Prisma ORM (type-safe, fast migrations, better DX than TypeORM)
- Redis (caching, real-time pub/sub for collab editing)
- OpenAI API or Ollama/local LLM (GenAI features)
- WebSockets (NestJS built-in, live updates)

*** Frontend: ***
- React.js
- MUI (Material UI, PWA-ready)
- React Query (data fetching/caching)
- Zustand or Redux Toolkit (state management, collab state)
- Service Workers (PWA/offline)
- Vite (dev/build tool, fast)

*** Other: ***
- Auth: Clerk/Auth0 or custom JWT (NestJS Passport)
- Deployment: Railway, Vercel, or Fly.io (MySQL + Node)
- Testing: Vitest (frontend), Jest (backend)

*** Why: ***
- All TypeScript, easy type sharing
- Real-time collab, analytics, and PWA are first-class
- Scalable, great dev UX, easy to swap in local LLMs

If you want file structure, data model, or boilerplate repo, just say so.
