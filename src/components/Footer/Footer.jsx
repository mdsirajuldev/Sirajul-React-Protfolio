import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logo/favicon/favicon.png";
import "./Footer.css";

// Brand info
const brandInfo = {
  name: "Sirajul",
  domain: ".dev",
  description:
    "A motivated and creative frontend developer specializing in building user-friendly and visually appealing websites.",
  socials: [
    {
      icon: <MdEmail className="icon" />,
      className: "primary",
      link: "mailto:mdsirajul.dev7@gmail.com",
    },
    {
      icon: <FaGithub className="icon" />,
      className: "secondary",
      link: "https://github.com/mdsirajuldev",
    },
    {
      icon: <FaLinkedinIn className="icon" />,
      className: "blue",
      link: "https://www.linkedin.com/in/md-sirajul-islam-dev7/",
    },
  ],
};

// Quick navigation links
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

// Contact info
const contactLinks = [
  {
    label:
      "Mohammodpur, Bosila Road, 40 feet Road, Real Estate Mosjid, Mun Garden, Bangladesh",
    href: "/",
  },
  {
    label: "mdsirajul.dev7@gmail.com",
    href: "mailto:mdsirajul.dev7@gmail.com",
  },
  { label: "01759452730", href: "tel:01759452730" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="navLogo gradient-text">
              <a href="/">
                <i>
                  <img src={logo} alt="logo" />
                </i>
                {brandInfo.name} <span>{brandInfo.domain}</span>
              </a>
            </div>
            <p className="footer-description">{brandInfo.description}</p>
            <div className="footer-socials">
              {brandInfo.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`icon-circle ${social.className}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <ul>
              {contactLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 Md Sirajul Islam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
