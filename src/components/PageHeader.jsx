import { Link } from "react-router-dom";

export default function PageHeader({ title, subtitle, crumb }) {
  return (
    <header className="oa-pagehead">
      <div className="oa-hero-bg" aria-hidden="true">
        <div className="oa-glow oa-glow-amber" />
        <div className="oa-glow oa-glow-cyan" />
        <div className="oa-hero-grid" />
      </div>
      <div className="oa-container oa-pagehead-inner">
        <nav className="oa-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> {crumb ? <span aria-hidden="true">/ {crumb}</span> : null}
        </nav>
        <h1 className="oa-fade">{title}</h1>
        {subtitle && <p className="oa-fade" style={{ animationDelay: ".1s" }}>{subtitle}</p>}
      </div>
    </header>
  );
}
