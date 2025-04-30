import React from "react";
import "./ExperienceEducation.css";
const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Optillius",
    description: "A company specializing in web development solutions.",
    responsibilitiesTitle: "Duties/Responsibilities:",
    responsibilities: [
      "Developed and optimized responsive, pixel-perfect web interfaces.",
      "Collaborated with senior developers to implement designs using HTML, CSS, and JavaScript.",
      "Utilized Figma and Photoshop to create wireframes, prototypes, and final UI designs.",
      "Converted PSD and Figma designs into fully functional HTML templates.",
      "Participated in user requirements analysis, design, and programming support for the enhancement of Web and mobile applications.",
      "Maintained and improved the performance of existing websites or web-based software. Wrote reusable code.",
      "Collaborated with the Backend and QA teams.",
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
                <div className="timeline-content" key={inx}>
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
