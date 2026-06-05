import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import WhyOwnerAway from "./pages/WhyOwnerAway";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  // On every route change: scroll to top and move focus to the main region
  // so keyboard and screen-reader users land at the new page content.
  useEffect(() => {
    window.scrollTo(0, 0);
    if (mainRef.current) mainRef.current.focus();
  }, [pathname]);

  return (
    <>
      <a href="#main" className="oa-skip">Skip to main content</a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="page-fade" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/why" element={<WhyOwnerAway />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
