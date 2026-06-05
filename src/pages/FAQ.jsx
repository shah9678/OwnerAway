import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { FAQ as FAQ_DATA } from "../data";

function FaqItem({ item, index, open, onToggle }) {
  const btnId = `faq-q-${index}`;
  const panelId = `faq-a-${index}`;
  return (
    <div className="oa-faq-item">
      <h3 style={{ margin: 0 }}>
        <button
          id={btnId}
          className="oa-faq-q"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {item.q}
          <ChevronDown className="chev" size={20} aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={btnId} className={`oa-faq-a ${open ? "open" : ""}`}>
        <div><p>{item.a}</p></div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything owners usually ask before their first pilot. Still unsure? Reach out any time."
        crumb="FAQ"
      />

      <section className="oa-section">
        <div className="oa-container">
          <Reveal className="oa-faq">
            {FAQ_DATA.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
