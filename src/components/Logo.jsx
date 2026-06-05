import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="oa-logo" aria-label="OwnerAway home">
      <span aria-hidden="true">
        <svg viewBox="0 0 48 48" width="34" height="34">
          <circle cx="24" cy="24" r="22" fill="none" stroke={light ? "#fff" : "#0a2342"} strokeWidth="3" />
          <path d="M24 12a8 8 0 0 1 4 14.9V32a4 4 0 1 1-8 0v-5.1A8 8 0 0 1 24 12Z" fill="#f5b82e" />
          <circle cx="24" cy="20" r="3.2" fill="#0a2342" />
        </svg>
      </span>
      <span className="oa-logo-text" style={{ color: light ? "#fff" : "#0a2342" }}>
        <strong>OWNER</strong><span style={{ color: "#f5b82e" }}>AWAY</span>
        <small>WE RUN IT. WHILE YOU'RE AWAY.</small>
      </span>
    </Link>
  );
}
