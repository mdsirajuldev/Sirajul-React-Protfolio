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
import Project10 from "../../assets/images/project/project10.png";
import Project11 from "../../assets/images/project/project11.png";
import Project12 from "../../assets/images/project/project12.png";
import Project13 from "../../assets/images/project/project13.png";
import Project14 from "../../assets/images/project/project14.png";
import Project15 from "../../assets/images/project/project15.png";
import Project16 from "../../assets/images/project/project16.png";
import Project17 from "../../assets/images/project/project17.png";
import Project18 from "../../assets/images/project/project18.png";
import Project19 from "../../assets/images/project/project19.png";

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
    title: "Laundry Website",
    description:
      "Experienced in Laundry web design, creating innovative and user-friendly websites.",
    image: Project18,
    tags: ["CMS, Wix Studio"],
    url: "https://sirajdev01.wixstudio.com/laundromat/",
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
    title: "Restaurant Website",
    description: "Restaurant landing page built using wix studio.",
    image: Project17,
    tags: ["CMS, Wix Studio"],
    url: "https://websolutionstech.wixstudio.com/italian-food",
  },
  {
    title: "Business Website",
    description: "Business landing page built using HTML, CSS, JavaScript, and React.",
    image: Project5,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://business-landing-page-sigma.vercel.app/",
  },
  {
    title: "Spa Center Website",
    description: "Spa Center landing page built using wix studio.",
    image: Project14,
    tags: ["CMS, Wix Studio"],
    url: "https://sirajdev01.wixstudio.com/spacenter",
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
    title: "Modern User Ai CV Maker",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project15,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://ai-cv-maker-zdf6.vercel.app/",
  },
  {
    title: "Modern User POS System",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project13,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://pos-iota-six.vercel.app/",
  },
  {
    title: "Modern StudioTill Website",
    description:
      "A clean and modern StudioTill service interface built using Wix studio.",
    image: Project16,
    tags: ["CMS, Wix Studio"],
    url: "https://sirajdev01.wixstudio.com/laundromat/",
  },
  {
    title: "Modern User Profile Website",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project9,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://shope-user-porfile.vercel.app/",
  },
  {
    title: "Modern User Small e-Commerce Website",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project19,
    tags: ["HTML", "CSS", "React"],
    url: "https://e-commerce-react-website-eight.vercel.app/",
  },
  {
    title: "Modern User Small Document Management System",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project10,
    tags: ["Material UI", "React"],
    url: "https://dasbroad-m-ui.vercel.app/",
  },
  {
    title: "Modern User Food Delivery Website",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project12,
    tags: ["HTML", "CSS", "React"],
    url: "https://live-shope.vercel.app/",
  },
  {
    title: "Modern User Profile Website",
    description:
      "A clean and modern user profile interface built using frontend technologies.",
    image: Project11,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://shope-user-porfile.vercel.app/",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(9);

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 3);
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

        {/* 🔥 View More Button */}
        {visibleProjects < projectData.length && (
          <div className="text-center mt-3">
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
