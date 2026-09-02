import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  ExternalLink,
  Globe2,
  Heart,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Send,
  Share2,
  Star,
  UsersRound,
} from "lucide-react";

const shortlist = [
  ["HUSS", "85% matchscore", "tab-1.png", "Gematched"],
  ["Odoo", "78% matchscore", "profile-2.png", "Demo gedaan"],
  ["Kjenner", "78% matchscore", "tab-3.png", "Demo gedaan"],
  ["DK software", "68% matchscore", "tab-4.png", "Niet gematched"],
  ["ECI - Inventive ERP Software", "68% matchscore", "tab-5.png", "Niet gematched"],
  ["Simplicate", "68% matchscore", "tab-6.png", "Niet gematched"],
];

const reviews = [
  {
    company: "HUSS",
    logo: "tab-1.png",
    quote:
      "In eerste instantie kwamen ze niet direct goed uit de bus omdat hun website hen echt niet kon overtuigen. Het gesprek echter was super goed daarentegen en deed hen direct hun mening aanpassen. Mooie visie die net anders was dan de anderen.",
    strong: ["Inzichtelijke rapportages", "BI-koppeling beschikbaar", "Transparante fixed fee EUR 15.000", "Vergelijkbare bedrijfsgrootte"],
    attention: ["Platform relatief jong", "Jira-integratie onduidelijk", "Verschil project-/bewonerswerk niet getoond"],
  },
  {
    company: "Cravit - Odoo Implementaties",
    logo: "tab-7.png",
    quote:
      "In eerste instantie kwamen ze niet direct goed uit de bus omdat hun website hen echt niet kon overtuigen. Het gesprek echter was super goed daarentegen en deed hen direct hun mening aanpassen. Mooie visie die net anders was dan de anderen.",
  },
  {
    company: "UNCONTA",
    logo: "tab-8.png",
    quote:
      "In eerste instantie kwamen ze niet direct goed uit de bus omdat hun website hen echt niet kon overtuigen. Het gesprek echter was super goed daarentegen en deed hen direct hun mening aanpassen. Mooie visie die net anders was dan de anderen.",
  },
];

function IconButton({ label, children, className = "" }) {
  return (
    <button className={`icon-button ${className}`} type="button" title={label} aria-label={label}>
      {children}
    </button>
  );
}

function Header() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span><ClipboardCheck size={13} /> 11.433 organisaties gratis gematched</span>
          <span><Star size={13} /> 9,2 uit 2100+ reviews</span>
          <span><Landmark size={13} /> 15+ jaar echte praktijkervaring</span>
          <span><Heart size={13} /> Favorieten</span>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <button className="menu-button" type="button"><Menu size={20} /> <span>Menu</span></button>
          <a className="nkc-logo" href="#top" aria-label="Nederlands KennisCentrum">
            <strong>NKC</strong><span>Nederlands<br />KennisCentrum</span>
          </a>
          <button className="user-menu" type="button"><span className="user-dot">M</span><span>Martin Bronger<br /><small>ABCm</small></span><ChevronDown size={15} /></button>
        </div>
      </header>
    </>
  );
}

function ProfileCard() {
  const [favorite, setFavorite] = useState(false);
  return (
    <article className="profile-card">
      <div className="hero-image">
        <img src="/figma/profile-1.png" alt="Klimmer op een klimwand" />
        <button className={`favorite-button ${favorite ? "is-active" : ""}`} type="button" onClick={() => setFavorite(!favorite)} aria-label="Markeer als favoriet" title="Markeer als favoriet">
          <Heart size={20} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="profile-content">
        <img className="company-logo" src="/figma/profile-5.png" alt="Klimwandspecialist" />
        <h1>Klimwandspecialist</h1>
        <p className="location"><MapPin size={17} /> Klimmen</p>
        <p className="intro">Deze organisatie opereert als onafhankelijke leverancier van klimfaciliteiten en gerelateerde producten voor diverse marktsegmenten. Het bedrijf richt zich op de levering van klimwanden voor zowel binnen- als buitengebruik, boulderstructuren, klimgrepen en aanverwante materialen.</p>
        <div className="profile-actions">
          <button className="outline-button" type="button">Lees meer</button>
          <a className="text-link" href="https://www.klimwandspecialist.nl" target="_blank" rel="noreferrer"><Globe2 size={18} /> Bekijk website</a>
        </div>
        <div className="tag-rows">
          <div className="tag-row"><span>Branches</span><div><em><BriefcaseBusiness size={15} /> Bouw/Installatie</em><em><BriefcaseBusiness size={15} /> Overige groothandel</em><em>+2</em></div></div>
          <div className="tag-row"><span>Bedrijfsgroottes</span><div><em>15 - 50 medewerkers</em></div></div>
        </div>
      </div>
    </article>
  );
}

function Accordion({ icon: Icon, title, count, open, onToggle, children }) {
  return (
    <section className={`accordion ${open ? "open" : ""}`}>
      <button className="accordion-header" type="button" onClick={onToggle} aria-expanded={open}>
        <span><Icon size={20} /> <b>{title}</b> <small>({count})</small></span>
        <ChevronDown size={21} />
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </section>
  );
}

function Shortlist() {
  return <div className="shortlist">{shortlist.map(([name, score, logo, status]) => (
    <div className="company-row" key={name}>
      <img src={`/figma/${logo}`} alt="" />
      <div><b>{name}</b><small>{score}</small></div>
      <span className={`status ${status === "Gematched" ? "matched" : ""}`}>{status}</span>
    </div>
  ))}</div>;
}

function ReviewCard({ review, first }) {
  return (
    <article className={`review-card ${first ? "primary" : ""}`}>
      <div className="review-company"><img src={`/figma/${review.logo}`} alt="" /><div><b>{review.company}</b><small><Building2 size={12} /> Groothandel</small></div>{first && <span className="status matched">Gematched</span>}</div>
      <p>"{review.quote}"</p>
      {first && <div className="review-points"><div><b>Sterke punten</b>{review.strong.map((item) => <span key={item}><ChevronRight size={14} /> {item}</span>)}</div><div><b>Aandachtspunten</b>{review.attention.map((item) => <span key={item}><i /> {item}</span>)}</div></div>}
    </article>
  );
}

function Interview() {
  return <article className="interview-card"><div className="interview-person"><img src="/figma/tab-4.png" alt="Frank Heinemans" /><div><b>Frank Heinemans</b><small>Klimwandspecialist</small></div></div><p>Heel duidelijk gesprek: wat goed uiteen is gezet hoe we te werk gaan en wat we gaan doen. Normaliter is de organisatie totaal niet van het in vertrouwen nemen van dergelijke externe initiatieven maar in dit geval was het vertrouwen er direct. Heldere uitleg van hoe de diverse partijen tot stand zijn gekomen en hoe deze zich verhouden ten opzichte van hun organisatie.</p><p>Iedereen was zeer capabel en kon een goede oplossing aandragen voor hun specifieke situatie. Er lag een lastig vraagstuk waarom zowel veel service als productie aan bod kwamen en dit geen doorsnee oplossing heeft. Uiteindelijk bleek er een sterke voorkeur voor de alles-in-1 oplossingen.</p><p>Zeer tevreden met de enorme kennis waarvan ze gebruik hebben kunnen maken. Zou je het NKC aanbevelen? Absoluut.</p></article>;
}

function MainContent() {
  const [sections, setSections] = useState({ shortlist: true, similar: false, reviews: true, interview: true });
  const toggle = (name) => setSections((current) => ({ ...current, [name]: !current[name] }));
  return <div className="left-column"><ProfileCard /><div className="accordions">
    <Accordion icon={ClipboardCheck} title="Shortlist" count="7" open={sections.shortlist} onToggle={() => toggle("shortlist")}><Shortlist /></Accordion>
    <Accordion icon={Building2} title="Vergelijkbare organisaties" count="4" open={sections.similar} onToggle={() => toggle("similar")}><p className="empty-copy">Vergelijkbare organisaties verschijnen hier zodra ze beschikbaar zijn.</p></Accordion>
    <Accordion icon={MessageSquare} title="Beoordeelde matches" count="3" open={sections.reviews} onToggle={() => toggle("reviews")}>{reviews.map((review, index) => <ReviewCard key={review.company} review={review} first={index === 0} />)}</Accordion>
    <Accordion icon={Landmark} title="Interview" count="1" open={sections.interview} onToggle={() => toggle("interview")}><Interview /></Accordion>
  </div></div>;
}

function Sidebar() {
  return <aside className="sidebar">
    <section className="selection-card" id="selectie"><h2>Start jouw selectie met NKC</h2><p>Vind in 5 stappen de leveranciers die bij jouw situatie passen via dezelfde aanpak als Klimwandspecialist</p><a href="#footer" className="primary-button"><ArrowRight size={20} /> Start selectie</a></section>
    <section className="info-card"><h2>Bedrijfsinformatie</h2><div className="info-list"><span><MapPin size={19} /> Postbus 28, 6343 ZG Klimmen</span><a href="tel:+31434506004"><Phone size={19} /> 31 (0)43 4506004</a><a href="mailto:info@klimwandspecialist.nl"><Mail size={19} /> info@klimwandspecialist.nl</a><a href="https://www.klimwandspecialist.nl"><Globe2 size={19} /> www.klimwandspecialist.nl</a></div><div className="profile-tools"><button type="button"><MessageSquare size={21} /> Stel een vraag</button><button type="button"><Share2 size={21} /> Deel met collega</button><button type="button"><Heart size={21} /> Markeer favoriet</button></div></section>
    <section className="contact-card"><h2>Vragen over deze gebruiker?</h2><div><img src="/figma/side-2.png" alt="Dave, client manager NKC" /><span><b>Dave</b><small>Client manager NKC</small></span><a href="mailto:info@nederlandskenniscentrum.nl" className="primary-button compact"><MessageSquare size={20} /> Stel vraag</a></div></section>
  </aside>;
}

function Footer() {
  return <footer id="footer"><section className="platform-cta"><div><small>Meer dan <b>3.000 organisaties</b> gingen je voor</small><h2>Start jouw softwareselectie<br />in ons platform</h2><div className="cta-actions"><a className="primary-button" href="#selectie">Login <UsersRound size={17} /></a><a className="light-button" href="#top"><UsersRound size={17} /> Maak een account</a></div></div><div className="signpost" aria-hidden="true"><strong>NKC</strong><span /><span /><span /></div><ul><li>Start direct jouw softwareselectie</li><li>Gratis &amp; onafhankelijk</li><li>15+ jaar praktijkervaring</li></ul></section><section className="footer-main"><div className="newsletter"><div><h2>Meld je aan voor de nieuwsbrief</h2><p>Alles op het gebied van softwareselectie in je inbox.</p></div><form onSubmit={(event) => event.preventDefault()}><input aria-label="E-mailadres" placeholder="E-mailadres" type="email" /><button className="peach-button" type="submit"><Send size={17} /> Nu inschrijven</button></form></div><div className="footer-links"><div><h3>Nederlands<br />KennisCentrum</h3><p>Oude Langendijk 25b<br />2611 GL Delft<br />Bekijk route</p><p><Phone size={14} /> +31 (0) 15 204 96 16</p><p><Mail size={14} /> info@nederlandskenniscentrum.nl</p></div><div><h3>Maak kennis met</h3><a href="#top">Onze leveranciers</a><a href="#top">Onze referenties</a><a href="#top">Onze matches</a><a href="#top">Onze visie</a></div><div><h3>Kennisbank</h3><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Een titel van een kennisartikel...</a><a href="#top">Bekijk alle <ArrowRight size={15} /></a></div><div className="help-card"><b>NKC <span>selectiehulp</span></b><p>Start jouw softwareselectie met onafhankelijk advies en krijg inzicht in de juiste oplossingen voor je organisatie, branche en groeiplannen.</p><a href="#selectie">Naar de selectiehulp <UsersRound size={17} /></a><a href="#top">Aanmelden als leverancier <ArrowRight size={17} /></a></div></div><div className="footer-bottom"><span>© 2026 Nederlands KennisCentrum</span><span>Algemene voorwaarden &nbsp;&nbsp; Privacybeleid &nbsp;&nbsp; Cookies</span></div></section></footer>;
}

export function App() {
  return <div id="top"><Header /><main><div className="breadcrumb"><span>⌂</span><ChevronRight size={14} /> Klimwandspecialist</div><div className="page-grid"><MainContent /><Sidebar /></div></main><Footer /></div>;
}
