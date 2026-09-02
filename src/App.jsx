import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Globe2,
  Heart,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  Share2,
  Star,
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

function Header() {
  return <>
    <div className="topbar"><div className="topbar-inner"><span><ClipboardList size={13} /> 11.433 organisaties gratis gematched</span><span><Star size={13} /> 9,2 uit 2100+ reviews</span><span><Landmark size={13} /> 15+ jaar echte praktijkervaring</span><span><Heart size={13} /> Favorieten</span></div></div>
    <header className="site-header"><div className="header-inner"><button className="menu-button" type="button"><Menu size={20} /> <span>Menu</span></button><a className="nkc-logo" href="#top" aria-label="Nederlands KennisCentrum"><strong>NKC</strong><span>Nederlands<br />KennisCentrum</span></a><button className="user-menu" type="button"><span className="user-dot">M</span><span>Martin Bronger<br /><small>ABCm</small></span><ChevronDown size={15} /></button></div></header>
  </>;
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
    {open && <div className="dossier-content"><p className="dossier-date">donderdag 4 juli 2020</p><section><h2>Huidige situatie</h2><p>De activiteit van dit bedrijf bestaat uit een groothandel voor klimwand benodigdheden voor winkels, klimhallen, defensie enz. Naast de verkoop van artikelen verrichten ze ook onderhoud en advies. Momenteel gebruiken ze enkel Exact Online voor de boekhouding en missen ze inzicht in taken, voorraden wat ze willen aanpassen door aanschaf van een ERP systeem.</p></section><section><h2>Gewenste situatie</h2><p>Ze ontwerpen zelf items welke ze bij externe laten produceren, de productie hoeft niet in het systeem. Ze hebben een artikel en een gebruiksvoorraad waar ze graag inzicht en planning willen hebben. Voor de losse verkoop hebben ze een webshop, voor de projecten waar ze de uren en materialen en onderdelen willen ze graag de orderstatus van items kunnen plannen en de uren kunnen bijhouden. Middels CRM functionaliteiten willen ze aanvragen en klantgedrag kunnen monitoren. Ze doen vooral zaken in Nederland en Belgie en hebben 1 NL administratie te voeren.</p><p>De pijnpunten welke de kernselectiepunten zijn:<br />- Inzicht in huidige statussen<br />- Taken zijn momenteel niet te volgen<br />- Voorraad bijhouden</p><p>Het bijhouden van de certificering en onderhoud in het ERP systeem zou handig zijn maar is geen harde wens, dit doen ze nu in excel.</p><p>Ze hanteren geen kleur/maattabellen, enkel artikelnummers.</p></section></div>}
  </section>;
}

function MainContent() {
  return <div className="left-column"><ProfileCard /><DossierCard /></div>;
}

function Sidebar() {
  return <aside className="sidebar advisor-sidebar">
    <section className="info-card"><div className="side-heading"><h2>Bedrijfsinformatie</h2><ChevronDown size={19} /></div><div className="info-list advisor-info"><span><MapPin size={19} /> Postbus 28, Klimmen</span><a href="https://www.klimwandspecialist.nl"><Globe2 size={19} /> www.klimwandspecialist.nl</a><a href="mailto:fhm@klimwandspecialist.nl"><Mail size={19} /> fhm@klimwandspecialist.nl</a><a href="tel:+31434506004"><Phone size={19} /> (0)43 450 6004</a></div><div className="profile-tools"><button type="button"><MessageSquare size={21} /> Stel een vraag</button><button type="button"><Share2 size={21} /> Deel met collega</button><button type="button"><Heart size={21} /> Maak favoriet</button></div></section>
    <section className="contact-card"><h2>Vragen over deze gebruiker?</h2><div><img src="/figma/side-2.png" alt="Dave, client manager NKC" /><span><b>Dave</b><small>Client manager NKC</small></span><a href="mailto:info@nederlandskenniscentrum.nl" className="primary-button compact"><MessageSquare size={20} /> Stel vraag</a></div></section>
    <section className="contacts-card"><div className="side-heading"><h2>Contactpersonen</h2><ChevronDown size={19} /></div><div className="contact-person"><img src="/figma/tab-4.png" alt="Frank Heinemans" /><span><b>Frank Heinemans</b></span><MessageCircle size={22} /></div><div className="contact-person"><img src="/figma/tab-9.png" alt="Pieter Wolbers" /><span><b>Pieter Wolbers</b><small>Adviseur</small></span></div></section>
  </aside>;
}

function Footer() {
  return <footer id="footer"><section className="platform-cta"><div><small>Meer dan <b>3.000 organisaties</b> gingen je voor</small><h2>Start jouw softwareselectie<br />in ons platform</h2><div className="cta-actions"><a className="primary-button" href="#top">Login <UsersRound size={17} /></a><a className="light-button" href="#top"><UsersRound size={17} /> Maak een account</a></div></div><img className="signpost" src="/figma/signpost.svg" alt="" aria-hidden="true" /><ul><li>Start direct jouw softwareselectie</li><li>Gratis &amp; onafhankelijk</li><li>15+ jaar praktijkervaring</li></ul></section><section className="footer-main"><div className="newsletter"><div><h2>Meld je aan voor de nieuwsbrief</h2><p>Alles op het gebied van softwareselectie in je inbox.</p></div><form onSubmit={(event) => event.preventDefault()}><input aria-label="E-mailadres" placeholder="E-mailadres" type="email" /><button className="peach-button" type="submit"><Send size={17} /> Nu inschrijven</button></form></div><div className="footer-links"><div><h3>Nederlands<br />KennisCentrum</h3><p>Oude Langendijk 25b<br />2611 GL Delft<br />Bekijk route</p><p><Phone size={14} /> +31 (0) 15 204 96 16</p><p><Mail size={14} /> info@nederlandskenniscentrum.nl</p></div><div><h3>Maak kennis met</h3><a href="#top">Onze leveranciers</a><a href="#top">Onze referenties</a><a href="#top">Onze matches</a><a href="#top">Onze visie</a></div><div><h3>Kennisbank</h3><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Bekijk alle <ArrowRight size={15} /></a></div><div className="help-card"><b>NKC <span>selectiehulp</span></b><p>Start jouw softwareselectie met onafhankelijk advies en krijg inzicht in de juiste oplossingen voor je organisatie, branche en groeiplannen.</p><a href="#top">Naar de selectiehulp <UsersRound size={17} /></a><a href="#top">Aanmelden als leverancier <ArrowRight size={17} /></a></div></div><div className="footer-bottom"><span>© 2026 Nederlands KennisCentrum</span><span>Algemene voorwaarden &nbsp;&nbsp; Privacybeleid &nbsp;&nbsp; Cookies</span></div></section></footer>;
}

export function App() {
  return <div id="top"><Header /><main><div className="breadcrumb"><span>⌂</span><ChevronRight size={14} /> Klimwandspecialist</div><div className="page-grid"><MainContent /><Sidebar /></div></main><Footer /></div>;
}
