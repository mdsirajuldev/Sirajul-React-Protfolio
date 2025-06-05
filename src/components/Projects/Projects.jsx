import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Project1 from "../../assets/images/project/project1.png";
import Project2 from "../../assets/images/project/project2.png";
import Project3 from "../../assets/images/project/project3.png";
import Project4 from "../../assets/images/project/project4.png";
import Project5 from "../../assets/images/project/project5.png";
import Project6 from "../../assets/images/project/project6.png";
import "./Projects.css";

// Dynamic project data array
const projectData = [
  {
    title: "Tour & Travels",
    description:
      "Experienced in Tour and Travel web design, creating innovative and user-friendly websites.",
    image: Project1,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://tour-travels-opal.vercel.app/",
  },
  {
    title: "Education Website",
    description:
      "Innovative web designer with a strong academic foundation and proven design expertise.",
    image: Project2,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://education-mu-lovat.vercel.app/",
  },
  {
    title: "Exdos Website",
    description:
      "Experienced in Exdos web design, creating innovative and user-friendly websites.",
    image: Project3,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://exdos-five.vercel.app/",
  },
  {
    title: "Hospital Website",
    description:
      "Experienced in Tour and Travel web design, creating innovative and user-friendly websites.",
    image: Project4,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://hospital-ten-theta.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using HTML, CSS, and JavaScript.",
    image: Project5,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://sirajul-react-protfolio.vercel.app/",
  },
  {
    title: "Nasal clip product landing page",
    description: "Here is Nasal clip product landing page. Just convert it to HTML, CSS and JavaScript.",
    image: Project6,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://shopify-task-tau.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="project-section section-padding">
      <div className="container">
        <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">My Projects</h2>
        </div>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="btn-outline"
                  href={project.url}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
