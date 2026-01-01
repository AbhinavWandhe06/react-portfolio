import { Code2, Layers, Database, BarChart3, Sparkles } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Lottie from "lottie-react";
import codingPet from "/public/lottie/Developer.json";

const Expertise = () => {
  const { isDark } = useContext(DarkModeContext);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    {
      icon: Code2,
      title: "Programming & Languages",
      desc: "Efficient, scalable, and maintainable software solutions.",
      items: ["C++, C#, Python", "JavaScript (ES6+)", "SQL & Data Structures"],
      bg: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
      gradient: "from-blue-500 to-cyan-500",
      glow: "rgba(59, 130, 246, 0.4)"
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      desc: "Modern stacks built for performance and scalability.",
      items: ["React.js & Node.js", "ASP.NET Core", "Entity Framework Core"],
      bg: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      gradient: "from-purple-500 to-pink-500",
      glow: "rgba(168, 85, 247, 0.4)"
    },
    {
      icon: Database,
      title: "Database Systems",
      desc: "Reliable, optimized, and secure data management.",
      items: ["PostgreSQL, MySQL", "SQL Server (SSMS)", "OracleDB"],
      bg: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
      gradient: "from-emerald-500 to-teal-500",
      glow: "rgba(16, 185, 129, 0.4)"
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      desc: "Transforming data into actionable insights.",
      items: ["PowerBI Dashboards", "KPI Monitoring", "Business Intelligence"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      gradient: "from-orange-500 to-red-500",
      glow: "rgba(249, 115, 22, 0.4)"
    }
  ];

  return (
    <section className={`expertise-section ${isDark ? 'dark' : 'light'}`}>
      {/* Enhanced Mouse Glow Effect */}
      <div
        className="mouse-glow"
        style={{
          left: mousePos.x,
          top: mousePos.y
        }}
      />

      {/* Animated Background Shapes */}
      <div className="animated-bg-shapes">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="expertise-grid">
        {/* HEADER (LEFT TOP) */}
        <div className="expertise-header">
          <div className="tag-wrapper">
            <Sparkles size={14} className="sparkle-icon" />
            <span className="expertise-tag">EXPERTISE</span>
          </div>
          <h2 className="gradient-title">
            Engineering Scalable Digital Experiences
          </h2>
          <p className="header-desc">
            Combining strong technical foundations with modern frameworks and
            data-driven insights to build impactful solutions.
          </p>
        </div>

        {/* CODE PANEL (RIGHT – FULL HEIGHT) */}
        <div className="code-window">
          <div className="code-header">
            <div className="dots-group">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="file-name">
              <Code2 size={12} />
              expertise.ts
            </span>
            <div className="code-status">
              <span className="status-dot"></span>
              <span className="status-text">Active</span>
            </div>
          </div>

          {/* Code Content with Lottie */}
          <div className="code-content-wrapper lottie-anchor">
            <div className="line-numbers">
              {[...Array(21)].map((_, i) => (
                <span key={i} className="line-num">{i + 1}</span>
              ))}
            </div>
            
            <pre className="code-body lottie-padding">
              <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
              {'\n  '}<span className="property">name</span>: <span className="string">"Abhinav Wandhe"</span>,
              {'\n  '}<span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,
              {'\n'}
              {'\n  '}<span className="property">skills</span>: [
              {'\n    '}<span className="string">"React"</span>,
              {'\n    '}<span className="string">"Node.js"</span>,
              {'\n    '}<span className="string">"PostgreSQL"</span>,
              {'\n    '}<span className="string">"ASP.NET"</span>,
              {'\n    '}<span className="string">"PowerBI"</span>
              {'\n  '}],
              {'\n'}
              {'\n  '}<span className="property">principles</span>: [
              {'\n    '}<span className="string">"Clean Architecture"</span>,
              {'\n    '}<span className="string">"Performance"</span>,
              {'\n    '}<span className="string">"Scalability"</span>
              {'\n  '}],
              {'\n'}
              {'\n  '}<span className="property">availableForFreelance</span>: <span className="boolean">true</span>,
              {'\n'}{'}'};
              {'\n'}
              {'\n'}<span className="keyword">export default</span> developer;
            </pre>

            {/* Lottie Animation - Fixed Position */}
            <div className="code-pet fixed">
              <div className="pet-lottie">
                <Lottie 
                  animationData={codingPet} 
                  loop={true}
                  autoplay={true}
                />
              </div>
              <div className="pet-status">
                🤖 AI Dev Assistant • <span className="status-indicator">Running</span>
              </div>
            </div>
          </div>

          <div className="code-footer">
            <div className="cursor-blink"></div>
          </div>
        </div>

        {/* CARDS (LEFT BOTTOM) */}
        <div className="expertise-cards">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === idx;
            
            return (
              <div
                key={idx}
                className={`expertise-card ${isHovered ? 'hovered' : ''}`}
                style={{ backgroundImage: `url(${card.bg})` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="overlay" />
                
                {/* Dynamic Glow Effect */}
                {isHovered && (
                  <div 
                    className="card-glow-effect"
                    style={{ 
                      background: `radial-gradient(circle at center, ${card.glow}, transparent 70%)` 
                    }}
                  />
                )}

                {/* Animated Border */}
                <div className={`card-border bg-gradient-to-br ${card.gradient}`}></div>

                {/* Card Content */}
                <div className="content">
                  <div className="icon-wrapper">
                    <div className={`icon-bg bg-gradient-to-br ${card.gradient}`}>
                      <Icon size={32} strokeWidth={2.5} />
                    </div>
                    <div className={`icon-pulse bg-gradient-to-br ${card.gradient}`}></div>
                  </div>

                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>

                  <div className="card-divider"></div>

                  {/* Technologies List */}
                  <ul className="card-list">
                    {card.items.map((item, i) => (
                      <li key={i} className="card-item">
                        <span className="item-bullet" />
                        <span className="item-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shine Effect on Hover */}
                <div className="shine-effect"></div>

                {/* Floating Particles */}
                {isHovered && (
                  <div className="particle-container">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i} 
                        className="particle"
                        style={{
                          '--x': `${Math.random() * 100}%`,
                          '--y': `${Math.random() * 100}%`,
                          '--delay': `${i * 0.12}s`,
                          '--duration': `${2 + Math.random() * 1.5}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;