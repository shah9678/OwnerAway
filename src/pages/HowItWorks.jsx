import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { STEPS, TRUST } from "../data";

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="A clear, low-risk path from your first call to a week away — with no surprises waiting when you return."
        crumb="How It Works"
      />

      <section className="oa-section">
        <div className="oa-container" style={{ maxWidth: 860 }}>
          {STEPS.map((s, i) => (
            <Reveal as="article" className="oa-steprow" key={s.title} delay={i * 80}>
              <div className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3><s.icon size={22} className="oa-gold" aria-hidden="true" /> {s.title}</h3>
                <p>{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="oa-section oa-two" aria-labelledby="safe-h">
        <div className="oa-container">
          <Reveal className="oa-center">
            <h2 id="safe-h" className="oa-h2">Built-in safeguards</h2>
            <p className="oa-lead">Every engagement ships with the same protections, agreed before day one.</p>
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

      <CtaSection />
    </>
  );
}
