import { useState, useEffect } from "react";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";

const Hero = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const images = [photo1, photo2, photo3];

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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fixed parallax calculations - only apply when scrolling down
  const scrollProgress = Math.max(0, scrollY);
  const heroOpacity = scrollProgress < 500 ? Math.max(0, 1 - scrollProgress / 500) : 0;
  const heroTransform = scrollProgress > 0 ? `translateY(${scrollProgress * 0.3}px)` : 'translateY(0)';

  return (
    <section 
      className="hero"
      style={{
        opacity: heroOpacity,
        transform: heroTransform,
        pointerEvents: scrollProgress > 500 ? 'none' : 'auto', // Disable interaction when faded
      }}
    >
      <h1 className="hero-text top bebas">
        <span className="text-gradient">ENGINEERING</span> DIGITAL SOLUTIONS
      </h1>

      <div className="photos-wrapper">
        {!showSlider ? (
          <div className="photo-stack">
            <img src={images[0]} className="photo p1" alt="Work 1" />
            <img src={images[1]} className="photo p2" alt="Work 2" />
            <img src={images[2]} className="photo p3" alt="Work 3" />
          </div>
        ) : (
          <div className="photo-slider">
            {images.map((img, index) => {
              const offset = (index - activeIndex + images.length) % images.length;
              return (
                <div key={index} className={`slider-card slider-${offset}`}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                  <div className="card-shine"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <h1 className="hero-text bottom bebas">
        <span className="text-gradient">FULL STACK</span>
      </h1>

      <div className="hero-left info-card">
        <div className="info-badge">💼</div>
        <p className="info-highlight">2+ years experience</p>
        <p>Full Stack Developer</p>
        <p className="tech-stack">React • Node • PostgreSQL</p>
      </div>

      <div className="hero-right info-card">
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