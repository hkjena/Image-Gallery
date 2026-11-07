# Repository guidance for coding agents

## Project overview

- This is a React 19 photo gallery written in TypeScript.
- Vite 8 builds and serves the app; Tailwind CSS 4 provides styling.
- Unsplash requests are made through the Axios client in `src/APIs/unsplash.ts`.
- React UI and tests are under `src/SearchApp/`.

## Working conventions

- Keep application code in `.ts` or `.tsx` files and preserve strict TypeScript checking.
- Define or update shared API types in `src/APIs/types.ts` rather than weakening types at call sites.
- Keep secrets out of source, logs, tests, and commits. The Unsplash key belongs in a local environment file as `VITE_UNSPLASH_API_KEY`; never add a real key to the repository.
- Preserve the existing React component and Tailwind CSS patterns. Avoid unrelated dependency or configuration changes.
- Add or update focused Vitest tests for behavior changes, especially loading, empty-result, and error states.
- Surface API failures to users and ensure pending UI state is restored on both success and failure.

## Validation

Run the relevant checks before finishing:

```sh
npm test
npm run lint
npm run build
```

The production build includes the TypeScript 7 typecheck. `npm run typecheck` can be used to run that check by itself.

## Change hygiene

- Review `git status` before editing and do not overwrite or stage unrelated user changes.
- Keep commits focused by task and use descriptive conventional commit messages.
- Do not commit generated output, `node_modules`, local environment files, or credentials.
