import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Project1 from "../../assets/images/project/project1.png";
import Project2 from "../../assets/images/project/project2.png";
import Project3 from "../../assets/images/project/project3.png";
import Project4 from "../../assets/images/project/project4.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="project-section section-padding">
      <div className="container">
        <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">My Projects</h2>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <img
              className="project-image"
              src={Project1}
              alt="Tour & Travels"
            />
            <div className="project-overlay">
              <h3 className="project-title">Tour &amp; Travels</h3>
              <p className="project-description">
                Experienced in Tour and Travel web design, creating innovative
                and user-friendly websites.
              </p>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">JavaScript</span>
              </div>
              <a
                className="btn-outline"
                href="https://tour-travels-opal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <span className="project-icon">
                  <FaArrowUpRightFromSquare />
                </span>
              </a>
            </div>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src={Project2}
              alt="Education Website"
            />
            <div className="project-overlay">
              <h3 className="project-title">Education Website</h3>
              <p className="project-description">
              Innovative web designer with a strong academic foundation and proven design expertise.
              </p>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">JavaScript</span>
              </div>
              <a
                className="btn-outline"
                href="https://education-mu-lovat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <span className="project-icon">
                  <FaArrowUpRightFromSquare />
                </span>
              </a>
            </div>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src={Project3}
              alt="Exdos Website"
            />
            <div className="project-overlay">
              <h3 className="project-title">Exdos Website</h3>
              <p className="project-description">
              Experienced in Exdos web design, creating innovative and user-friendly websites.
              </p>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">JavaScript</span>
              </div>
              <a
                className="btn-outline"
                href="https://exdos-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <span className="project-icon">
                  <FaArrowUpRightFromSquare />
                </span>
              </a>
            </div>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src={Project4}
              alt="Hospital Website"
            />
            <div className="project-overlay">
              <h3 className="project-title">Hospital Website</h3>
              <p className="project-description">
                Experienced in Tour and Travel web design, creating innovative
                and user-friendly websites.
              </p>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">JavaScript</span>
              </div>
              <a
                className="btn-outline"
                href="https://hospital-ten-theta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <span className="project-icon">
                  <FaArrowUpRightFromSquare />
                </span>
              </a>
            </div>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="Portfolio Website"
            />
            <div className="project-overlay">
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-description">
              A personal portfolio built using HTML, CSS, and JavaScript.
              </p>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">React</span>
              </div>
              <a
                className="btn-outline"
                href="https://tour-travels-opal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <span className="project-icon">
                  <FaArrowUpRightFromSquare />
                </span>
              </a>
            </div>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="Resume"
            />
            <div className="project-overlay">
              <h3 className="project-title">Resume</h3>
              <p className="project-description">
              Here is my resume. Just convert it to HTML and CSS.
              </p>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">React</span>
              </div>
              <a
                className="btn-outline"
                href="https://tour-travels-opal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <span className="project-icon">
                  <FaArrowUpRightFromSquare />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
