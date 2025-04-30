import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo/favicon/favicon.png";
import './Navbar.css';

const navMenu = [
  { id: 1, menuText: 'Home', link: '#home' },
  { id: 2, menuText: 'About', link: '#about' },
  { id: 3, menuText: 'Experience', link: '#experienceEducation' },
  { id: 4, menuText: 'Projects', link: '#projects' },
  { id: 5, menuText: 'Skills', link: '#skills' },
  { id: 6, menuText: 'Education', link: '#experienceEducation' },
  { id: 7, menuText: 'Contact', link: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className={`navBar-area ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navWrapper">
          <div className="navLogo gradient-text">
            <a href="#home"><i><img src={logo} alt="Logo" /></i>Sirajul <span>.dev</span></a>
          </div>
          
          {/* Desktop Menu */}
          <div className="navMenu d-none d-lg-block">
            <ul>
              {navMenu.map(item => (
                <li key={item.id}><a href={item.link}>{item.menuText}</a></li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="menu-bar-icon d-lg-none">
            <button onClick={toggleMenu}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
          </div>
        </div>
        {/* Overlay */}
      {/* {menuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>} */}
        {/* Mobile Menu (conditionally rendered) */}
        {menuOpen && (
          <div className="mobile-nav d-lg-none">
            <ul>
              {navMenu.map(item => (
                <li key={item.id}><a href={item.link} onClick={() => setMenuOpen(false)}>{item.menuText}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
