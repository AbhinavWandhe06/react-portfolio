import { useState, useEffect } from "react";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";

const Hero = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const images = [photo1, photo2, photo3];

  /* ===============================
     DESKTOP DETECTION
  =============================== */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ===============================
     SLIDER LOGIC
  =============================== */
  useEffect(() => {
    const timer = setTimeout(() => setShowSlider(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSlider) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [showSlider]);

  /* ===============================
     SCROLL TRACKING (DESKTOP ONLY)
  =============================== */
  useEffect(() => {
    if (!isDesktop) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  /* ===============================
     HORIZONTAL PARALLAX VALUES
  =============================== */
  const progress = Math.min(scrollY, 600);

  const parallax = (speed) =>
    isDesktop ? `translateX(${progress * speed}px)` : "translateX(0)";

  return (
    <section className="hero parallax-hero">
      {/* TOP TEXT */}
      <h1
        className="hero-text top bebas"
        style={{ transform: parallax(-0.25) }}
      >
        <span className="text-gradient">ENGINEERING</span> DIGITAL SOLUTIONS
      </h1>

      {/* CENTER MEDIA */}
      <div
        className="photos-wrapper"
        style={{ transform: parallax(0.15) }}
      >
        {!showSlider ? (
          <div className="photo-stack">
            <img src={images[0]} className="photo p1" alt="Work 1" />
            <img src={images[1]} className="photo p2" alt="Work 2" />
            <img src={images[2]} className="photo p3" alt="Work 3" />
          </div>
        ) : (
          <div className="photo-slider">
            {images.map((img, index) => {
              const offset =
                (index - activeIndex + images.length) % images.length;
              return (
                <div key={index} className={`slider-card slider-${offset}`}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* BOTTOM TEXT */}
      <h1
        className="hero-text bottom bebas"
        style={{ transform: parallax(0.25) }}
      >
        <span className="text-gradient">FULL STACK</span>
      </h1>

      {/* LEFT CARD */}
      <div
        className="hero-left info-card"
        style={{ transform: parallax(-0.4) }}
      >
        <div className="info-badge">💼</div>
        <p className="info-highlight">2+ years experience</p>
        <p>Full Stack Developer</p>
        <p className="tech-stack">React • Node • PostgreSQL</p>
      </div>

      {/* RIGHT CARD */}
      <div
        className="hero-right info-card"
        style={{ transform: parallax(0.4) }}
      >
        <div className="info-badge">🚀</div>
        <p>
          I design and build scalable web applications with a focus on
          performance, clarity, and real-world impact.
        </p>
      </div>
    </section>
  );
};

export default Hero;
