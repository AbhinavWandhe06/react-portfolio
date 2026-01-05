import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const slides = [
  {
    type: "hero",
    title: "Transforming Ideas Into Digital Reality",
    desc: "Specialized in crafting exceptional digital experiences through full-stack development, intuitive design, and data-driven solutions.",
    tag: "What I Do",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
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
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="tear-container">
      <style>{`
        .tear-container {
          margin: 0;
          padding: 0;
          position: relative;
          height: ${slides.length * 200}vh;
          background: linear-gradient(to bottom, #000000, #0a0e27);
        }

        .tear-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        .slide-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100vh;
        }

        .tear-panel {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          will-change: transform;
          box-shadow: 0 0 60px rgba(96, 165, 250, 0.2);
        }

        .tear-panel.top { 
          top: 0; 
          align-items: flex-end; 
          border-bottom: 2px solid rgba(96, 165, 250, 0.3);
          box-shadow: 0 20px 80px rgba(96, 165, 250, 0.15);
        }
        
        .tear-panel.bottom { 
          bottom: 0; 
          align-items: flex-start; 
          border-top: 2px solid rgba(96, 165, 250, 0.3);
          box-shadow: 0 -20px 80px rgba(96, 165, 250, 0.15);
        }

        .panel-content {
          position: absolute;
          width: 100%;
          height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .top .panel-content { top: 0; }
        .bottom .panel-content { bottom: 0; }

        .slide-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(96, 165, 250, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(129, 140, 248, 0.15) 0%, transparent 50%),
            radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%);
          z-index: 1;
          animation: overlayPulse 8s ease-in-out infinite;
        }

        @keyframes overlayPulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }

        .inner-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          padding: 0 40px;
        }

        .tear-title {
          font-size: clamp(2.5rem, 8vw, 7rem);
          font-weight: 900;
          line-height: 0.9;
          margin: 24px 0;
          text-transform: uppercase;
          letter-spacing: -3px;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #60a5fa 50%,
            #818cf8 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 60px rgba(96, 165, 250, 0.3);
          animation: titleGlow 3s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(96, 165, 250, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 40px rgba(96, 165, 250, 0.6));
          }
        }

        .tag-line {
          color: #60a5fa;
          font-weight: 700;
          letter-spacing: 6px;
          font-size: 0.75rem;
          text-transform: uppercase;
          background: rgba(96, 165, 250, 0.12);
          backdrop-filter: blur(20px);
          padding: 10px 24px;
          border-radius: 50px;
          border: 1px solid rgba(96, 165, 250, 0.3);
          display: inline-block;
          box-shadow: 
            0 8px 32px rgba(96, 165, 250, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: tagFloat 3s ease-in-out infinite;
        }

        @keyframes tagFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .slide-desc {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.6;
          margin: 20px auto;
          max-width: 700px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.8);
        }

        .metrics-container {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 32px;
        }

        .metric-pill {
          display: inline-block;
          padding: 12px 24px;
          border: 1px solid rgba(96, 165, 250, 0.3);
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          color: #fff;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .metric-pill::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .metric-pill:hover {
          transform: translateY(-4px) scale(1.05);
          border-color: rgba(96, 165, 250, 0.6);
          box-shadow: 
            0 12px 48px rgba(96, 165, 250, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .metric-pill:hover::before {
          opacity: 1;
        }

        .progress-line {
          position: fixed;
          bottom: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #60a5fa, #818cf8, #c084fc);
          z-index: 1000;
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.6);
        }

        .scroll-indicator {
          position: fixed;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: fadeIn 1s ease-out 1s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .scroll-text {
          color: rgba(96, 165, 250, 0.8);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(96, 165, 250, 0.6), transparent);
          position: relative;
          overflow: hidden;
        }

        .scroll-line::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 20px;
          background: #60a5fa;
          animation: scrollMove 2s ease-in-out infinite;
        }

        @keyframes scrollMove {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .tear-title {
            font-size: clamp(2rem, 6vw, 4rem);
            letter-spacing: -2px;
          }

          .tag-line {
            font-size: 0.65rem;
            letter-spacing: 4px;
            padding: 8px 16px;
          }

          .slide-desc {
            font-size: 0.95rem;
          }

          .metric-pill {
            padding: 10px 18px;
            font-size: 0.8rem;
          }

          .inner-content {
            padding: 0 24px;
          }
        }
      `}</style>

      <div className="tear-sticky">
        {slides.map((slide, i) => {
          const start = i / slides.length;
          const end = (i + 1) / slides.length;
          const middle = start + (end - start) / 2;

          // Last slide should not tear
          const isLastSlide = i === slides.length - 1;
          const translateYTop = useTransform(
            smoothProgress, 
            [start, middle, end], 
            isLastSlide ? ["0%", "0%", "0%"] : ["0%", "0%", "-100%"]
          );
          const translateYBottom = useTransform(
            smoothProgress, 
            [start, middle, end], 
            isLastSlide ? ["0%", "0%", "0%"] : ["0%", "0%", "100%"]
          );
          
          const contentScale = useTransform(smoothProgress, [start, middle, end], [1, 1, 0.8]);
          const opacity = useTransform(smoothProgress, [middle, end - 0.05], [1, 0]);

          const zIndex = slides.length - i;

          return (
            <motion.div 
              key={i} 
              className="slide-wrapper" 
              style={{ zIndex, opacity }}
            >
              {/* TOP PANEL */}
              <motion.div className="tear-panel top" style={{ y: translateYTop }}>
                <div className="panel-content" style={{ backgroundImage: `url(${slide.image})` }}>
                  <div className="slide-overlay" />
                  <motion.div className="inner-content" style={{ scale: contentScale }}>
                    <span className="tag-line">{slide.tag}</span>
                    <h2 className="tear-title">{slide.title}</h2>
                    {slide.desc && <p className="slide-desc">{slide.desc}</p>}
                    {slide.metrics && (
                      <div className="metrics-container">
                        {slide.metrics.map((m, idx) => (
                          <span key={idx} className="metric-pill">{m}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>

              {/* BOTTOM PANEL */}
              <motion.div className="tear-panel bottom" style={{ y: translateYBottom }}>
                <div className="panel-content" style={{ backgroundImage: `url(${slide.image})` }}>
                  <div className="slide-overlay" />
                  <motion.div className="inner-content" style={{ scale: contentScale }}>
                    <span className="tag-line">{slide.tag}</span>
                    <h2 className="tear-title">{slide.title}</h2>
                    {slide.desc && <p className="slide-desc">{slide.desc}</p>}
                    {slide.metrics && (
                      <div className="metrics-container">
                        {slide.metrics.map((m, idx) => (
                          <span key={idx} className="metric-pill">{m}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Progress Line */}
        <motion.div 
          className="progress-line" 
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ThingsICanDo;