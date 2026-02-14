import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const sectionLinks = [
  { label: "Tech Stack", hash: "#tech" },
  { label: "Projects", hash: "#projects" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/#hero" className="nav-logo" aria-label="Home">
          <span className="nav-logo-mark" aria-hidden="true">
            A
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to={`/${sectionLinks[0].hash}`} onClick={closeMenu}>
              {sectionLinks[0].label}
            </Link>
          </li>
          <li>
            <NavLink
              to="/resume"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Resume
            </NavLink>
          </li>
          {sectionLinks.slice(1).map((link) => (
            <li key={link.hash}>
              <Link to={`/${link.hash}`} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
