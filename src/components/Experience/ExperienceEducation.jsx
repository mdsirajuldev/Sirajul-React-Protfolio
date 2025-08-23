import React from "react";
import "./ExperienceEducation.css";
const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Strawberry Tech Ltd",
    description: "A company specializing in web development solutions.",
    responsibilitiesTitle: "Duties/Responsibilities:",
    responsibilities: [
      "Built responsive, mobile-first websites and ensured cross-browser compatibility.",
      "Converted Figma/XD designs into reusable React components for scalability and maintainability.",
      "Optimized performance, loading speed, and SEO, while integrating APIs and third-party tools.",
    ],
  },
  {
    title: "Web Designer Intern",
    company: "Optillius",
    description: "A company specializing in web development solutions.",
    responsibilitiesTitle: "Duties/Responsibilities:",
    responsibilities: [
      "Designed and developed pixel-perfect web interfaces using HTML, CSS, and JavaScript.",
      "Transformed Figma/PSD designs into functional UI with responsive layouts.",
      "Improved existing websites by writing clean, reusable code and enhancing performance.",
    ],
  },
];
const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University (BU)",
    duration: "10/2024 – Present",
  },
  {
    degree: "Diploma in Food Engineering & Technology",
    institution: "Thakurgaon Polytechnic Institute",
    duration: "01/2020 – 12/2020",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Daudpur M.L High School",
    duration: "01/2010 – 12/2016",
  },
];
const ExperienceEducation = () => {
  return (
    <div
      id="experienceEducation"
      className="ExperienceEducation-section section-padding"
    >
      <div className="container">
        <div className="ExperienceEducation-grid">
          <div className="experience-wap">
            <div className="sectionTitle-wrap">
              <h2 className="section-title text-center mb-12">Experience</h2>
            </div>
            <div className="timeline-item m-0">
              <div className="timeline-dot"></div>
              {experiences.map((info, inx) => (
                <div className="timeline-content mb-3" key={inx}>
                  <h3 className="education-title">{info.title}</h3>
                  <p className="education-institution">{info.company}</p>
                  <p className="education-date">{info.description}</p>
                  <div className="duties-text">
                    <h4 className="education-title">
                      {info.responsibilitiesTitle}
                    </h4>
                    <ul>
                      {info.responsibilities.map((duty, idx) => (
                        <li key={idx}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="education-wrap">
            <div className="sectionTitle-wrap">
              <h2 className="section-title text-center mb-12">Education</h2>
            </div>
            {educationData.map((education, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="education-title">{education.degree}</h3>
                  <p className="education-institution">
                    {education.institution}
                  </p>
                  <p className="education-date">{education.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
