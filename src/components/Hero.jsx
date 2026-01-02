import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";

const Hero = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [photo1, photo2, photo3];

  // 1. SCROLL PARALLAX SETUP
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Map scroll (0 to 800px) to horizontal movement
  const xLeft = useTransform(smoothY, [0, 800], [0, -200]);
  const xRight = useTransform(smoothY, [0, 800], [0, 200]);
  const ySlow = useTransform(smoothY, [0, 800], [0, 50]);

  /* SLIDER LOGIC */
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

  // 2. ANIMATION VARIANTS (On-Screen Entrance)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* TOP TEXT */}
      <motion.h1
        className="hero-text top bebas"
        style={{ x: xLeft }} // Parallax
        variants={itemVariants} // Entrance
      >
        <span className="text-gradient">ENGINEERING</span> DIGITAL SOLUTIONS
      </motion.h1>

      {/* CENTER MEDIA */}
      <motion.div
        className="photos-wrapper"
        style={{ y: ySlow }}
        variants={itemVariants}
      >
        {!showSlider ? (
          <div className="photo-stack">
            {images.map((img, i) => (
              <img key={i} src={img} className={`photo p${i + 1}`} alt="Work" />
            ))}
          </div>
        ) : (
          <div className="photo-slider">
            {images.map((img, index) => {
              const offset = (index - activeIndex + images.length) % images.length;
              return (
                <div key={index} className={`slider-card slider-${offset}`}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* BOTTOM TEXT */}
      <motion.h1
        className="hero-text bottom bebas"
        style={{ x: xRight }}
        variants={itemVariants}
      >
        <span className="text-gradient">FULL STACK</span>
      </motion.h1>

      {/* LEFT CARD */}
      <motion.div
        className="hero-left info-card"
        style={{ x: xLeft }}
        variants={itemVariants}
      >
        <div className="info-badge">💼</div>
        <p className="info-highlight">2+ years experience</p>
        <p>Full Stack Developer</p>
        <p className="tech-stack">React • Node • PostgreSQL</p>
        <div className="code-pet">
           <span className="pet-ascii">{"( ^_^)7"}</span>
           <span className="pet-status">coding<span className="dots"></span></span>
        </div>
      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        className="hero-right info-card"
        style={{ x: xRight }}
        variants={itemVariants}
      >
        <div className="info-badge">🚀</div>
        <p>
          I design and build scalable web applications with a focus on
          performance, clarity, and real-world impact.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;