import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { INDUSTRIES } from "../data";

export default function Industries() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="We specialize in experience-driven venues where smooth daily operations and guest safety matter most."
        crumb="Industries"
      />

      <section className="oa-section">
        <div className="oa-container">
          <div className="oa-cards">
            {INDUSTRIES.map((it, i) => (
              <Reveal as="article" className="oa-card" key={it.label} delay={(i % 3) * 100}>
                <span className="oa-card-ico" aria-hidden="true"><it.icon size={26} /></span>
                <h3>{it.label}</h3>
                <p>{it.desc}</p>
                {it.note && <span className="oa-tagline">{it.note}</span>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
