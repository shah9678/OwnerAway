import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => (isActive ? "is-active" : undefined);

  return (
    <header className="oa-header">
      <div className="oa-container oa-header-inner">
        <Logo />
        <nav className="oa-nav" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="oa-btn oa-btn-navy oa-header-cta">Request Coverage</Link>
        <button
          className="oa-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="oa-mobile-nav" aria-label="Mobile">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass} onClick={() => setOpen(false)}>
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="oa-btn oa-btn-gold" onClick={() => setOpen(false)}>
            Request Coverage
          </Link>
        </nav>
      )}
    </header>
  );
}
