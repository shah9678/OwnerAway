import { CalendarDays } from "lucide-react";
import Reveal from "./Reveal";
import ApplyForm from "./ApplyForm";

export default function CtaSection() {
  return (
    <section id="apply" className="oa-section oa-cta" aria-labelledby="cta-h">
      <div className="oa-container oa-cta-grid">
        <Reveal className="oa-cta-copy">
          <span className="oa-cta-icon" aria-hidden="true"><CalendarDays size={30} /></span>
          <h2 id="cta-h">Ready to take a real break?</h2>
          <p className="oa-cta-lead">Apply for our limited pilot program.</p>
          <p className="oa-cta-sub">Pricing depends on business type, coverage length, and operational complexity.</p>
        </Reveal>
        <Reveal className="oa-cta-form" delay={120}>
          <h3 className="oa-form-title">Tell us about your business</h3>
          <ApplyForm />
        </Reveal>
      </div>
    </section>
  );
}
