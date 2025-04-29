import React from "react";
import "./ExperienceEducation.css";

const ExperienceEducation = () => {
  return (
    <div className="ExperienceEducation-section section-padding">
      <div className="container">
        <div className="ExperienceEducation-grid">
          <div className="experience-wap">
            <div className="sectionTitle-wrap">
              <h2 className="section-title text-center mb-12">Experience</h2>
            </div>
            <div className="timeline-item m-0">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="education-title">Frontend Developer Intern</h3>
                <p className="education-institution">Optillius</p>
                <p className="education-date">
                  A company specializing in web development solutions.
                </p>
                <div className="duties-text">
                  <h4 className="education-title">Duties/Responsibilities:</h4>
                  <ul>
                    <li>
                      Developed and optimized responsive, pixel-perfect web
                      interfaces.
                    </li>
                    <li>
                      Collaborated with senior developers to implement designs
                      using HTML, CSS, and JavaScript.
                    </li>
                    <li>
                      Utilized Figma and Photoshop to create wireframes,
                      prototypes, and final UI designs.
                    </li>
                    <li>
                      Converted PSD and Figma designs into fully functional HTML
                      templates.
                    </li>
                    <li>
                      Participated in user requirements analysis, design, and
                      programming support for the enhancement of Web and mobile
                      applications.
                    </li>
                    <li>
                      Maintained and improved the performance of existing
                      websites or web-based software. Wrote reusable code.
                    </li>
                    <li>Collaborated with the Backend and QA teams.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="education-wrap">
            <div className="sectionTitle-wrap">
              <h2 className="section-title text-center mb-12">Education</h2>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="education-title">
                  B.Sc. in Computer Science &amp; Engineering
                </h3>
                <p className="education-institution">
                  Bangladesh University (BU)
                </p>
                <p className="education-date">10/2024 – Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="education-title">
                  Diploma in Food Engineering & Technology
                </h3>
                <p className="education-institution">
                  Thakurgaon Polytechnic Institute
                </p>
                <p className="education-date">01/2020 – 12/2020</p>
              </div>
            </div>
            <div className="timeline-item m-0">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="education-title">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="education-institution">Daudpur M.L High School</p>
                <p className="education-date">01/2010 – 12/2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
