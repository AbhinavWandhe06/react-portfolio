import React from "react";
import { Mail, Instagram, Linkedin, Phone } from "lucide-react"; 
import "../styles/contact.css";
import video from "../images/2516159-hd_1920_1080_24fps.mp4";

export default function ContactSection() {
  return (
    <section className="contact-wrapper">
      {/* VIDEO BACKGROUND */}
      <div className="video-bg-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
        >
          {/* A cinematic aerial landscape video from Pexels */}
          <source 
            src={video}
            type="video/mp4" 
          />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className="contact-content">
        <header className="contact-header">
          <h1 className="main-title">LET'S <span>COLLABORATE</span></h1>
          <h2 className="sub-title">Everything starts with a conversation</h2>
          <p className="contact-description">
            If you’re interested in collaborating, have a project idea, or just want to connect, 
            reach out to me over email or social. Let's make some magic.
          </p>
        </header>

        {/* FOOTER-STYLE INFO */}
        <footer className="contact-footer">
          <div className="footer-left">
            <span className="brand-name">Abhinav Wandhe</span>
          </div>

          <div className="footer-center">
            <h3 className="footer-name">ABHINAV WANDHE</h3>
            <div className="social-links">
              <a href="mailto:abhinavwandhe@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={28} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com/in/abhinav-wandhe" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={28} strokeWidth={1.5} />
              </a>
              <a href="tel:+917666709264" className="social-icon" aria-label="Phone">
                <Phone size={28} strokeWidth={1.5} />
              </a>
            </div>
            <p className="copyright">©2026 Abhinav Wandhe. All rights reserved.</p>
          </div>

          <div className="footer-right">
            <a href="mailto:abhinavwandhe@gmail.com" className="footer-email">abhinavwandhe@gmail.com</a>
            <span className="cta-text">GET IN TOUCH</span>
          </div>
        </footer>
      </div>
    </section>
  );
}