import { Link } from "react-router-dom";
import { Play, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import CtaSection from "../components/CtaSection";
import { HERO_FEATURES, STEPS, STATS, TESTIMONIALS } from "../data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="oa-hero" aria-labelledby="hero-h">
        <div className="oa-hero-bg" aria-hidden="true">
          <div className="oa-glow oa-glow-amber" />
          <div className="oa-glow oa-glow-cyan" />
          <div className="oa-glow oa-glow-magenta" />
          <div className="oa-hero-grid" />
        </div>
        <div className="oa-container oa-hero-inner">
          <p className="oa-eyebrow oa-fade" style={{ animationDelay: ".05s" }}>Temporary operational coverage</p>
          <h1 id="hero-h" className="oa-fade" style={{ animationDelay: ".1s" }}>
            You Take Off.<br /><span className="oa-gold">We Take Over.</span>
          </h1>
          <p className="oa-hero-lede oa-fade" style={{ animationDelay: ".2s" }}>
            OwnerAway provides temporary operational coverage so business owners can step away with confidence.
          </p>
          <ul className="oa-hero-features oa-fade" style={{ animationDelay: ".3s" }}>
            {HERO_FEATURES.map((f) => (
              <li key={f.title}>
                <f.icon size={22} className="oa-gold" aria-hidden="true" />
                <div><strong>{f.title}</strong><span>{f.sub}</span></div>
              </li>
            ))}
          </ul>
          <div className="oa-hero-cta oa-fade" style={{ animationDelay: ".4s" }}>
            <Link to="/contact" className="oa-btn oa-btn-gold">Request Pilot Coverage</Link>
            <Link to="/how-it-works" className="oa-btn oa-btn-ghost"><Play size={16} aria-hidden="true" /> How It Works</Link>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="oa-section oa-ps" aria-labelledby="ps-h">
        <h2 id="ps-h" className="oa-sr-only">The problem and our solution</h2>
        <div className="oa-container oa-ps-grid">
          <Reveal className="oa-ps-col">
            <p className="oa-ps-tag oa-tag-red">
              <span className="oa-tag-dot oa-dot-red"><AlertCircle size={16} aria-hidden="true" /></span>THE PROBLEM
            </p>
            <h3>You built the business. But the business can't run without you.</h3>
            <p>Most owners can't take a real vacation because they worry about staff, operations, and customers.</p>
          </Reveal>
          <div className="oa-ps-arrow" aria-hidden="true"><ArrowRight size={22} /></div>
          <Reveal className="oa-ps-col" delay={120}>
            <p className="oa-ps-tag oa-tag-green">
              <span className="oa-tag-dot oa-dot-green"><CheckCircle2 size={16} aria-hidden="true" /></span>OUR SOLUTION
            </p>
            <h3>We provide trusted temporary operators to manage your day-to-day operations while you're away.</h3>
            <p>Your business stays open, your team stays on track, and you get the break you deserve.</p>
          </Reveal>
        </div>
      </section>

      {/* How it works (summary) */}
      <section className="oa-section" aria-labelledby="how-h">
        <div className="oa-container">
          <Reveal className="oa-center">
            <h2 id="how-h" className="oa-h2">How It Works</h2>
            <p className="oa-lead">Four simple steps from first call to a worry-free week off.</p>
          </Reveal>
          <ol className="oa-steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100}>
                <div className="oa-step-badge">
                  <s.icon size={30} aria-hidden="true" />
                  <span className="oa-step-num" aria-hidden="true">{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.sub}</p>
              </Reveal>
            ))}
          </ol>
          <div className="oa-center" style={{ marginTop: 36 }}>
            <Link to="/how-it-works" className="oa-btn oa-btn-outline">See the full process</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="oa-section oa-stats" aria-label="By the numbers">
        <div className="oa-container">
          <div className="oa-stats-grid">
            {STATS.map((s) => (
              <Reveal className="oa-stat" key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <span className="lbl">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="oa-section" aria-labelledby="t-h">
        <div className="oa-container">
          <Reveal className="oa-center">
            <h2 id="t-h" className="oa-h2">Owners who finally stepped away</h2>
            <p className="oa-lead">Illustrative feedback from the kind of venues we serve.</p>
          </Reveal>
          <div className="oa-quotes">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="figure" className="oa-quote" key={i} delay={i * 100} style={{ margin: 0 }}>
                <p>“{t.quote}”</p>
                <figcaption className="who">— {t.who}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
