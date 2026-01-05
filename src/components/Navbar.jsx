import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import resumeFile from "../images/AbhinavWandhe_Res_HY.pdf";

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
        <a href="#" className="logo-link">
          <span className="logo-highlight">ABHINAV</span> Wandhe
        </a>
      </div>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><a href="#expertise"><span className="link-number">01.</span> Expertise</a></li>
        <li><a href="#projects"><span className="link-number">02.</span> Projects</a></li>
        <li><a href="#experience"><span className="link-number">03.</span> Experience</a></li>
        <li><a href="#contact"><span className="link-number">04.</span> Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle dark mode"
        >
          <span className="toggle-icon">{isDark ? "☀️" : "🌙"}</span>
        </button>
        <a href={resumeFile} download="AbhinavWandhe_Resume.pdf" className="nav-btn resume-btn" aria-label="Download Resume">
          <span>RESUME</span>
          <div className="btn-shine"></div>
        </a>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <span className={open ? "open" : ""}></span>
      </div>
    </nav>
  );
};

export default Navbar;