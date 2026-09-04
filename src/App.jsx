import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock3,
  FileText,
  Globe2,
  Heart,
  Landmark,
  ListTodo,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  Share2,
  Star,
  Users,
  UsersRound,
} from "lucide-react";

const companyParagraphs = [
  "Deze organisatie opereert als onafhankelijke leverancier van klimfaciliteiten en gerelateerde producten voor diverse marktsegmenten. Het bedrijf richt zich op de levering van klimwanden voor zowel binnen- als buitengebruik, boulderstructuren, klimgrepen en aanverwante materialen.",
  "De organisatie bedient verschillende doelgroepen, waaronder particulieren, onderwijsinstellingen, sportverenigingen, recreatiebedrijven en professionele gebruikers. Het productaanbod varieert van kleinere klimobjecten tot grootschalige en complexe klimstructuren. Voor de realisatie van projecten beschikt het bedrijf over eigen productiecapaciteit en onderhoudt samenwerkingsverbanden met diverse fabrikanten en toeleveranciers.",
  "Naast de levering van kliminfrastructuur biedt de organisatie een uitgebreid pakket aan servicediensten. Dit omvat technisch advies, inspecties van bestaande installaties, onderhoudswerkzaamheden, certificeringsdiensten en opleidingsactiviteiten. Daarnaast kunnen klanten losse producten, onderdelen en klimmaterialen bij het bedrijf aanschaffen.",
  "Het bedrijf beschikt over een eigen magazijnfaciliteit en heeft gespecialiseerde teams voor montage, inspectie en onderhoud. De organisatie richt zich geografisch op de Nederlandse en Belgische markten en heeft al meer dan twee decennia ervaring opgebouwd in deze sector.",
  "De dienstverlening strekt zich uit over verschillende toepassingsgebieden, van particuliere installaties tot educatieve en recreatieve omgevingen. Het bedrijf realiseert zowel standaard klimoplossingen als op maat gemaakte installaties, afhankelijk van de specifieke behoeften van de klant.",
  "Door de onafhankelijke positie kan de organisatie klanten adviseren over verschillende oplossingen en producten zonder gebonden te zijn aan specifieke leveranciers. Dit stelt het bedrijf in staat om naar eigen zeggen een optimale prijs-kwaliteitverhouding te bieden aan hun klanten.",
];

function Header({ audience }) {
  return <>
    <div className="topbar"><div className="topbar-inner"><span><ClipboardList size={13} /> 11.433 organisaties gratis gematched</span><span><Star size={13} /> 9,2 uit 2100+ reviews</span><span><Landmark size={13} /> 15+ jaar echte praktijkervaring</span><span><Heart size={13} /> Favorieten</span></div></div>
    <header className="site-header"><div className="header-inner"><button className="menu-button" type="button"><Menu size={20} /> <span>Menu</span></button><a className="nkc-logo" href="#top" aria-label="Nederlands KennisCentrum"><strong>NKC</strong><span>Nederlands<br />KennisCentrum</span></a><button className="user-menu" type="button"><span className="user-dot">{audience === "advisor" ? "D" : "M"}</span><span>{audience === "advisor" ? <>Dave<br /><small>NKC adviseur</small></> : <>Martin Bronger<br /><small>ABCm</small></>}</span><ChevronDown size={15} /></button></div></header>
  </>;
}

function WorkspaceControls({ mode, onModeChange, audience, onAudienceChange }) {
  return <section className="workspace-controls" aria-label="Dossierregie en voortgang">
    <div className="workspace-topline">
      <div className="view-choice"><span>Weergave</span><div className="segmented-control" role="group" aria-label="Kies de gebruikersrol"><button className={audience === "supplier" ? "selected" : ""} type="button" onClick={() => onAudienceChange("supplier")}>Leverancier</button><button className={audience === "advisor" ? "selected" : ""} type="button" onClick={() => onAudienceChange("advisor")}>NKC adviseur</button></div></div>
      <div className="regie-choice">
        <span>Regie</span>
        <div className="segmented-control" role="group" aria-label="Kies de regievorm">
          <button className={mode === "eigen" ? "selected" : ""} type="button" onClick={() => onModeChange("eigen")}>Eigen regie</button>
          <button className={mode === "nkc" ? "selected" : ""} type="button" onClick={() => onModeChange("nkc")}>NKC regie</button>
        </div>
      </div>
      <div className="process-steps" aria-label="Voortgang van het dossier">
        <span className="done"><CheckCircle2 size={17} /> Intake</span>
        <span className="active"><Clock3 size={17} /> Marktscan</span>
        <span>Kennismakingen</span>
        <span>Besluit</span>
      </div>
    </div>
    <p className="regie-explanation">{mode === "eigen" ? "De klant beheert de longlist en shortlist. NKC bewaakt afspraken en helpt waar nodig." : "NKC beheert de longlist en shortlist. De klant beoordeelt en bevestigt de vervolgstappen."}</p>
  </section>;
}

function ProfileCard() {
  const [favorite, setFavorite] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const paragraphs = expanded ? companyParagraphs : companyParagraphs.slice(0, 2);
  return <article className="profile-card advisor-profile">
    <div className="hero-image"><img src="/figma/profile-1.png" alt="Klimmer op een klimwand" /><button className={`favorite-button ${favorite ? "is-active" : ""}`} type="button" onClick={() => setFavorite(!favorite)} aria-label="Markeer als favoriet" title="Markeer als favoriet"><Heart size={20} fill={favorite ? "currentColor" : "none"} /></button></div>
    <div className="profile-content">
      <img className="company-logo" src="/figma/profile-5.png" alt="Klimwandspecialist" />
      <h1>Klimwandspecialist</h1>
      <p className="location"><MapPin size={17} /> Klimmen <span><Globe2 size={16} /> www.klimwandspecialist.nl</span></p>
      <div className="company-copy">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <button className="outline-button less-button" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? "Minder..." : "Lees meer"}</button>
      <div className="tag-rows"><div className="tag-row"><span>Branche</span><div><em><BriefcaseBusiness size={15} /> Bouw/Installatie &gt; Installatie branche</em></div></div><div className="tag-row"><span>Bedrijfsgrootte</span><div><em>15 tot 50 medewerkers</em></div></div></div>
    </div>
  </article>;
}

function DossierCard() {
  const [open, setOpen] = useState(true);
  return <section className={`dossier-card ${open ? "open" : ""}`}>
    <button className="dossier-header" type="button" onClick={() => setOpen(!open)} aria-expanded={open}><span>Dossier 1116103</span><ChevronDown size={20} /></button>
    {open && <div className="dossier-content"><p className="dossier-date">donderdag 4 juli 2020</p><section><h2>Huidige situatie</h2><p>De activiteit van dit bedrijf bestaat uit een groothandel voor klimwand benodigdheden voor winkels, klimhallen, defensie enz. Naast de verkoop van artikelen verrichten ze ook onderhoud en advies. Momenteel gebruiken ze enkel Exact Online voor de boekhouding en missen ze inzicht in taken, voorraden wat ze willen aanpassen door aanschaf van een ERP systeem.</p></section><section><h2>Gewenste situatie</h2><p>Ze ontwerpen zelf items welke ze bij externe laten produceren, de productie hoeft niet in het systeem. Ze hebben een artikel en een gebruiksvoorraad waar ze graag inzicht en planning willen hebben. Voor de losse verkoop hebben ze een webshop, voor de projecten waar ze de uren en materialen en onderdelen willen ze graag de orderstatus van items kunnen plannen en de uren kunnen bijhouden. Middels CRM functionaliteiten willen ze aanvragen en klantgedrag kunnen monitoren. Ze doen vooral zaken in Nederland en Belgie en hebben 1 NL administratie te voeren.</p><p>De pijnpunten welke de kernselectiepunten zijn:<br />- Inzicht in huidige statussen<br />- Taken zijn momenteel niet te volgen<br />- Voorraad bijhouden</p><p>Het bijhouden van de certificering en onderhoud in het ERP systeem zou handig zijn maar is geen harde wens, dit doen ze nu in excel.</p><p>Ze hanteren geen kleur/maattabellen, enkel artikelnummers.</p></section><section className="match-profile"><div><h2>Matchprofiel</h2><span>Alleen voor matching</span></div><p>Samenvatting van het klant-DNA en de voorwaarden voor een passende oplossing.</p><dl><div><dt>Oplossingsrichting</dt><dd>ERP met voorraad, projectplanning en CRM</dd></div><div><dt>Harde voorwaarde</dt><dd>Nederlandse administratie en ondersteuning</dd></div><div><dt>Belangrijk in de match</dt><dd>Inzicht in statussen, taken en voorraad</dd></div></dl></section></div>}
  </section>;
}

function CollaborationCard({ audience }) {
  const [composerOpen, setComposerOpen] = useState(false);
  const [recipient, setRecipient] = useState("aanvrager");
  if (audience === "advisor") return <section className="collaboration-card advisor-communication-card">
    <div className="collaboration-heading"><div><h2>Communicatie in dit dossier</h2><p>Aanvrager en gekoppelde leveranciers op een plek.</p></div><button className="outline-button compact-action" type="button"><MessageSquare size={17} /> Nieuwe update</button></div>
    <section className="advisor-applicant-thread"><div className="questions-heading"><div><h3>Gesprek met de aanvrager</h3><p><span className="participant-stack"><span>K</span><span>N</span></span> Klimwandspecialist en NKC</p></div><span className="conversation-presence">Actief</span></div><div className="conversation-message outgoing"><span className="message-avatar">N</span><div><div className="message-meta"><b>NKC</b><time>Vandaag, 09:48</time></div><p>We hebben de briefing aangevuld met de gewenste voorraad- en planningsfunctionaliteiten.</p></div></div><div className="conversation-message incoming"><span className="message-avatar">K</span><div><div className="message-meta"><b>Klimwandspecialist</b><time>Vandaag, 11:08</time></div><p>Akkoord. Deze versie kan gebruikt worden voor de eerste leveranciersgesprekken.</p></div></div></section>
    <section className="supplier-conversations" aria-label="Leveranciersgesprekken"><div className="questions-heading"><div><h3>Leveranciersgesprekken</h3><p>Iedere leverancier ziet alleen het eigen gesprek en de goedgekeurde briefing.</p></div><span className="conversation-presence">5 gekoppeld</span></div>{[
      ["Leverancier 01", "ERP voor projectbedrijven", "Vraagt om aanvullende informatie over de voorraadplanning.", "Vandaag, 10:42", "Beantwoord vraag"],
      ["Leverancier 02", "Voorraad & logistiek", "Heeft de briefing ontvangen en beoordeelt de match.", "Vandaag, 09:57", "Wacht op reactie"],
      ["Leverancier 03", "ERP voor MKB", "Deelt twee relevante referentiecases.", "Gisteren, 16:20", "Bekijk bijlagen"],
      ["Leverancier 04", "Projectadministratie", "Wil een kennismaking inplannen met de aanvrager.", "Gisteren, 14:05", "Plan kennismaking"],
      ["Leverancier 05", "CRM & service", "Heeft een vervolgvraag over certificering en onderhoud.", "maandag, 11:31", "Beantwoord vraag"],
    ].map(([name, focus, message, time, action]) => <article className="advisor-supplier-row" key={name}><span className="supplier-avatar">{name.slice(-2)}</span><div><b>{name}</b><small>{focus}</small><p>{message}</p><time>{time}</time></div><button className="text-action" type="button">{action} <ArrowRight size={15} /></button></article>)}</section>
  </section>;
  return <section className="collaboration-card">
    <div className="collaboration-heading"><div><h2>Dossiergesprekken</h2><p>Vragen en antwoorden rond dossier 1116103.</p></div><button className="outline-button compact-action" type="button" onClick={() => setComposerOpen((isOpen) => !isOpen)}><MessageSquare size={17} /> {composerOpen ? "Sluiten" : "Nieuwe vraag"}</button></div>
    <section className="dossier-questions" aria-label="Dossiergesprekken">
      <div className="questions-heading"><div><h3>Gesprek met de aanvrager</h3><p><span className="participant-stack"><span>H</span><span>K</span><span>N</span></span> HUSS, Klimwandspecialist en NKC</p></div><span className="conversation-presence">3 deelnemers</span></div>
      <article className="conversation-thread">
        <div className="conversation-message outgoing"><span className="message-avatar">H</span><div><div className="message-meta"><b>HUSS</b><time>Vandaag, 10:24</time></div><p>Hoe wordt de voorraad momenteel bijgehouden? En welke informatie is straks nodig voor de planning?</p></div></div>
        <div className="conversation-message incoming"><span className="message-avatar">K</span><div><div className="message-meta"><b>Klimwandspecialist</b><time>Vandaag, 11:08</time></div><p>We houden voorraad nu in Excel bij. Voor de planning willen we inzicht in artikelen, projecten en bestellingen.</p><span className="message-file"><FileText size={15} /> Huidige situatie.pdf</span></div></div>
        <div className="conversation-note">Communicatie verloopt via Selectiehulp. Zichtbaar voor aanvrager, leverancier en NKC.</div>
        <form className="reply-composer" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="dossier-reply">Reageer in gesprek met de aanvrager</label><textarea id="dossier-reply" rows="3" placeholder="Schrijf een uitgebreide reactie..." /><div><button className="attachment-button" type="button"><FileText size={16} /> Bijlage</button><button className="primary-button" type="submit"><Send size={16} /> Versturen</button></div></form>
      </article>
      <article className="private-conversation"><span className="thread-icon"><MessageSquare size={18} /></span><div><span className="thread-label private-label">Besloten overleg met NKC</span><h4>Welke informatie mogen wij met de aanvrager delen?</h4><div className="private-reply"><div><b>NKC</b><time>Vandaag, 09:16</time></div><p>De functionele briefing mag je delen. Commerciële afspraken en interne notities blijven bij NKC.</p></div><small>Alleen zichtbaar voor leverancier en NKC</small></div><ChevronRight size={18} /></article>
      {composerOpen && <form className="question-composer" onSubmit={(event) => event.preventDefault()}>
        <div className="composer-topline"><div><h3>Nieuwe vraag</h3><p>Kies eerst wie deze vraag kan beantwoorden.</p></div><span className="status-chip">Dossier 1116103</span></div>
        <div className="recipient-toggle" role="group" aria-label="Ontvanger van de vraag"><button className={recipient === "aanvrager" ? "selected" : ""} onClick={() => setRecipient("aanvrager")} type="button">Aan aanvrager</button><button className={recipient === "nkc" ? "selected" : ""} onClick={() => setRecipient("nkc")} type="button">Aan NKC</button></div>
        <p className="visibility-note">{recipient === "aanvrager" ? "Zichtbaar voor: aanvrager, leverancier en NKC." : "Zichtbaar voor: leverancier en NKC. De aanvrager ziet dit gesprek niet."}</p>
        <label>Onderwerp<input type="text" placeholder="Waar gaat je vraag over?" /></label>
        <label>Vraag<textarea rows="3" placeholder={recipient === "aanvrager" ? "Stel je vraag aan de aanvrager..." : "Stel je vraag aan NKC over de aanvrager..."} /></label>
        <div className="composer-actions"><button className="attachment-button" type="button"><FileText size={16} /> Bijlage toevoegen</button><button className="outline-button" type="button" onClick={() => setComposerOpen(false)}>Annuleren</button><button className="primary-button" type="submit"><Send size={16} /> Vraag versturen</button></div>
      </form>}
    </section>
  </section>;
}

function MainContent({ mode, audience }) {
  return <div className="left-column"><ProfileCard /><DossierCard /><CollaborationCard audience={audience} /></div>;
}

function Sidebar({ mode, audience }) {
  const [generalQuestionOpen, setGeneralQuestionOpen] = useState(false);
  const [readyForMeetings, setReadyForMeetings] = useState(false);
  const [reminderSent, setReminderSent] = useState(false);
  return <aside className="sidebar advisor-sidebar">
    <section className="next-action-card"><div className="side-heading"><h2>Volgende actie</h2><Clock3 size={19} /></div><p>{audience === "advisor" ? "Deel de definitieve briefing met de leveranciers" : "Bevestig de gewenste functionaliteiten"}</p><dl><div><dt>Eigenaar</dt><dd>{audience === "advisor" ? "NKC" : mode === "eigen" ? "Klant" : "NKC"}</dd></div><div><dt>Deadline</dt><dd>Over 8 dagen</dd></div><div><dt>Status</dt><dd><span className="status-chip waiting">{audience === "advisor" ? "2 reacties ontvangen" : `Wacht op ${mode === "eigen" ? "klant" : "NKC"}`}</span></dd></div></dl><div className="action-button-row"><button className="outline-button" type="button">Open actie <ArrowRight size={17} /></button><button className={reminderSent ? "reminder-button sent" : "reminder-button"} type="button" onClick={() => setReminderSent(true)}>{reminderSent ? "Herinnering verstuurd" : "Stuur herinnering"}</button></div></section>
    <section className="dossier-agreements-card"><div className="side-heading"><h2>Afspraken &amp; voortgang</h2><ClipboardList size={19} /></div><dl><div><dt>Huidige fase</dt><dd>Marktscan door NKC</dd></div><div><dt>Communicatie</dt><dd>Via Selectiehulp</dd></div><div><dt>Kennismakingen</dt><dd>NKC plant en begeleidt</dd></div></dl><p>Leveranciers ontvangen alleen de goedgekeurde dossierinformatie.</p></section>
    <section className="dossier-actions-card"><div className="side-heading"><h2>Dossieracties</h2><ClipboardList size={19} /></div><div className="sidebar-action-list"><article><span className="collab-icon"><MessageCircle size={19} /></span><div><b>Gesprekken</b><p>2 gesprekken vragen om reactie</p><small>Laatste bericht vandaag</small></div><ChevronRight size={18} /></article><article><span className="collab-icon"><FileText size={19} /></span><div><b>Bestanden</b><p>Briefing en huidige situatie</p><small>Alleen zichtbaar voor betrokkenen</small></div><ChevronRight size={18} /></article><article><span className="collab-icon"><Users size={19} /></span><div><b>Volgende afspraak</b><p>Plan een kennismaking</p><small>Nog niet ingepland</small></div><ChevronRight size={18} /></article></div></section>
    <section className="dossier-update-card"><div className="side-heading"><h2>Dossierupdate</h2><FileText size={19} /></div><p><b>{readyForMeetings ? "Klaar voor kennismakingen" : "Werkversie"}</b><small>Laatst bijgewerkt vandaag om 11:08</small></p><button className={readyForMeetings ? "ready-button active" : "ready-button"} type="button" onClick={() => setReadyForMeetings((ready) => !ready)}>{readyForMeetings ? "Definitieve versie gedeeld" : "Markeer als definitief"}</button><button className="text-action" type="button">Stuur dossierupdate</button></section>
    <section className="info-card"><div className="side-heading"><h2>Bedrijfsinformatie</h2><ChevronDown size={19} /></div><div className="info-list advisor-info"><span><MapPin size={19} /> Postbus 28, Klimmen</span><a href="https://www.klimwandspecialist.nl"><Globe2 size={19} /> www.klimwandspecialist.nl</a><a href="mailto:fhm@klimwandspecialist.nl"><Mail size={19} /> fhm@klimwandspecialist.nl</a><a href="tel:+31434506004"><Phone size={19} /> (0)43 450 6004</a></div><div className="profile-tools"><button type="button" onClick={() => setGeneralQuestionOpen((isOpen) => !isOpen)}><MessageSquare size={21} /> Algemene vraag</button><button type="button"><Share2 size={21} /> Deel met collega</button><button type="button"><Heart size={21} /> Maak favoriet</button></div></section>
    {generalQuestionOpen && <section className="general-question-card"><div className="side-heading"><h2>Vraag aan NKC</h2><MessageSquare size={19} /></div><p>Deze vraag staat los van een dossier en is alleen zichtbaar voor jou en NKC.</p><form onSubmit={(event) => event.preventDefault()}><textarea rows="4" placeholder="Stel je algemene vraag..." /><button className="attachment-button" type="button"><FileText size={16} /> Bijlage</button><button className="primary-button" type="submit"><Send size={16} /> Versturen</button></form></section>}
    <section className="contact-card"><h2>Vragen over deze gebruiker?</h2><div><img src="/figma/side-2.png" alt="Dave, client manager NKC" /><span><b>Dave</b><small>Client manager NKC</small></span><a href="mailto:info@nederlandskenniscentrum.nl" className="primary-button compact"><MessageSquare size={20} /> Stel vraag</a></div></section>
    <section className="contacts-card"><div className="side-heading"><h2>Contactpersonen</h2><ChevronDown size={19} /></div><div className="contact-person"><img src="/figma/tab-4.png" alt="Frank Heinemans" /><span><b>Frank Heinemans</b></span><MessageCircle size={22} /></div><div className="contact-person"><img src="/figma/tab-9.png" alt="Pieter Wolbers" /><span><b>Pieter Wolbers</b><small>Adviseur</small></span></div></section>
  </aside>;
}

function Footer() {
  return <footer id="footer"><section className="platform-cta"><div><small>Meer dan <b>3.000 organisaties</b> gingen je voor</small><h2>Start jouw softwareselectie<br />in ons platform</h2><div className="cta-actions"><a className="primary-button" href="#top">Login <UsersRound size={17} /></a><a className="light-button" href="#top"><UsersRound size={17} /> Maak een account</a></div></div><img className="signpost" src="/figma/signpost.svg" alt="" aria-hidden="true" /><ul><li>Start direct jouw softwareselectie</li><li>Gratis &amp; onafhankelijk</li><li>15+ jaar praktijkervaring</li></ul></section><section className="footer-main"><div className="newsletter"><div><h2>Meld je aan voor de nieuwsbrief</h2><p>Alles op het gebied van softwareselectie in je inbox.</p></div><form onSubmit={(event) => event.preventDefault()}><input aria-label="E-mailadres" placeholder="E-mailadres" type="email" /><button className="peach-button" type="submit"><Send size={17} /> Nu inschrijven</button></form></div><div className="footer-links"><div><h3>Nederlands<br />KennisCentrum</h3><p>Oude Langendijk 25b<br />2611 GL Delft<br />Bekijk route</p><p><Phone size={14} /> +31 (0) 15 204 96 16</p><p><Mail size={14} /> info@nederlandskenniscentrum.nl</p></div><div><h3>Maak kennis met</h3><a href="#top">Onze leveranciers</a><a href="#top">Onze referenties</a><a href="#top">Onze matches</a><a href="#top">Onze visie</a></div><div><h3>Kennisbank</h3><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Bekijk alle <ArrowRight size={15} /></a></div><div className="help-card"><b>NKC <span>selectiehulp</span></b><p>Start jouw softwareselectie met onafhankelijk advies en krijg inzicht in de juiste oplossingen voor je organisatie, branche en groeiplannen.</p><a href="#top">Naar de selectiehulp <UsersRound size={17} /></a><a href="#top">Aanmelden als leverancier <ArrowRight size={17} /></a></div></div><div className="footer-bottom"><span>© 2026 Nederlands KennisCentrum</span><span>Algemene voorwaarden &nbsp;&nbsp; Privacybeleid &nbsp;&nbsp; Cookies</span></div></section></footer>;
}

export function App() {
  const [mode, setMode] = useState("eigen");
  const [audience, setAudience] = useState("supplier");
  return <div id="top"><Header audience={audience} /><main><div className="breadcrumb"><span>⌂</span><ChevronRight size={14} /> Klimwandspecialist</div><WorkspaceControls mode={mode} onModeChange={setMode} audience={audience} onAudienceChange={setAudience} /><div className="page-grid"><MainContent mode={mode} audience={audience} /><Sidebar mode={mode} audience={audience} /></div></main><Footer /></div>;
}
