# Laptop Handoff

Lees dit bestand samen met `AI_HANDOFF.md` voordat je aan dit project verder werkt.

## Project

- Pad: `C:\Users\Dave Hoekstra\Desktop\codex\Co-work-platform`
- Stack: Vite, React en Lucide React
- Lokale start: `npm.cmd run dev`
- Controle: `npm.cmd run build`
- Figma-focus: alleen de ingelogde gebruikerservaring uit de gekoppelde Figma-frame. Publieke pagina's en login blijven buiten scope tenzij Dave dit uitbreidt.

## Wat Er Staat

De pagina is een visueel prototype van een dossieromgeving voor softwareselectie in de bestaande NKC-stijl.

- Leveranciersweergave is de standaard.
- NKC-adviseurweergave is beschikbaar via de schakelaar `Weergave` bovenaan.
- Regie kan wisselen tussen `Eigen regie` en `NKC regie`.
- Links: bedrijfsinformatie, dossierinformatie, matchprofiel en dossiergesprekken.
- Rechts: volgende actie, afspraken en voortgang, dossieracties, dossierupdate en bedrijfsinformatie.

## Communicatieconcept

Leveranciersweergave:

- Gesprek met de aanvrager, inclusief lange reactie, bijlage en zichtbaarheid via Selectiehulp.
- Besloten overleg met NKC; de aanvrager ziet dit niet.
- Algemene vraag aan NKC kan los van een dossier worden geopend vanuit de bedrijfsinformatie.

NKC-adviseurweergave:

- Gesprek met de aanvrager.
- Vijf afzonderlijke leveranciersgesprekken met laatste bericht en vervolgactie.
- Iedere leverancier ziet alleen het eigen gesprek en de goedgekeurde briefing.

## Dossierconcept

- `Matchprofiel` bevat klant-DNA, oplossingsrichting en harde voorwaarden voor matching.
- `Afspraken & voortgang` legt vast dat communicatie via Selectiehulp loopt, welke fase actief is en wat NKC organiseert.
- `Dossierupdate` kan visueel als werkversie of definitief voor kennismakingen worden gemarkeerd.
- Open acties hebben een reminderknop.

## Git-status Bij Overdracht

Vastgelegde basis voor de dossieromgeving:

- `72bd879 Add dossier collaboration workspace`

Vastgelegde eerdere leverancierspagina:

- `eb05d69 Add supplier advisor company view`

De NKC-adviseurweergave is nog lokaal en niet gecommit. Verwachte gewijzigde bestanden:

- `AI_HANDOFF.md`
- `src/App.jsx`
- `src/collaboration-preview.css`

Laat deze wijzigingen staan tenzij Dave expliciet om terugdraaien vraagt. Controleer altijd eerst `git status --short`.

## Werkwijze

1. Lees `AI_HANDOFF.md` en neem de status over voordat je code wijzigt.
2. Gebruik `apply_patch` voor gerichte wijzigingen.
3. Draai `npm.cmd run build` na een wijziging.
4. Commit of push alleen wanneer Dave dat expliciet vraagt.
5. Houd leverancier- en NKC-weergave in dezelfde component- en stijllijn; maak geen parallelle pagina.

## Waarschijnlijke Volgende Stap

Dave beoordeelt de NKC-adviseurweergave. Als hij akkoord is, leg die lokale uitbreiding vast in een aparte commit. Daarna pas echte dataopslag, gebruikersrechten, uploads en notificaties ontwerpen; die bestaan nu alleen als visueel prototype.
