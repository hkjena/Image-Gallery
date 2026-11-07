# Image Gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/d42b2fb9-346a-470d-90cc-11e533351796/deploy-status)](https://app.netlify.com/sites/unsplashgallery/deploys)

A React photo gallery built with TypeScript, Vite, Tailwind CSS, and the Unsplash API. Browse random photos or search the Unsplash collection.

## Requirements

- Node.js 20.19 or newer, or 22.12 or newer
- npm
- An Unsplash API access key

## Getting started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a local environment file such as `.env.local` and add your Unsplash access key:

   ```dotenv
   VITE_UNSPLASH_API_KEY=your_unsplash_access_key
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

Never commit a real API key. Vite exposes `VITE_` variables to client-side code, so use an Unsplash key intended for public client applications and apply the restrictions available in your Unsplash account.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Typecheck with TypeScript 7 and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the project with ESLint |
| `npm test` | Run the Vitest suite |
| `npm run typecheck` | Typecheck without creating output files |

## Project structure

- `src/SearchApp/` — React application and UI components
- `src/APIs/` — Unsplash Axios client and API types
- `src/SearchApp/app.test.tsx` — UI tests for search, empty results, and API errors
- `vite.config.js` — Vite, React, Tailwind, and Vitest configuration

## AI coding assistants

- [Shared coding-agent guidance](./AGENTS.md)
- [GitHub Copilot instructions](./.github/copilot-instructions.md)

Contributions from AI assistants should follow the same project checks as other changes: run tests, lint, and the production build when relevant.

## License

This project is licensed under the [MIT License](./LICENSE).
