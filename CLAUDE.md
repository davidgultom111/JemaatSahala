# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Church management web application ("JemaatSahala") for GPdI Sahala Palembang. Built with Nuxt 4 + Vue 3 + TypeScript. Communicates with a separate Laravel backend API at `http://sekretariat.test/api`.

## Commands

```bash
npm run dev        # Start dev server on http://localhost:3000
npm run build      # Build for production (outputs to .output/)
npm run preview    # Preview production build locally
npm run generate   # Generate static site
```

No test runner or linter is currently configured.

## Architecture

### Routing & Pages

File-based routing via `/pages/`:
- `index.vue` — public landing page
- `login.vue`, `Register.vue` — auth pages
- `profile.vue`, `editprofile.vue` — protected member pages
- `gereja.vue` — public church staff directory
- `surat.vue` — protected letter management

Protected routes use the `auth` middleware (`/middleware/auth.ts`), which redirects to `/login` if the `api_token` cookie is absent.

### Data Flow

1. All API calls go through `useApi().request()` in `/composables/useApi.ts` — it attaches the Bearer token from cookies automatically.
2. Authentication state lives in `useAuth()` (`/composables/useAuth.ts`), which handles login, logout, and `fetchProfile`. On 401 responses, the token is cleared and the user is redirected to `/login`.
3. The API base URL is set in `nuxt.config.ts` as a runtime public config (`apiBase: 'http://sekretariat.test/api'`). Access it in code via `useRuntimeConfig().public.apiBase`.
4. The auth token cookie is named `api_token` with an 8-hour max age.

### Types

All shared TypeScript interfaces are in `/types/index.ts`:
- `Member` — user/member data including roles
- `Letter` — church letter (surat) data
- `ApiResponse<T>` — standardized API response envelope

### Styling

Tailwind CSS via `@nuxtjs/tailwindcss`. Primary color: dark navy `#00334e`; accent: yellow. Custom styles in `/assets/css/main.css`.

### Key Composables

| Composable | Purpose |
|------------|---------|
| `useAuth` | Login, logout, fetchProfile, reactive auth state |
| `useApi` | Generic HTTP wrapper with auto Bearer token injection |
