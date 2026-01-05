import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/experience.css";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { 
    company: "MSRSAC", 
    fullName: "Maharashtra Remote Sensing Application Centre",
    role: "Software Programmer – Level 1",
    date: "January 2024 – Present",
    location: "Nagpur, Maharashtra",
    points: [
      "Engineered GIS-based web applications (MSME Management, School Mapping, MHUID) using React.js, Node.js, and PostgreSQL, serving 10,000+ records",
      "Developed interactive Power BI dashboards for real-time analytics for 5+ departments",
      "Automated database maintenance tasks using Python scripts, reducing manual intervention by 60%"
    ],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
  },
  { 
    company: "L&T Tech", 
    fullName: "L&T Technology Services",
    role: "Trainee Executive (Full-Time Contract)",
    date: "September 2023 – December 2023",
    location: "Mysore, Karnataka",
    points: [
      "Completed intensive software development training on enterprise applications and modern JavaScript frameworks",
      "Collaborated with cross-functional teams of 8+ developers, implementing best practices",
      "Consistently met sprint deadlines in an agile environment"
    ],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
  },
  { 
    company: "Info-Origin", 
    fullName: "Info-Origin Technologies Pvt. Ltd",
    role: "Software Development Intern",
    date: "December 2022 – June 2023",
    location: "Gondia, Maharashtra",
    points: [
      "Built production-level Angular applications with responsive UI components",
      "Improved mobile user experience by 25% through optimized responsive design",
      "Delivered 15+ features ahead of schedule by developing reusable modules"
    ],
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
  }
];

export default function ExperienceSlider() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // 1. Horizontal Scroll Animation
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw", // 3 slides = 0, -100, -200
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000", 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
             // Update tracker bar width based on scroll progress
             if(barRef.current) {
                gsap.to(barRef.current, { width: `${self.progress * 100}%`, duration: 0.1 });
             }
          }
        },
      }
    );

    // 2. Image Parallax & Text Reveal
    const slides = gsap.utils.toArray(".exp-slide");
    slides.forEach((slide) => {
      const img = slide.querySelector(".slide-img");
      const text = slide.querySelector(".text-overlay");
      const details = slide.querySelector(".job-details");

      // Image Parallax
      gsap.to(img, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: slide,
          containerAnimation: pin,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      // Text Reveal Animation (Opacity + slight Y movement)
      gsap.fromTo(text, 
        { autoAlpha: 0, x: 50 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
             trigger: slide,
             containerAnimation: pin,
             start: "left center",
             toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="outer-overflow">
      <section ref={triggerRef} className="exp-pinned-section">
        
        {/* 1. Small Aesthetic Heading */}
        <div className="exp-top-heading">
            <h3>Professional Experience</h3>
            <div className="heading-line"></div>
        </div>

        <div ref={sectionRef} className="exp-slider-inner">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-slide">
              <div className="slide-content">
                
                {/* Image Section - Maintained Position roughly */}
                <div className="image-wrapper">
                  <img src={exp.img} alt={exp.company} className="slide-img" />
                  <div className="img-overlay"></div>
                </div>

                {/* Text Overlay - Enhanced with new content */}
                <div className="text-overlay">
                  <span className="slide-number">0{i + 1}</span>
                  
                  {/* Job Details */}
                  <div className="job-details">
                    <h2 className="company-title">{exp.company}</h2>
                    <h4 className="full-name">{exp.fullName}</h4>
                    
                    <div className="role-date-loc">
                         <span className="role">{exp.role}</span>
                         <span className="separator">|</span>
                         <span className="date">{exp.date}</span>
                    </div>
                    <p className="location">{exp.location}</p>

                    <ul className="points-list">
                        {exp.points.map((pt, idx) => (
                            <li key={idx}>{pt}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Slim Tracker Bar at Bottom */}
        <div className="exp-bottom-tracker">
            <div className="tracker-bg">
                <div ref={barRef} className="tracker-fill"></div>
            </div>
            <div className="tracker-text">Journey Progress</div>
        </div>

      </section>
    </div>
  );
}