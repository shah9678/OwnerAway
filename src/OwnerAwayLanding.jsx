import React, { useState } from "react";
import {
  Menu, X, ShieldCheck, Users, BarChart3, Play, AlertCircle, CheckCircle2,
  ArrowRight, ClipboardList, Search, CalendarCheck, Settings, UserCog, Lock,
  MessageCircle, Truck, CircleDollarSign, Wrench, FileText, KeyRound, Axe,
  PersonStanding, Gamepad2, Building2, UserCheck, ClipboardCheck, MailOpen,
  AlertTriangle, CalendarDays, Plane
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const NAV = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#what-we-handle" },
  { label: "Industries", href: "#industries" },
  { label: "Why OwnerAway", href: "#trust" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#apply" },
];

const HERO_FEATURES = [
  { icon: ShieldCheck, title: "Peace of Mind", sub: "Your business is in good hands." },
  { icon: Users, title: "Trained Operators", sub: "Experienced, vetted & reliable." },
  { icon: BarChart3, title: "Daily Reporting", sub: "Stay informed every day." },
];

const STEPS = [
  { icon: ClipboardList, title: "Tell Us About Your Business", sub: "Share your operations, needs, and coverage dates." },
  { icon: Search, title: "We Review Your Operations", sub: "We learn your business and assess requirements." },
  { icon: CalendarCheck, title: "We Prepare a Coverage Plan", sub: "We build a custom plan for a smooth handoff." },
  { icon: Plane, title: "You Take Off, We Take Over", sub: "We manage operations and send daily updates." },
];

const HANDLE = [
  { icon: Settings, label: "Daily Operations" },
  { icon: UserCog, label: "Staff Supervision" },
  { icon: Lock, label: "Opening / Closing Procedures" },
  { icon: MessageCircle, label: "Customer Issue Handling" },
  { icon: Truck, label: "Vendor Coordination" },
  { icon: CircleDollarSign, label: "Cash / POS Management" },
  { icon: Wrench, label: "Maintenance Oversight" },
  { icon: FileText, label: "Daily Reports & Updates" },
];

const INDUSTRIES = [
  { icon: KeyRound, label: "Escape Rooms" },
  { icon: Axe, label: "Axe Throwing Venues" },
  { icon: PersonStanding, label: "Trampoline Parks" },
  { icon: Users, label: "Family Entertainment Centers" },
  { icon: Gamepad2, label: "Indoor Activity Venues" },
  { icon: Building2, label: "Hotels / Motels", note: "Coming Soon" },
];

const TRUST = [
  { icon: UserCheck, label: "Background-Checked Operators" },
  { icon: ShieldCheck, label: "Confidentiality & NDA" },
  { icon: ClipboardCheck, label: "Clear Scope of Work" },
  { icon: MailOpen, label: "Daily Owner Updates" },
  { icon: Lock, label: "Limited System Access" },
  { icon: AlertTriangle, label: "Emergency Escalation Plan" },
  { icon: ShieldCheck, label: "Insurance Coverage*" },
];

const BUSINESS_TYPES = [
  "Escape Room", "Axe Throwing Venue", "Trampoline Park",
  "Family Entertainment Center", "Indoor Activity Venue",
  "Hotel / Motel", "Other",
];

/* ------------------------------------------------------------------ */
/*  Social icons (inline SVG — lucide removed brand icons)             */
/* ------------------------------------------------------------------ */

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9V9Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Logo                                                               */
/* ------------------------------------------------------------------ */

function Logo({ light = false }) {
  return (
    <a href="#top" className="oa-logo" aria-label="OwnerAway home">
      <span className="oa-logo-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="34" height="34">
          <circle cx="24" cy="24" r="22" fill="none"
            stroke={light ? "#fff" : "#0a2342"} strokeWidth="3" />
          <path d="M24 12a8 8 0 0 1 4 14.9V32a4 4 0 1 1-8 0v-5.1A8 8 0 0 1 24 12Z"
            fill="#f5b82e" />
          <circle cx="24" cy="20" r="3.2" fill="#0a2342" />
        </svg>
      </span>
      <span className="oa-logo-text" style={{ color: light ? "#fff" : "#0a2342" }}>
        <strong>OWNER</strong><span style={{ color: "#f5b82e" }}>AWAY</span>
        <small>WE RUN IT. WHILE YOU'RE AWAY.</small>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Form                                                               */
/* ------------------------------------------------------------------ */

const FIELDS = [
  { name: "fullName", label: "Full name", type: "text", required: true, auto: "name" },
  { name: "businessName", label: "Business name", type: "text", required: true, auto: "organization" },
  { name: "businessType", label: "Business type", type: "select", required: true },
  { name: "location", label: "City, state", type: "text", required: false, auto: "address-level2" },
  { name: "email", label: "Email", type: "email", required: true, auto: "email" },
  { name: "phone", label: "Phone number", type: "tel", required: false, auto: "tel" },
];

function ApplyForm() {
  const empty = { fullName: "", businessName: "", businessType: "", location: "", email: "", phone: "" };
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (name, v) => {
    setValues((s) => ({ ...s, [name]: v }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!values.fullName.trim()) e.fullName = "Please enter your name.";
    if (!values.businessName.trim()) e.businessName = "Please enter your business name.";
    if (!values.businessType) e.businessType = "Please select a business type.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email address.";
    if (values.phone && !/^[\d\s()+.-]{7,}$/.test(values.phone)) e.phone = "Enter a valid phone number.";
    return e;
  };

  const submit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="oa-form-success" role="status" aria-live="polite">
        <CheckCircle2 size={44} aria-hidden="true" />
        <h3>Application received</h3>
        <p>Thanks, {values.fullName.split(" ")[0]}. A member of our team will reach
          out within one business day to talk through your pilot coverage.</p>
      </div>
    );
  }

  return (
    <div className="oa-form" aria-describedby="form-help">
      <p id="form-help" className="oa-sr-only">
        Fields marked with an asterisk are required.
      </p>
      <div className="oa-form-grid">
        {FIELDS.map((f) => {
          const errId = `${f.name}-err`;
          const invalid = !!errors[f.name];
          return (
            <div key={f.name} className="oa-field">
              <label htmlFor={f.name}>
                {f.label}{f.required && <span className="oa-req" aria-hidden="true"> *</span>}
              </label>
              {f.type === "select" ? (
                <select
                  id={f.name}
                  value={values[f.name]}
                  aria-required={f.required}
                  aria-invalid={invalid}
                  aria-describedby={invalid ? errId : undefined}
                  onChange={(ev) => update(f.name, ev.target.value)}
                >
                  <option value="" disabled>Select…</option>
                  {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              ) : (
                <input
                  id={f.name}
                  type={f.type}
                  value={values[f.name]}
                  autoComplete={f.auto}
                  aria-required={f.required}
                  aria-invalid={invalid}
                  aria-describedby={invalid ? errId : undefined}
                  onChange={(ev) => update(f.name, ev.target.value)}
                  onKeyDown={(ev) => ev.key === "Enter" && submit()}
                />
              )}
              {invalid && (
                <span id={errId} className="oa-err" role="alert">
                  <AlertCircle size={13} aria-hidden="true" /> {errors[f.name]}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <button type="button" className="oa-btn oa-btn-gold oa-btn-block" onClick={submit}>
        Apply for Pilot Coverage
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function OwnerAwayLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="oa-root" id="top">
      <style>{CSS}</style>

      <a href="#main" className="oa-skip">Skip to main content</a>

      {/* ---------------- Header ---------------- */}
      <header className="oa-header">
        <div className="oa-container oa-header-inner">
          <Logo />
          <nav className="oa-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <a href="#apply" className="oa-btn oa-btn-navy oa-header-cta">Request Coverage</a>
          <button
            className="oa-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" className="oa-mobile-nav" aria-label="Mobile">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>
            ))}
            <a href="#apply" className="oa-btn oa-btn-gold" onClick={() => setMenuOpen(false)}>
              Request Coverage
            </a>
          </nav>
        )}
      </header>

      <main id="main">
        {/* ---------------- Hero ---------------- */}
        <section className="oa-hero" aria-labelledby="hero-h">
          <div className="oa-hero-bg" aria-hidden="true">
            <div className="oa-glow oa-glow-amber" />
            <div className="oa-glow oa-glow-cyan" />
            <div className="oa-glow oa-glow-magenta" />
            <div className="oa-hero-grid" />
          </div>
          <div className="oa-container oa-hero-inner">
            <p className="oa-eyebrow oa-fade" style={{ animationDelay: ".05s" }}>
              Temporary operational coverage
            </p>
            <h1 id="hero-h" className="oa-fade" style={{ animationDelay: ".1s" }}>
              You Take Off.<br /><span className="oa-gold">We Take Over.</span>
            </h1>
            <p className="oa-hero-lede oa-fade" style={{ animationDelay: ".2s" }}>
              OwnerAway provides temporary operational coverage so business owners
              can step away with confidence.
            </p>

            <ul className="oa-hero-features oa-fade" style={{ animationDelay: ".3s" }}>
              {HERO_FEATURES.map((f) => (
                <li key={f.title}>
                  <f.icon size={22} className="oa-gold" aria-hidden="true" />
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.sub}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="oa-hero-cta oa-fade" style={{ animationDelay: ".4s" }}>
              <a href="#apply" className="oa-btn oa-btn-gold">Request Pilot Coverage</a>
              <a href="#how-it-works" className="oa-btn oa-btn-ghost">
                <Play size={16} aria-hidden="true" /> How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Problem / Solution ---------------- */}
        <section className="oa-section oa-ps" aria-labelledby="ps-h">
          <h2 id="ps-h" className="oa-sr-only">The problem and our solution</h2>
          <div className="oa-container oa-ps-grid">
            <div className="oa-ps-col">
              <p className="oa-ps-tag oa-tag-red">
                <span className="oa-tag-dot oa-dot-red"><AlertCircle size={16} aria-hidden="true" /></span>
                THE PROBLEM
              </p>
              <h3>You built the business. But the business can't run without you.</h3>
              <p>Most owners can't take a real vacation because they worry about staff,
                operations, and customers.</p>
            </div>

            <div className="oa-ps-arrow" aria-hidden="true">
              <ArrowRight size={22} />
            </div>

            <div className="oa-ps-col">
              <p className="oa-ps-tag oa-tag-green">
                <span className="oa-tag-dot oa-dot-green"><CheckCircle2 size={16} aria-hidden="true" /></span>
                OUR SOLUTION
              </p>
              <h3>We provide trusted temporary operators to manage your day-to-day
                operations while you're away.</h3>
              <p>Your business stays open, your team stays on track, and you get the
                break you deserve.</p>
            </div>
          </div>
        </section>

        {/* ---------------- How It Works ---------------- */}
        <section id="how-it-works" className="oa-section oa-howto" aria-labelledby="how-h">
          <div className="oa-container">
            <h2 id="how-h" className="oa-h2 oa-center">How It Works</h2>
            <ol className="oa-steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <div className="oa-step-badge">
                    <s.icon size={30} aria-hidden="true" />
                    <span className="oa-step-num" aria-hidden="true">{i + 1}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.sub}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- What We Handle / Industries ---------------- */}
        <section className="oa-section oa-two" aria-label="Services and industries">
          <div className="oa-container oa-two-grid">
            <div id="what-we-handle">
              <h2 className="oa-h2 oa-center">What We Handle</h2>
              <ul className="oa-icon-grid">
                {HANDLE.map((h) => (
                  <li key={h.label}>
                    <span className="oa-icon-chip"><h.icon size={26} aria-hidden="true" /></span>
                    <span className="oa-icon-label">{h.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="industries">
              <h2 className="oa-h2 oa-center">Industries We Serve</h2>
              <ul className="oa-icon-grid oa-icon-grid-3">
                {INDUSTRIES.map((it) => (
                  <li key={it.label}>
                    <span className="oa-icon-chip"><it.icon size={28} aria-hidden="true" /></span>
                    <span className="oa-icon-label">{it.label}</span>
                    {it.note && <span className="oa-icon-note">({it.note})</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- Trust & Safety ---------------- */}
        <section id="trust" className="oa-section oa-trust" aria-labelledby="trust-h">
          <div className="oa-container">
            <h2 id="trust-h" className="oa-h2 oa-center">Trust &amp; Safety Is Our Priority</h2>
            <ul className="oa-trust-grid">
              {TRUST.map((t) => (
                <li key={t.label}>
                  <span className="oa-trust-icon"><t.icon size={26} aria-hidden="true" /></span>
                  <span>{t.label}</span>
                </li>
              ))}
            </ul>
            <p className="oa-trust-note">*Insurance available as we scale.</p>
          </div>
        </section>

        {/* ---------------- CTA + Form ---------------- */}
        <section id="apply" className="oa-section oa-cta" aria-labelledby="cta-h">
          <div className="oa-container oa-cta-grid">
            <div className="oa-cta-copy">
              <span className="oa-cta-icon" aria-hidden="true"><CalendarDays size={30} /></span>
              <h2 id="cta-h">Ready to take a real break?</h2>
              <p className="oa-cta-lead">Apply for our limited pilot program.</p>
              <p className="oa-cta-sub">Pricing depends on business type, coverage length,
                and operational complexity.</p>
            </div>
            <div className="oa-cta-form">
              <h3 className="oa-form-title">Tell us about your business</h3>
              <ApplyForm />
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="oa-footer">
        <div className="oa-container oa-footer-inner">
          <Logo light />
          <p className="oa-copy">© 2026 OwnerAway. All rights reserved.</p>
          <div className="oa-social">
            <a href="#" aria-label="OwnerAway on Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="OwnerAway on Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="OwnerAway on LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Public+Sans:wght@400;500;600;700&display=swap');

.oa-root{
  --navy:#0a2342; --navy-700:#123764; --navy-600:#1b4a82;
  --gold:#f5b82e; --gold-2:#fbcb55; --ink:#0a2342; --muted:#4a5b72;
  --bg:#ffffff; --bg-soft:#eef3f9; --line:#dde6f1;
  --red:#cf3a2a; --green:#1f9d55;
  font-family:'Public Sans',system-ui,sans-serif;
  color:var(--ink); background:var(--bg); line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
.oa-root *{box-sizing:border-box;}
.oa-root h1,.oa-root h2,.oa-root h3{font-family:'Archivo',sans-serif;line-height:1.08;margin:0;}
.oa-container{max-width:1140px;margin:0 auto;padding:0 24px;}
.oa-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0;}
.oa-gold{color:var(--gold);}
.oa-center{text-align:center;}
.oa-h2{font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:800;color:var(--navy);letter-spacing:-.01em;margin-bottom:2.4rem;}

.oa-root a{color:inherit;text-decoration:none;}
.oa-root :focus-visible{outline:3px solid var(--gold);outline-offset:2px;border-radius:4px;}

.oa-skip{position:absolute;left:12px;top:-60px;background:var(--navy);color:#fff;
  padding:10px 16px;border-radius:8px;z-index:200;transition:top .2s;font-weight:600;}
.oa-skip:focus{top:12px;}

/* Buttons */
.oa-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:'Archivo',sans-serif;font-weight:700;font-size:.95rem;
  padding:13px 22px;border-radius:9px;border:2px solid transparent;cursor:pointer;
  transition:transform .12s ease,box-shadow .2s ease,background .2s ease;}
.oa-btn:hover{transform:translateY(-2px);}
.oa-btn-gold{background:var(--gold);color:var(--navy);box-shadow:0 6px 20px rgba(245,184,46,.35);}
.oa-btn-gold:hover{background:var(--gold-2);}
.oa-btn-navy{background:var(--navy);color:#fff;}
.oa-btn-navy:hover{background:var(--navy-700);}
.oa-btn-ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.5);}
.oa-btn-ghost:hover{border-color:#fff;background:rgba(255,255,255,.08);}
.oa-btn-block{width:100%;margin-top:6px;padding:15px;}

/* Logo */
.oa-logo{display:flex;align-items:center;gap:11px;}
.oa-logo-text{display:flex;flex-direction:column;font-family:'Archivo',sans-serif;line-height:1;}
.oa-logo-text strong{font-size:1.15rem;font-weight:900;letter-spacing:.02em;}
.oa-logo-text span{font-size:1.15rem;font-weight:900;}
.oa-logo-text small{font-size:.5rem;font-weight:600;letter-spacing:.08em;opacity:.75;margin-top:3px;}

/* Header */
.oa-header{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--line);}
.oa-header-inner{display:flex;align-items:center;justify-content:space-between;height:74px;gap:20px;}
.oa-nav{display:flex;gap:26px;}
.oa-nav a{font-size:.92rem;font-weight:600;color:var(--navy);padding:6px 0;position:relative;}
.oa-nav a::after{content:"";position:absolute;left:0;bottom:0;width:0;height:2px;background:var(--gold);transition:width .2s;}
.oa-nav a:hover::after{width:100%;}
.oa-menu-btn{display:none;background:none;border:none;color:var(--navy);cursor:pointer;padding:6px;}
.oa-mobile-nav{display:flex;flex-direction:column;gap:4px;padding:14px 24px 22px;border-top:1px solid var(--line);}
.oa-mobile-nav a{padding:11px 4px;font-weight:600;color:var(--navy);border-bottom:1px solid var(--bg-soft);}
.oa-mobile-nav .oa-btn{margin-top:12px;}

/* Hero */
.oa-hero{position:relative;background:var(--navy);color:#fff;overflow:hidden;}
.oa-hero-bg{position:absolute;inset:0;}
.oa-hero-grid{position:absolute;inset:0;
  background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
  background-size:46px 46px;mask-image:radial-gradient(ellipse 70% 80% at 75% 40%,#000,transparent);
  -webkit-mask-image:radial-gradient(ellipse 70% 80% at 75% 40%,#000,transparent);}
.oa-glow{position:absolute;border-radius:50%;filter:blur(70px);}
.oa-glow-amber{width:480px;height:480px;right:-60px;top:-40px;background:radial-gradient(circle,rgba(245,184,46,.5),transparent 70%);}
.oa-glow-cyan{width:300px;height:300px;right:230px;bottom:-60px;background:radial-gradient(circle,rgba(45,200,255,.28),transparent 70%);}
.oa-glow-magenta{width:280px;height:280px;right:30px;bottom:20px;background:radial-gradient(circle,rgba(230,70,160,.3),transparent 70%);}
.oa-hero-inner{position:relative;padding:74px 24px 78px;max-width:1140px;margin:0 auto;}
.oa-eyebrow{display:inline-block;font-family:'Archivo',sans-serif;font-weight:700;font-size:.78rem;
  letter-spacing:.14em;text-transform:uppercase;color:var(--gold);background:rgba(245,184,46,.12);
  padding:6px 13px;border-radius:999px;margin-bottom:18px;}
.oa-hero h1{font-size:clamp(2.6rem,7vw,4.6rem);font-weight:900;letter-spacing:-.02em;}
.oa-hero-lede{max-width:520px;margin-top:20px;font-size:1.12rem;color:#cdd9e8;}
.oa-hero-features{list-style:none;padding:0;margin:30px 0 0;display:flex;flex-wrap:wrap;gap:30px 44px;}
.oa-hero-features li{display:flex;gap:12px;align-items:flex-start;}
.oa-hero-features strong{display:block;font-family:'Archivo',sans-serif;font-size:.95rem;}
.oa-hero-features span{display:block;font-size:.82rem;color:#a9bace;}
.oa-hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px;}

.oa-fade{opacity:0;transform:translateY(14px);animation:oaFade .6s ease forwards;}
@keyframes oaFade{to{opacity:1;transform:none;}}
@media (prefers-reduced-motion:reduce){.oa-fade{animation:none;opacity:1;transform:none;}.oa-btn:hover{transform:none;}}

/* Sections */
.oa-section{padding:74px 0;}

/* Problem / Solution */
.oa-ps{background:var(--bg-soft);}
.oa-ps-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:40px;align-items:center;}
.oa-ps-tag{display:flex;align-items:center;gap:10px;font-family:'Archivo',sans-serif;
  font-weight:800;font-size:.85rem;letter-spacing:.08em;margin:0 0 16px;}
.oa-tag-red{color:var(--red);} .oa-tag-green{color:var(--green);}
.oa-tag-dot{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;color:#fff;}
.oa-dot-red{background:var(--red);} .oa-dot-green{background:var(--green);}
.oa-ps-col h3{font-size:1.45rem;font-weight:800;color:var(--navy);margin-bottom:14px;}
.oa-ps-col p{color:var(--muted);max-width:34ch;}
.oa-ps-arrow{width:54px;height:54px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;}

/* How it works */
.oa-steps{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;position:relative;}
.oa-steps::before{content:"";position:absolute;top:40px;left:12%;right:12%;border-top:2px dashed var(--line);z-index:0;}
.oa-steps li{position:relative;z-index:1;}
.oa-step-badge{position:relative;width:80px;height:80px;margin:0 auto 18px;border-radius:50%;
  background:linear-gradient(160deg,#eaf1fa,#d8e6f6);color:var(--navy);display:grid;place-items:center;
  border:1px solid var(--line);}
.oa-step-num{position:absolute;right:-2px;bottom:-2px;width:26px;height:26px;border-radius:50%;
  background:var(--navy);color:#fff;font-family:'Archivo',sans-serif;font-weight:800;font-size:.82rem;
  display:grid;place-items:center;border:2px solid #fff;}
.oa-steps h3{font-size:1.02rem;font-weight:800;color:var(--navy);margin-bottom:8px;}
.oa-steps p{font-size:.86rem;color:var(--muted);}

/* Two columns: handle + industries */
.oa-two{background:var(--bg-soft);}
.oa-two-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;}
.oa-icon-grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(4,1fr);gap:30px 16px;}
.oa-icon-grid-3{grid-template-columns:repeat(3,1fr);}
.oa-icon-grid li{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;}
.oa-icon-chip{width:54px;height:54px;border-radius:14px;background:#fff;border:1px solid var(--line);
  display:grid;place-items:center;color:var(--navy);transition:transform .15s,border-color .15s;}
.oa-icon-grid li:hover .oa-icon-chip{transform:translateY(-3px);border-color:var(--gold);}
.oa-icon-label{font-size:.82rem;font-weight:600;color:var(--navy);line-height:1.3;}
.oa-icon-note{font-size:.72rem;color:var(--muted);margin-top:-4px;}

/* Trust */
.oa-trust{background:var(--bg);}
.oa-trust-grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(7,1fr);gap:18px;}
.oa-trust-grid li{display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;font-size:.78rem;font-weight:600;color:var(--navy);}
.oa-trust-icon{width:52px;height:52px;border-radius:50%;background:rgba(245,184,46,.12);color:var(--navy);display:grid;place-items:center;}
.oa-trust-note{text-align:right;font-size:.74rem;color:var(--muted);margin-top:22px;}

/* CTA + form */
.oa-cta{background:var(--navy);color:#fff;}
.oa-cta-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:start;}
.oa-cta-icon{display:inline-grid;place-items:center;width:60px;height:60px;border-radius:14px;background:rgba(245,184,46,.15);color:var(--gold);margin-bottom:20px;}
.oa-cta h2{font-size:clamp(1.7rem,3.6vw,2.3rem);font-weight:900;margin-bottom:14px;}
.oa-cta-lead{font-weight:700;font-size:1.05rem;}
.oa-cta-sub{color:#aebfd3;margin-top:8px;max-width:38ch;}
.oa-cta-form{background:#fff;color:var(--ink);border-radius:16px;padding:30px;box-shadow:0 20px 50px rgba(0,0,0,.3);}
.oa-form-title{font-size:1.15rem;font-weight:800;color:var(--navy);margin-bottom:20px;}
.oa-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.oa-field{display:flex;flex-direction:column;gap:6px;}
.oa-field label{font-size:.82rem;font-weight:700;color:var(--navy);}
.oa-req{color:var(--red);}
.oa-field input,.oa-field select{width:100%;padding:11px 13px;border:1.5px solid var(--line);
  border-radius:9px;font:inherit;font-size:.92rem;background:#fbfdff;color:var(--ink);transition:border-color .15s;}
.oa-field input:focus,.oa-field select:focus{border-color:var(--gold);outline:none;box-shadow:0 0 0 3px rgba(245,184,46,.25);}
.oa-field input[aria-invalid="true"],.oa-field select[aria-invalid="true"]{border-color:var(--red);}
.oa-err{display:flex;align-items:center;gap:5px;font-size:.75rem;color:var(--red);font-weight:600;}
.oa-form-success{text-align:center;padding:30px 10px;color:var(--green);}
.oa-form-success h3{font-size:1.3rem;font-weight:800;color:var(--navy);margin:12px 0 8px;}
.oa-form-success p{color:var(--muted);font-size:.95rem;max-width:36ch;margin:0 auto;}

/* Footer */
.oa-footer{background:#071a33;color:#fff;padding:30px 0;}
.oa-footer-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;}
.oa-copy{font-size:.82rem;color:#9fb1c7;}
.oa-social{display:flex;gap:10px;}
.oa-social a{width:38px;height:38px;border-radius:9px;background:rgba(255,255,255,.08);display:grid;place-items:center;color:#fff;transition:background .15s;}
.oa-social a:hover{background:var(--gold);color:var(--navy);}

/* Responsive */
@media (max-width:980px){
  .oa-nav,.oa-header-cta{display:none;}
  .oa-menu-btn{display:block;}
  .oa-ps-grid{grid-template-columns:1fr;gap:28px;text-align:left;}
  .oa-ps-arrow{transform:rotate(90deg);}
  .oa-steps{grid-template-columns:1fr 1fr;gap:34px 24px;}
  .oa-steps::before{display:none;}
  .oa-two-grid{grid-template-columns:1fr;gap:48px;}
  .oa-trust-grid{grid-template-columns:repeat(3,1fr);gap:26px;}
  .oa-cta-grid{grid-template-columns:1fr;gap:32px;}
  .oa-trust-note{text-align:center;}
}
@media (max-width:560px){
  .oa-section{padding:54px 0;}
  .oa-icon-grid,.oa-icon-grid-3{grid-template-columns:repeat(2,1fr);}
  .oa-trust-grid{grid-template-columns:repeat(2,1fr);}
  .oa-form-grid{grid-template-columns:1fr;}
  .oa-steps{grid-template-columns:1fr;}
  .oa-hero-features{gap:20px;}
  .oa-footer-inner{justify-content:center;text-align:center;}
}
`;