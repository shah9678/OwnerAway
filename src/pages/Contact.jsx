import { Mail, Phone, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ApplyForm from "../components/ApplyForm";
import { CONTACT } from "../data";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Let's talk coverage"
        subtitle="Tell us about your business and we'll respond within one business day to plan your pilot."
        crumb="Contact"
      />

      <section className="oa-section">
        <div className="oa-container oa-contact-grid">
          <Reveal>
            <h2 className="oa-h2">Get in touch</h2>
            <p className="oa-lead" style={{ margin: "0 0 8px" }}>
              Prefer to reach out directly? We're happy to answer questions before you apply.
            </p>
            <ul className="oa-info">
              <li>
                <span className="ico" aria-hidden="true"><Mail size={20} /></span>
                <div><strong>Email</strong><span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span></div>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Phone size={20} /></span>
                <div><strong>Phone</strong><span><a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}>{CONTACT.phone}</a></span></div>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Clock size={20} /></span>
                <div><strong>Hours</strong><span>{CONTACT.hours}</span></div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="oa-cta-form" delay={120} style={{ boxShadow: "0 16px 40px rgba(10,35,66,.12)" }}>
            <h3 className="oa-form-title">Apply for pilot coverage</h3>
            <ApplyForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
