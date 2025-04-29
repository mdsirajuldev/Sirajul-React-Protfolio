import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Sirajul.dev</h3>
            <p className="footer-description">
              A motivated and creative frontend developer specializing in
              building user-friendly and visually appealing websites.
            </p>
            <div className="footer-socials">
              <div className="icon-circle primary">
                <MdEmail className="icon" />
              </div>
              <div className="icon-circle secondary">
                <FaGithub className="icon" />
              </div>
              <div className="icon-circle blue">
                <FaLinkedinIn className="icon" />
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>

          <div className="footer-links footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <ul>
              <li>
                <a href="/">
                  Mohammodpur, Bosila Road, 40 feet Road, Real Estate Mosjid,
                  Mun Garden, Bangladesh
                </a>
              </li>
              <li>
                <a href="/">mdsirajul.dev7@gmail.com</a>
              </li>
              <li>
                <a href="/">01759452730</a>
              </li>
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
