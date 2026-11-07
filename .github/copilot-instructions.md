# GitHub Copilot instructions

Follow the shared repository guidance in [`AGENTS.md`](../AGENTS.md).

For code changes:

- Keep React application source in strict TypeScript.
- Add or update Vitest coverage for behavior changes.
- Preserve the Unsplash API key as a local-only environment variable; never expose or commit credentials.
- Before finishing, run `npm test`, `npm run lint`, and `npm run build` as applicable.
- Avoid unrelated edits and leave pre-existing user changes untouched.
