import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { NAV } from "../data";

export default function Footer() {
  const half = Math.ceil(NAV.length / 2);
  return (
    <footer className="oa-footer">
      <div className="oa-container">
        <div className="oa-footer-top">
          <div>
            <Logo light />
            <p>Temporary operational coverage so business owners can step away with confidence.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.slice(0, half).map((n) => (
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              {NAV.slice(half).map((n) => (
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="oa-footer-bottom">
          <p className="oa-copy">© {new Date().getFullYear()} OwnerAway. All rights reserved.</p>
          <div className="oa-social">
            <a href="#" aria-label="OwnerAway on Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="OwnerAway on Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="OwnerAway on LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
