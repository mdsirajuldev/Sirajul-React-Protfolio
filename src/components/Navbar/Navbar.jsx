import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo/favicon/favicon.png"
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navBar-area ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navWrapper">
                    <div className="navLogo gradient-text">
                        <a href=""><i><img src={logo} alt="" /></i>Sirajul <span>.dev</span></a>
                    </div>
                    <div className="navMenu d-none d-lg-block">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experienceEducation">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experienceEducation">Education</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="menu-bar-icon d-lg-none">
                        <button><FaBars /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
