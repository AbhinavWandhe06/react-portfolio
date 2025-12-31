import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDark, setIsDark } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }
      
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`navbar ${scrolled ? "scrolled" : ""} ${visible ? "visible" : "hidden"}`}
    >
      <div className="logo">
        <span className="logo-highlight">ABHINAV</span> Wandhe
      </div>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><span className="link-number">01.</span> Expertise</li>
        <li><span className="link-number">02.</span> Projects</li>
        <li><span className="link-number">03.</span> Experience</li>
      </ul>

      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle dark mode"
        >
          <span className="toggle-icon">{isDark ? "☀️" : "🌙"}</span>
        </button>
        <button className="nav-btn">
          <span>CONTACT</span>
          <div className="btn-shine"></div>
        </button>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <span className={open ? "open" : ""}></span>
      </div>
    </nav>
  );
};

export default Navbar;