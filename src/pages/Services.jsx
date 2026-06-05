import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { SERVICES } from "../data";

export default function Services() {
  return (
    <>
      <PageHeader
        title="What We Handle"
        subtitle="The everyday operational work that normally lands on your desk — covered to your standards while you're away."
        crumb="Services"
      />

      <section className="oa-section">
        <div className="oa-container">
          <div className="oa-cards">
            {SERVICES.map((s, i) => (
              <Reveal as="article" className="oa-card" key={s.label} delay={(i % 3) * 100}>
                <span className="oa-card-ico" aria-hidden="true"><s.icon size={24} /></span>
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
