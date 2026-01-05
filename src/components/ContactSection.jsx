import React from "react";
import { Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import "../styles/contact.css";
import video from "../images/2516159-hd_1920_1080_24fps.mp4";

const GMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=abhinavwandhe@gmail.com";

const WHATSAPP_LINK =
  "https://wa.me/917666709264";

export default function ContactSection() {
  return (
    <section className="contact-wrapper">
      {/* VIDEO BACKGROUND */}
      <div className="video-bg-container">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* CONTENT */}
      <div className="contact-content">
        <header className="contact-header">
          <h1 className="main-title">
            LET&apos;S <span>COLLABORATE</span>
          </h1>
          <h2 className="sub-title">
            Everything starts with a conversation
          </h2>
          <p className="contact-description">
            If you’re interested in collaborating, have a project idea, or just
            want to connect, reach out to me over email or social.
          </p>
        </header>

        <footer className="contact-footer">
          <div className="footer-left">
            <span className="brand-name">Abhinav Wandhe</span>
          </div>

          <div className="footer-center">
            <h3 className="footer-name">ABHINAV WANDHE</h3>

            <div className="social-links">
              {/* GMAIL */}
              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Send Email"
              >
                <Mail size={28} />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/abhinav-wandhe-415aba229"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>

              {/* PHONE */}
              <a
              id="phone-link"
                href="tel:+917666709264"
                className="social-icon"
                aria-label="Call Abhinav Wandhe"
              >
                <Phone size={28} />
              </a>

              {/* WHATSAPP */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={28} />
              </a>
            </div>

            <p className="copyright">
              ©2026 Abhinav Wandhe. All rights reserved.
            </p>
          </div>

          <div className="footer-right">
            <a
              href={GMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-email"
            >
              abhinavwandhe@gmail.com
            </a>
            <span className="cta-text">GET IN TOUCH</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
