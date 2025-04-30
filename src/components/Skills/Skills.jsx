import React from "react";
import "./Skills.css"; // Link to your CSS

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 70 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "SCSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "jQuery", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "UI/UX Tools",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Photoshop", level: 85 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Responsive Design", level: 85 },
      { name: "Performance Optimization", level: 80 },
      { name: "Pixel Perfect Design", level: 75 },
    ],
  },
];


const Skills = () => {
  return (
    <div id="skills" className="skill-section section-padding">
      <div className="container">
        <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">My Skills</h2>
        </div>
        <div className="skill-grid">
          {skillCategories.map((group, index) => (
            <div className="card-content" key={index}>
              <h3 className="section-sub-title">{group.category}</h3>
              <div className="skill-list">
                {group.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="skill-label">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
