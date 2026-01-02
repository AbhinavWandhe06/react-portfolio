import React, { useState, useEffect } from 'react';

const slides = [
  {
    type: "hero",
    title: "Transforming Ideas Into Digital Reality",
    desc: "Specialized in crafting exceptional digital experiences through full-stack development, intuitive design, and data-driven solutions.",
    tag: "What I Do",
  },
  {
    type: "content",
    title: "Full-Stack Development",
    desc: "Building scalable applications from concept to deployment with modern technologies and architectural best practices.",
    tag: "Engineering Excellence",
    metrics: ["React", "Node.js", "Cloud Architecture"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    type: "content",
    title: "Front-End Development",
    desc: "Crafting responsive, accessible interfaces that deliver exceptional user experiences across all devices.",
    tag: "User Experience",
    metrics: ["React", "TypeScript", "Performance"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80",
  },
  {
    type: "content",
    title: "Database Architecture",
    desc: "Designing robust data systems that transform complex information into actionable business intelligence.",
    tag: "Data Solutions",
    metrics: ["PostgreSQL", "Analytics", "Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
];

const ThingsICanDo = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const slideHeight = window.innerHeight;
      const current = Math.floor(scrollTop / slideHeight);
      setActiveSlide(Math.min(current, slides.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="things-scroll-wrapper">
      <style>{`
        .things-scroll-wrapper {
          height: ${slides.length * 100}vh;
          background: #000;
        }
        
        .things-slide {
          position: sticky;
          top: 0;
          height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding-left: 10vw;
          overflow: hidden;
        }
        
        .things-slide.hero-slide {
          background: linear-gradient(135deg, #0a0e27 0%, #000000 100%);
          justify-content: center;
          padding-left: 0;
        }
        
        .things-slide.hero-slide::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(129, 140, 248, 0.1) 0%, transparent 50%);
          animation: heroGlow 8s ease-in-out infinite;
          z-index: 1;
        }
        
        @keyframes heroGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(2, 6, 23, 0.85),
            rgba(2, 6, 23, 0.65),
            rgba(2, 6, 23, 0.25)
          );
          z-index: 1;
        }
        
        .things-slide::after {
          content: "";
          position: absolute;
          inset: 2rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 0 60px rgba(96, 165, 250, 0.25),
            inset 0 0 30px rgba(96, 165, 250, 0.18);
          z-index: 2;
          pointer-events: none;
        }
        
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }
        
        .hero-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 32px;
          padding: 10px 24px;
          border: 1px solid rgba(96, 165, 250, 0.3);
          border-radius: 50px;
          background: rgba(96, 165, 250, 0.05);
          backdrop-filter: blur(10px);
          animation: fadeInDown 0.8s ease-out;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-title {
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1.1;
          background: linear-gradient(
            to right,
            #e0f2fe,
            #60a5fa,
            #818cf8,
            #e0f2fe
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease-out 0.2s both, shimmerText 8s ease-in-out infinite;
        }
        
        @keyframes shimmerText {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        .hero-desc {
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(229, 231, 235, 0.8);
          max-width: 700px;
          margin: 0 auto 60px;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        
        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
        
        .scroll-icon {
          width: 32px;
          height: 52px;
          border: 2px solid rgba(96, 165, 250, 0.4);
          border-radius: 20px;
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        
        .scroll-wheel {
          width: 4px;
          height: 10px;
          background: #60a5fa;
          border-radius: 2px;
          animation: scrollDown 2s ease-in-out infinite;
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        
        .scroll-text {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(96, 165, 250, 0.8);
        }
        
        .slide-content {
          position: relative;
          z-index: 3;
          max-width: 680px;
          padding: 60px 70px;
          border-radius: 20px;
          background: rgba(2, 6, 23, 0.65);
          backdrop-filter: blur(14px);
          box-shadow:
            0 0 40px rgba(0, 0, 0, 0.6),
            inset 0 0 25px rgba(255, 255, 255, 0.05);
        }
        
        .slide-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeInUp 0.6s ease-out 0.2s forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-content h1 {
          font-size: clamp(3.4rem, 6vw, 6.2rem);
          font-weight: 900;
          letter-spacing: -1.6px;
          line-height: 1.05;
          background: linear-gradient(
            to right,
            #e0f2fe,
            #60a5fa,
            #818cf8
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out 0.3s forwards;
        }
        
        .slide-content p {
          font-size: 1.25rem;
          line-height: 1.7;
          color: rgba(229, 231, 235, 0.85);
          max-width: 520px;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out 0.4s forwards;
        }
        
        .slide-metrics {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out 0.5s forwards;
        }
        
        .metric-tag {
          padding: 8px 18px;
          background: rgba(96, 165, 250, 0.08);
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(229, 231, 235, 0.9);
          transition: all 0.3s ease;
        }
        
        .metric-tag:hover {
          background: rgba(96, 165, 250, 0.15);
          border-color: rgba(96, 165, 250, 0.4);
          transform: translateY(-2px);
        }
        
        .slide-content::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(96, 165, 250, 0.08),
            transparent 70%
          );
          animation: shimmer 6s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        .slide-number {
          position: absolute;
          top: 40px;
          right: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
          z-index: 3;
        }
        
        .progress-indicator {
          position: fixed;
          right: 50px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .progress-line {
          width: 2px;
          height: 60px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .progress-line:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: linear-gradient(to bottom, #60a5fa, #818cf8);
          transition: height 0.4s ease;
        }
        
        .progress-line.active .progress-fill {
          height: 100%;
        }
        
        .progress-line.active {
          background: rgba(96, 165, 250, 0.2);
        }
        
        .slide-decorator {
          position: absolute;
          width: 100px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(96, 165, 250, 0.5), transparent);
          top: 30px;
          left: 70px;
          z-index: 3;
          opacity: 0;
          animation: slideInLeft 0.8s ease-out 0.1s forwards;
        }
        
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
        }
      `}</style>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`things-slide ${slide.type === 'hero' ? 'hero-slide' : ''}`}
          style={slide.type === 'content' ? { backgroundImage: `url(${slide.image})` } : {}}
        >
          {slide.type === 'content' && <div className="slide-overlay" />}
          {slide.type === 'content' && <div className="slide-decorator" />}
          <div className="slide-number">0{i + 1} / 0{slides.length}</div>

          {slide.type === 'hero' ? (
            <div className="hero-content">
              <div className="hero-tag">{slide.tag}</div>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>
              <div className="scroll-indicator">
                <div className="scroll-icon">
                  <div className="scroll-wheel"></div>
                </div>
                <span className="scroll-text">Scroll to explore</span>
              </div>
            </div>
          ) : (
            <div className="slide-content">
              <div className="slide-tag">{slide.tag}</div>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <div className="slide-metrics">
                {slide.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-tag">{metric}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="progress-indicator">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`progress-line ${i === activeSlide ? 'active' : ''}`}
            onClick={() => {
              window.scrollTo({
                top: i * window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <div className="progress-fill" />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ThingsICanDo;