# AI Handoff

This file is the shared coordination point for Codex, Claude Code, and human collaborators.

## Current Status

Status: VRIJ
Active worker: -
Started at: -
Scope: NKC website MVP - ingelogde gebruiker
Figma source: https://www.figma.com/design/G9gU3FfCD6Z3QP4v7ovOMG/NKC---website--MVP-?node-id=12259-13388&p=f&t=addaYu7TgtPqalxJ-0
Last handoff: Initial setup
Next step: Import or scaffold the project code, then implement the logged-in user flow from the Figma frame.

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
