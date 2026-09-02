# Agent Instructions

These instructions apply to Codex and any other AI agent working in this repository.

## Coordination First

Always read `AI_HANDOFF.md` before inspecting or editing code.

This repository uses a strict one-active-AI workflow:

- If `AI_HANDOFF.md` says `Status: ACTIEF` and the active worker is not you, do not edit files.
- If `AI_HANDOFF.md` says `Status: WACHT_OP_REVIEW`, review only unless Dave explicitly asks you to continue implementation.
- If you start work, claim the task in `AI_HANDOFF.md` before making code changes.
- Re-read `AI_HANDOFF.md` immediately before your first code edit.
- Release the task in `AI_HANDOFF.md` when you finish, pause, or become blocked.

## Project Scope

The current build target is:

- Project: NKC website MVP
- Primary design source: Figma
- Current focus: logged-in user experience
- Figma link: https://www.figma.com/design/G9gU3FfCD6Z3QP4v7ovOMG/NKC---website--MVP-?node-id=12259-13388&p=f&t=addaYu7TgtPqalxJ-0

Ignore unrelated Figma screens unless Dave explicitly expands the scope.

## Figma To Code Workflow

When Figma access is available:

1. Start with the exact linked frame or node.
2. Capture design context and a screenshot before implementation.
3. Map Figma elements to existing project components, tokens, routes, and data patterns.
4. Do not create a parallel design system when an existing project convention can be reused.
5. Implement responsive desktop and mobile behavior.
6. Verify the result in a real browser where possible.

When Figma access is not available, ask Dave for screenshots or exports of the focused frame and continue from those.

## Engineering Rules

- Keep changes scoped to the active handoff scope.
- Prefer existing project patterns over new abstractions.
- Use branches or pull requests once the repository has implementation code.
- Do not overwrite another worker's changes.
- Do not commit generated secrets, credentials, or local environment files.
- Document meaningful open questions in `AI_HANDOFF.md` instead of scattering them through the code.
