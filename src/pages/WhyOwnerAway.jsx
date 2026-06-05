import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import CtaSection from "../components/CtaSection";
import { VALUES, STATS, TESTIMONIALS, TRUST } from "../data";

export default function WhyOwnerAway() {
  return (
    <>
      <PageHeader
        title="Why OwnerAway"
        subtitle="Trust is the whole product. Here's how we earn it before you ever hand over the keys."
        crumb="Why OwnerAway"
      />

      {/* Values */}
      <section className="oa-section">
        <div className="oa-container">
          <div className="oa-cards oa-cards-2">
            {VALUES.map((v, i) => (
              <Reveal as="article" className="oa-card" key={v.title} delay={(i % 2) * 100}>
                <span className="oa-card-ico" aria-hidden="true"><v.icon size={24} /></span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
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

      {/* Trust & safety */}
      <section className="oa-section oa-two" aria-labelledby="trust-h">
        <div className="oa-container">
          <Reveal className="oa-center">
            <h2 id="trust-h" className="oa-h2">Trust &amp; Safety Is Our Priority</h2>
            <p className="oa-lead">Concrete protections, not promises.</p>
          </Reveal>
          <ul className="oa-trust-grid">
            {TRUST.map((t, i) => (
              <Reveal as="li" key={t.label} delay={i * 60}>
                <span className="oa-trust-icon"><t.icon size={26} aria-hidden="true" /></span>
                <span>{t.label}</span>
              </Reveal>
            ))}
          </ul>
          <p className="oa-trust-note">*Insurance available as we scale.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="oa-section" aria-labelledby="t-h">
        <div className="oa-container">
          <Reveal className="oa-center">
            <h2 id="t-h" className="oa-h2">In owners' words</h2>
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
