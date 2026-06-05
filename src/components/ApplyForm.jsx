import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { BUSINESS_TYPES } from "../data";

const FIELDS = [
  { name: "fullName", label: "Full name", type: "text", required: true, auto: "name" },
  { name: "businessName", label: "Business name", type: "text", required: true, auto: "organization" },
  { name: "businessType", label: "Business type", type: "select", required: true },
  { name: "location", label: "City, state", type: "text", required: false, auto: "address-level2" },
  { name: "email", label: "Email", type: "email", required: true, auto: "email" },
  { name: "phone", label: "Phone number", type: "tel", required: false, auto: "tel" },
];

export default function ApplyForm() {
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
    // To wire this to a backend, POST `values` here (e.g. fetch / Formspree).
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
    <div aria-describedby="form-help">
      <p id="form-help" className="oa-sr-only">Fields marked with an asterisk are required.</p>
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
                  id={f.name} value={values[f.name]}
                  aria-required={f.required} aria-invalid={invalid}
                  aria-describedby={invalid ? errId : undefined}
                  onChange={(ev) => update(f.name, ev.target.value)}
                >
                  <option value="" disabled>Select…</option>
                  {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              ) : (
                <input
                  id={f.name} type={f.type} value={values[f.name]}
                  autoComplete={f.auto} aria-required={f.required} aria-invalid={invalid}
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
