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

- Project: NKC website MVP, dossieromgeving voor ingelogde gebruikers
- Stack: Vite, React en Lucide React
- Lokale start: `npm.cmd run dev`
- Controle: `npm.cmd run build`
- Actuele Figma-bron: https://www.figma.com/design/WVizuI3oPeVXgfbhcjtXBM/Untitled?node-id=1-10093&t=brIwuh83IK5bnliV-0
- Figma-focus: de ingelogde gebruikerservaring uit de gekoppelde frame

Ignore other screens and flows unless Dave explicitly changes the scope.

## Current Product State

De pagina is nu een visueel dossierprototype in de bestaande NKC-stijl.

- Standaardrol: `Leverancier`.
- Via `Weergave` bovenaan is `NKC adviseur` beschikbaar.
- De leveranciersrol bevat een gesprek met de aanvrager, een besloten NKC-overleg, lange reacties en bijlagen.
- De NKC-rol bevat een gesprek met de aanvrager en vijf afzonderlijke leveranciersgesprekken. Leveranciers zien alleen hun eigen gesprek en de goedgekeurde briefing.
- `Regie` wisselt tussen Eigen regie en NKC regie.
- Links: organisatie, dossier, matchprofiel en gesprekken. Rechts: volgende actie, afspraken, voortgang, dossieracties en dossierupdate.

Lees voor verdere inhoudelijke achtergrond ook `LAPTOP_HANDOFF.md`.

## Git Baseline

- `72bd879 Add dossier collaboration workspace`: eerdere vastgelegde dossieromgeving.
- De huidige NKC-adviseurweergave wordt in de volgende commit vastgelegd.

Controleer altijd `git status --short` voordat je begint. Push nooit zonder Daves expliciete opdracht.

## Implementation Expectations

- Reuse existing project components and conventions once implementation code exists.
- Keep changes narrow and reviewable.
- Do not introduce secrets or local-only credentials.
- Prefer a clear handoff over continuing with uncertain assumptions.
- Use `apply_patch` for handmatige wijzigingen.
- Laat bestaande wijzigingen van een andere medewerker altijd staan en werk ermee samen.
