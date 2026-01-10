import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Hero.css";

const heroData = {
  title: "Hi, I'm ",
  name: "Md Sirajul Islam",
  role: "Frontend Developer & CMS Customization Specialist",
  description: `A motivated and creative Frontend Developer with growing expertise in web development. 
                Passionate about building user-friendly and visually appealing websites. 
                I thrive in collaborative environments and excel under pressure.`,
  buttons: [
    { label: "Contact Me", href: "#contact", className: "btn-primary" },
    { label: "View Projects", href: "#projects", className: "btn-outline" },
  ],
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/md-sirajul-islam-dev7/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/mdsirajuldev",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "mailto:mdsirajul.dev7@gmail.com",
      label: "Email",
      icon: <MdEmail />,
    },
  ],
};

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              {heroData.title}
              <span className="gradient-text">{heroData.name}</span>
            </h1>
            <h2 className="hero-subtitle">{heroData.role}</h2>
            <p className="hero-description">{heroData.description}</p>

            <div className="hero-buttons">
              {heroData.buttons.map((btn, index) => (
                <a key={index} href={btn.href} className={btn.className}>
                  {btn.label}
                </a>
              ))}
            </div>

            <div className="social-icons">
              {heroData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="icon-btn"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-bg" />
            <div className="hero-image-inner">
              <div className="hero-image">
                {/* Optional image */}
                {/* <img src="/path/to/image.jpg" alt="Hero" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
