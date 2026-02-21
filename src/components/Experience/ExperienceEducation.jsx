import React, { useState } from "react";
import "./ExperienceEducation.css";

const experiences = [
  {
    title: "Wix Developer",
    company: "Web Solutions (Bangladesh)",
    description: "A company specializing in web development solutions.",
    responsibilitiesTitle: "Duties/Responsibilities:",
    responsibilities: [
      "Designed and developed responsive websites using Wix.",
      "Converted Figma and PSD designs into fully functional Wix websites.",
      "Built and managed dynamic pages using Wix CMS.",
      "Optimized websites for SEO, speed, and mobile responsiveness.",
      "Integrated contact forms, booking systems, and third-party tools.",
      "Ensured cross-browser and mobile compatibility.",
      "Provided website maintenance and regular updates.",
      "Collaborated with designers and backend developers to deliver scalable and high-performing web solutions.",
    ],
  },
  {
    title: "Frontend Developer & Wordpress Customization",
    company: "Prospiq Limited (Bangladesh)",
    description: "A company specializing in web development solutions.",
    responsibilitiesTitle: "Duties/Responsibilities:",
    responsibilities: [
      "Developed and maintained responsive, user-friendly front-end interfaces using HTML, CSS, JavaScript, and React.",
      "Customized WordPress themes and plugins to meet client-specific design and functionality requirements.",
      "Converted Figma and Adobe XD designs into high-quality, pixel-perfect web layouts.",
      "Ensured cross-browser compatibility and mobile responsiveness across all devices.",
      "Optimized website performance, loading speed, and SEO for better user experience and search visibility.",
      "Integrated third-party tools, APIs, and plugins to extend website functionality.",
      "Troubleshot and fixed UI, layout, and functionality issues across multiple WordPress and React projects.",
      "Collaborated with designers and backend developers to deliver scalable and high-performing web solutions.",
    ],
  },
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
  const [visibleExperience, setVisibleExperience] = useState(1);

  const handleViewMore = () => {
    setVisibleExperience((prev) => prev + 2);
  };

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

              {experiences.slice(0, visibleExperience).map((info, inx) => (
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

              {visibleExperience < experiences.length && (
                <div className="text-center mt-3">
                  <button onClick={handleViewMore} className="btn-primary">
                    View More
                  </button>
                </div>
              )}
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