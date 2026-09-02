# AI Handoff

This file is the shared coordination point for Codex, Claude Code, and human collaborators.

## Current Status

Status: WACHT_OP_REVIEW
Active worker: -
Started at: 2026-09-02
Scope: 1-op-1 implementatie van de ingelogde gebruikerspagina uit het gekoppelde Figma-bestand
Figma source: https://www.figma.com/design/WVizuI3oPeVXgfbhcjtXBM/Untitled?node-id=1-10093&t=brIwuh83IK5bnliV-0
Local Figma export: C:\Users\Dave Hoekstra\Downloads\NKC - website (MVP).fig
Last handoff: Codex implemented the Figma page in React/Vite with downloaded Figma assets. Desktop and mobile layouts were checked in a browser, and the favourite state plus accordion sections work. `npm run build` passes.
Next step: Review the local implementation at http://127.0.0.1:5173/. After approval, continue with the next explicitly scoped Figma page or connect this screen to real API data.

## Status Values

- VRIJ: No AI agent is currently working. A new worker may claim the task.
- ACTIEF: One AI agent is working. Other agents must not change code.
- WACHT_OP_REVIEW: Work is ready for human or peer AI review. Do not continue without an explicit handoff.
- GEBLOKKEERD: Work cannot continue without human input.

## Claim Protocol

Before making code changes:

1. Read this file.
2. If `Status` is `ACTIEF` and `Active worker` is not you, stop and report the current status.
3. If `Status` is `WACHT_OP_REVIEW`, only review; do not continue implementation unless Dave asks you to take over.
4. If the task is free, update `Status`, `Active worker`, `Started at`, and `Scope`.
5. Re-read this file immediately before the first code edit.

## Release Protocol

When handing off:

1. Run the relevant checks you can run locally.
2. Summarize what changed.
3. Note any files, routes, or components that should not be edited blindly next.
4. Set `Status` to `VRIJ`, `WACHT_OP_REVIEW`, or `GEBLOKKEERD`.
5. Update `Last handoff` and `Next step`.

## Current Figma Focus

For now, ignore the rest of the Figma file and focus on the logged-in user experience from the linked frame/node.

Do not implement public homepage, login flow, or unrelated Figma pages unless Dave explicitly expands the scope.
