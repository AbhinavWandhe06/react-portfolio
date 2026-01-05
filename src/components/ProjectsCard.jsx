import React from "react";
import "../styles/projectCard.css";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className="pc-parent">
      <div className="pc-card">

        {/* 3D LOGO STACK */}
        <div className="pc-logo">
          <span className="pc-circle pc-circle1"></span>
          <span className="pc-circle pc-circle2"></span>
          <span className="pc-circle pc-circle3"></span>
          <span className="pc-circle pc-circle4"></span>
          <span className="pc-circle pc-circle5">
            <span className="pc-year">{project.year || "2026"}</span>
          </span>
        </div>

        {/* GLASSMORPHIC OVERLAY */}
        <div className="pc-glass"></div>

        {/* CONTENT SECTION */}
        <div className="pc-content">
          <span className="pc-title">{project.title}</span>
          <span className="pc-text">{project.tech}</span>
        </div>

        {/* ACTION BOTTOM BAR */}
        <div className="pc-bottom">
          <div className="pc-stats">
            {project.points && project.points.map((point, i) => (
              <span key={i} className="pc-stat-item">{point}</span>
            ))}
          </div>

          <div className="pc-view-link">
            {/* <span>View Project</span> */}
            <svg viewBox="0 0 24 24" className="pc-svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}