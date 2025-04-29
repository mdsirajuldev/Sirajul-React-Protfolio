import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
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
                        <a href="">Sirajul <span>.dev</span></a>
                    </div>
                    <div className="navMenu d-none d-lg-block">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Experience</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Skills</a></li>
                            <li><a href="/">Education</a></li>
                            <li><a href="/">Contact</a></li>
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
