# Claude Code Instructions

Claude Code should follow the same handoff protocol as Codex.

## Required First Step

Read `AI_HANDOFF.md` before inspecting or editing code.

If another worker is active:

- Do not edit files.
- Report who is active, the scope, and the next step from `AI_HANDOFF.md`.
- Wait for Dave to hand the task over.

## Claiming Work

Before making code changes, update `AI_HANDOFF.md`:

- `Status: ACTIEF`
- `Active worker: Claude Code`
- `Started at: <date/time>`
- `Scope: <specific task>`

Re-read `AI_HANDOFF.md` immediately before the first code edit.

## Releasing Work

When done or blocked, update `AI_HANDOFF.md` with:

- final status: `VRIJ`, `WACHT_OP_REVIEW`, or `GEBLOKKEERD`
- a short summary in `Last handoff`
- the concrete `Next step`
- any checks that were run

## Current Build Context

- Project: NKC website MVP
- Priority: logged-in user experience only
- Figma source: https://www.figma.com/design/G9gU3FfCD6Z3QP4v7ovOMG/NKC---website--MVP-?node-id=12259-13388&p=f&t=addaYu7TgtPqalxJ-0

Ignore other screens and flows unless Dave explicitly changes the scope.

## Implementation Expectations

- Reuse existing project components and conventions once implementation code exists.
- Keep changes narrow and reviewable.
- Do not introduce secrets or local-only credentials.
- Prefer a clear handoff over continuing with uncertain assumptions.
