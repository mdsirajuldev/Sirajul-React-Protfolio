import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Project1 from "../../assets/images/project/project1.png";
import Project2 from "../../assets/images/project/project2.png";
import Project3 from "../../assets/images/project/project3.png";
import Project4 from "../../assets/images/project/project4.png";
import Project5 from "../../assets/images/project/project5.png";
import Project6 from "../../assets/images/project/project6.png";
import Project7 from "../../assets/images/project/project7.png";
import Project8 from "../../assets/images/project/project8.png";
import Project9 from "../../assets/images/project/project9.png";
import "./Projects.css";

// 🔥 Project Data
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
      "Professional hospital website designed for modern healthcare services.",
    image: Project4,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://hospital-ten-theta.vercel.app/",
  },
  {
    title: "Business Website",
    description: "Business landing page built using HTML, CSS, JavaScript, and React.",
    image: Project5,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://business-landing-page-sigma.vercel.app/",
  },
  {
    title: "Nasal Clip Product Landing Page",
    description:
      "A modern product landing page built using HTML, CSS, and JavaScript.",
    image: Project6,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://shopify-task-tau.vercel.app/",
  },
  {
    title: "Restaurant Website",
    description:
      "A responsive restaurant website designed with modern UI and UX.",
    image: Project7,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://restaurant-kappa-five.vercel.app/",
  },
  {
    title: "Modern Store Website",
    description:
      "An eCommerce-style shopping website built using HTML, CSS, and JavaScript.",
    image: Project8,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://shhoping-here.vercel.app/",
  },
  {
    title: "Modern User Profile Website",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project9,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://shope-user-porfile.vercel.app/",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  return (
    <div id="projects" className="project-section section-padding">
      <div className="container">
        <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">My Projects</h2>
        </div>

        <div className="projects-grid">
          {projectData.slice(0, visibleProjects).map((project, index) => (
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

        {/* View More Button */}
        {visibleProjects < projectData.length && (
          <div className="text-center mt-10">
            <button onClick={handleViewMore} className="btn-primary">
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
